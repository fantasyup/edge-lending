// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./compound/InterestRateModel.sol";
import "./compound/Exponential.sol";
import "./BSWrapperToken.sol";
import "./interfaces/IBSControl.sol";
import "./interfaces/IBSVault.sol";
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IOracle.sol";

contract BSLendingPair is IBSLendingPair, Exponential {
    using SafeERC20 for IERC20;

    uint256 internal initialExchangeRateMantissa;
    uint256 public reserveFactorMantissa;
    uint256 public accrualBlockNumber;
    uint256 public borrowIndex;
    uint256 public totalBorrows;
    uint256 public totalReserves;
    uint256 internal constant borrowRateMaxMantissa = 0.0005e16;
    uint256 public percent = 1500;
    uint256 public divisor = 10000;

    IBSVault public vault;
    IBSControl public control;

    IERC20 public asset;
    BSWrapperToken public wrappedAsset;

    InterestRateModel public interestRate;

    mapping(address => uint256) principalBalance;
    mapping(address => BorrowSnapshot) accountBorrows;
    mapping(address => uint256) historicalReward;

    struct BorrowSnapshot {
        uint256 principal;
        uint256 interestIndex;
    }
    
    function initialize(
        IBSControl _control,
        IBSVault _vault,
        IERC20 _asset, 
        InterestRateModel _interestRate,
        uint256 _initialExchangeRateMantissa,
        uint256 _reserveFactorMantissa
    ) public {
        control = _control;
        vault = _vault;
        asset = _asset;
        interestRate = _interestRate;
        initialExchangeRateMantissa = _initialExchangeRateMantissa;
        reserveFactorMantissa = _reserveFactorMantissa;

        bytes memory name = abi.encodePacked("BS-vault");
        name = abi.encodePacked(name, ERC20(address(asset)).name());
        // abi encode and concat strings
        bytes memory symbol = abi.encodePacked("BS-");
        symbol = abi.encodePacked(symbol, ERC20(address(asset)).symbol());
        // abi encode and concat strings
        string memory assetName = string(name);
        string memory assetSymbol = string(symbol);

        // @TODO intialize it
        wrappedAsset = new BSWrapperToken(
            // address(stablecoin),
            // assetName,
            // assetSymbol
        );
    }

    /**
    * @notice getBlockNumber allows for easy retrieval of block number
    * @return block number
    **/
    function getBlockNumber() internal view returns (uint256) {
        return block.number;
    }


    // struct used by mint to avoid stack too deep errors
    struct MintLocalVars {
        MathError mathErr;
        uint256 exchangeRateMantissa;
        uint256 mintTokens;
        bool isMember;
    }

    function deposit(
        address _tokenReceipeint,
        uint256 _amount
    ) public {
        // declare struct
        MintLocalVars memory vars;

        //retrieve exchange rate
        vars.exchangeRateMantissa = exchangeRateCurrent();

        // We get the current exchange rate and calculate the number of BSWrapperToken to be minted:
        // mintTokens = _amount / exchangeRate
        (vars.mathErr, vars.mintTokens) = divScalarByExpTruncate(
            _amount,
            Exp({mantissa: vars.exchangeRateMantissa})
        );

        // the user should initially have deposited in the vault 
        // transfer appropriate amount of underlying from msg.sender to the Vault
        vault.transfer(asset, msg.sender, address(this), _amount);

        principalBalance[_tokenReceipeint] = principalBalance[_tokenReceipeint] + _amount;

        // mint appropriate Blacksmith DAI
        wrappedAsset.mint(_tokenReceipeint, vars.mintTokens);

        emit Deposit(address(this), address(asset), _tokenReceipeint, msg.sender, _amount);
    }

    // struct used by borrow function to avoid stack too deep errors
    struct BorrowLocalVars {
        MathError mathErr;
        uint256 accountBorrows;
        uint256 accountBorrowsNew;
        uint256 totalBorrowsNew;
    }

    /**
    @notice 
    @param _borrowAmount The amount of the underlying asset to borrow
    */
    function _borrow(
        address _borrower,
        uint256 _borrowAmount
    ) public {

        // create local vars
        BorrowLocalVars memory vars;

        // Fail if protocol has insufficient underlying cash
        require(getCashPrior() > _borrowAmount, "Not enough tokens to lend");

        // calculate the new borrower and total borrow balances, failing on overflow:
        vars.accountBorrows = borrowBalancePrior(_borrower);

        // totalBorrowsNew = totalBorrows + borrowAmount
        (vars.mathErr, vars.totalBorrowsNew) = addUInt(
            totalBorrows,
            _borrowAmount
        );

        // We write the previously calculated values into storage
        accountBorrows[_borrower].principal = vars.accountBorrowsNew;
        accountBorrows[_borrower].interestIndex = borrowIndex;
        totalBorrows = vars.totalBorrowsNew;

        vault.transfer(asset, address(this), _borrower, _borrowAmount);
    }

    struct RepayBorrowLocalVars {
        MathError mathErr;
        uint256 repayAmount;
        uint256 borrowerIndex;
        uint256 accountBorrows;
        uint256 accountBorrowsNew;
        uint256 totalBorrowsNew;
        uint256 totalOwed;
        uint256 borrowPrinciple;
        uint256 interestPayed;
    }

    /**
    @notice Sender repays their own borrow
    @param _repayAmount The amount to repay
    */
    function repay(
        uint256 _repayAmount
    ) public {
        //create local vars storage
        RepayBorrowLocalVars memory vars;

        //We fetch the amount the borrower owes, with accumulated interest
        vars.accountBorrows = borrowBalanceCurrent(msg.sender);
        //require the borrower cant pay more than they owe
        require(
            _repayAmount <= vars.accountBorrows,
            "You are trying to pay back more than you owe"
        );

        //If repayAmount == 0, repayAmount = accountBorrows
        if (_repayAmount == 0) {
            vars.repayAmount = vars.accountBorrows;
        } else {
            vars.repayAmount = _repayAmount;
        }

        require(
            asset.balanceOf(msg.sender) >= vars.repayAmount,
            "Not enough stablecoin to repay"
        );

        // transfer the stablecoin from the borrower
        asset.safeTransferFrom(
            msg.sender,
            address(this),
            vars.repayAmount
        );

        //We calculate the new borrower and total borrow balances
        //accountBorrowsNew = accountBorrows - actualRepayAmount
        (vars.mathErr, vars.accountBorrowsNew) = subUInt(
            vars.accountBorrows,
            vars.repayAmount
        );
        require(
            vars.mathErr == MathError.NO_ERROR,
            "Repay borrow new account balance calculation failed"
        );

        //totalBorrowsNew = totalBorrows - actualRepayAmount
        (vars.mathErr, vars.totalBorrowsNew) = subUInt(
            totalBorrows,
            vars.repayAmount
        );
        require(
            vars.mathErr == MathError.NO_ERROR,
            "Repay borrow new total balance calculation failed"
        );

        /* We write the previously calculated values into storage */
        totalBorrows = vars.totalBorrowsNew;
        accountBorrows[msg.sender].principal = vars.accountBorrowsNew;
        accountBorrows[msg.sender].interestIndex = borrowIndex;

        emit Repay(
            address(this), 
            address(asset), 
            msg.sender, // @TODO add beneficiary
            msg.sender, 
            _repayAmount
        );
    }

    struct WithdrawLocalVars {
        MathError mathErr;
        uint256 exchangeRateMantissa;
        uint256 burnTokens;
        uint256 currentBSBalance;
        uint256 currentUnderlyingBalance;
        uint256 principalRedeemed;
        uint256 amount;
    }

    function withdraw(
        address _user,
        address _to,
        uint256 _amount
    ) public {
        WithdrawLocalVars memory vars;

        // fetch the users current Blacksmith wrapped balance
        vars.currentBSBalance = vault.balanceOf(asset, _user);
        // retreive current exchange rate
        vars.exchangeRateMantissa = exchangeRateCurrent();
        // calculate the current underlying balance
        (vars.mathErr, vars.currentUnderlyingBalance) = mulScalarTruncate(
            Exp({mantissa: vars.exchangeRateMantissa}),
            vars.currentBSBalance
        );

        if (_amount == 0) {
            vars.amount = vars.currentUnderlyingBalance;
        } else {
            vars.amount = _amount;
        }

        // we get the current exchange rate and calculate the number of EdgeWrapperToken to be burned:
        // burnTokens = _amount / exchangeRate
        (vars.mathErr, vars.burnTokens) = divScalarByExpTruncate(
            vars.amount,
            Exp({mantissa: vars.exchangeRateMantissa})
        );

        // ensure the vault pair has enough stablecoin
        require(
            vault.balanceOf(asset, address(this)) >= vars.amount,
            "Not enough stablecoin in vault."
        );

        uint256 currentUnderlyingReward = 0;
        if (vars.currentUnderlyingBalance > principalBalance[_user]) {
            currentUnderlyingReward = vars.currentUnderlyingBalance - principalBalance[_user];
            
        }

        vars.principalRedeemed = vars.amount - currentUnderlyingReward;

        if (vars.amount >= currentUnderlyingReward) {
            historicalReward[_user] = historicalReward[_user] + currentUnderlyingReward;
            
            require(
                vars.principalRedeemed <= principalBalance[_user],
                "Error calculating reward."
            );
            principalBalance[_user] = principalBalance[_user] - vars.principalRedeemed;
            
        } else {
            historicalReward[_user] = historicalReward[_user] - vars.amount;
        }

        wrappedAsset.burn(_user, vars.burnTokens);
        // transferUnderlyingTo
        vault.transfer(asset, address(this) ,_to, vars.amount);

        emit Withdraw(address(this), address(asset), _user, _to, vars.amount, vars.burnTokens);
    }

    /**
        @notice _repayLiquidatingLoan is a function used by the Edge Control contract to repay a loan on behalf of a liquidator
        @param _borrower is the address of the borrower who took out the loan
        @param _liquidator is the address of the account who is liquidating the loan
        @param _amount is the amount of StableCoin being repayed
        @dev this function uses the onlyEdgeControl modifier which means it can only be called by the Edge Control contract
    **/
    function _repayLiquidatingLoan(
        address _borrower,
        address _liquidator,
        uint256 _amount
    ) public {
        asset.safeTransferFrom(_liquidator, address(this), _amount);
        
        // calculate the fee on the principle received
        uint256 fee = calculateFee(_amount);
        //transfer fee amount to Edge team
        totalReserves = totalReserves + fee;
        // Clear the borrowers loan
        accountBorrows[_borrower].principal = 0;
        accountBorrows[_borrower].interestIndex = 0;
        totalBorrows = totalBorrows - _amount;
        // transfer the owed amount of stablecoin from the borrower to this contract
    }
    
    /**
    @notice calculateFee is used to calculate the fee earned by the Edge Platform
    @param _payedAmount is a uint representing the full amount of stablecoin earned as interest
    **/
    function calculateFee(uint256 _payedAmount) public view returns (uint256) {
        uint256 fee = _payedAmount * percent / divisor;
        return fee;
    }

    /**
     @notice Accrue interest then return the up-to-date exchange rate
     @return Calculated exchange rate scaled by 1e18
     **/
    function exchangeRateCurrent() public returns (uint256) {
        accrueInterest();

        uint256 currentTotalSupply = wrappedAsset.totalSupply();

        if (currentTotalSupply == 0) {
            //If there are no tokens minted: exchangeRate = initialExchangeRate
            return initialExchangeRateMantissa;
        } else {
            //Otherwise: exchangeRate = (totalCash + totalBorrows - totalReserves) / totalSupply
            uint256 totalCash = getCashPrior(); //get contract asset balance
            uint256 cashPlusBorrowsMinusReserves;
            Exp memory exchangeRate;
            MathError mathErr;
            //calculate total value held by contract plus owed to contract
            (mathErr, cashPlusBorrowsMinusReserves) = addThenSubUInt(
                totalCash,
                totalBorrows,
                totalReserves
            );
            //calculate exchange rate
            (mathErr, exchangeRate) = getExp(
                cashPlusBorrowsMinusReserves,
                currentTotalSupply
            );
            return (exchangeRate.mantissa);
        }
    } 

    /**
    @notice getCashPrior is a view funcion that returns the USD balance of all held underlying stablecoin assets
    **/
    function getCashPrior() public returns (uint256) {
        return vault.balanceOf(asset, address(this));
    }

    /**
    @notice Applies accrued interest to total borrows and reserves
    @dev This calculates interest accrued from the last checkpointed block
        up to the current block and writes new checkpoint to storage.
    **/
    function accrueInterest() public {
        // remember the initial block number
        uint256 currentBlockNumber = getBlockNumber();
        uint256 accrualBlockNumberPrior = accrualBlockNumber;

        // short-circuit accumulating 0 interest
        if (accrualBlockNumberPrior == currentBlockNumber) {
            // @TODO confirm need for this
            // emit InterestShortCircuit(currentBlockNumber);
            return;
        }

        // read the previous values out of storage
        uint256 cashPrior = getCashPrior();
        uint256 borrowsPrior = totalBorrows;
        uint256 reservesPrior = totalReserves;
        uint256 borrowIndexPrior = borrowIndex;
        // calculate the current borrow interest rate
        uint256 borrowRateMantissa = interestRate.getBorrowRate(
            cashPrior,
            borrowsPrior,
            reservesPrior
        );
        require(
            borrowRateMantissa <= borrowRateMaxMantissa,
            "Borrow Rate mantissa error"
        );
        //Calculate the number of blocks elapsed since the last accrual
        (MathError mathErr, uint256 blockDelta) = subUInt(
            currentBlockNumber,
            accrualBlockNumberPrior
        );
        //Calculate the interest accumulated into borrows and reserves and the new index:
        Exp memory simpleInterestFactor;
        uint256 interestAccumulated;
        uint256 totalBorrowsNew;
        uint256 totalReservesNew;
        uint256 borrowIndexNew;
        //simpleInterestFactor = borrowRate * blockDelta
        (mathErr, simpleInterestFactor) = mulScalar(
            Exp({mantissa: borrowRateMantissa}),
            blockDelta
        );
        //interestAccumulated = simpleInterestFactor * totalBorrows
        (mathErr, interestAccumulated) = mulScalarTruncate(
            simpleInterestFactor,
            borrowsPrior
        );
        //totalBorrowsNew = interestAccumulated + totalBorrows
        (mathErr, totalBorrowsNew) = addUInt(interestAccumulated, borrowsPrior);
        //totalReservesNew = interestAccumulated * reserveFactor + totalReserves
        (mathErr, totalReservesNew) = mulScalarTruncateAddUInt(
            Exp({mantissa: reserveFactorMantissa}),
            interestAccumulated,
            reservesPrior
        );
        //borrowIndexNew = simpleInterestFactor * borrowIndex + borrowIndex
        (mathErr, borrowIndexNew) = mulScalarTruncateAddUInt(
            simpleInterestFactor,
            borrowIndexPrior,
            borrowIndexPrior
        );

        //Write the previously calculated values into storage
        accrualBlockNumber = currentBlockNumber;
        borrowIndex = borrowIndexNew;
        totalBorrows = totalBorrowsNew;
        totalReserves = totalReservesNew;

        emit InterestAccrued(
            address(this),
            accrualBlockNumber,
            borrowIndex,
            totalBorrows,
            totalReserves
        );
    }

     /**
    @notice returns last calculated account's borrow balance using the prior borrowIndex
    @param _account The address whose balance should be calculated after updating borrowIndex
    @return The calculated balance
    **/
    function borrowBalancePrior(address _account) public view returns (uint256) {
        MathError mathErr;
        uint256 principalTimesIndex;
        uint256 result;

        // Get borrowBalance and borrowIndex
        BorrowSnapshot memory borrowSnapshot = accountBorrows[_account];
        //If borrowBalance = 0 then borrowIndex is likely also 0.
        //Rather than failing the calculation with a division by 0, we immediately return 0 in this case.
        if (borrowSnapshot.principal == 0) {
            return (0);
        }
        //Calculate new borrow balance using the interest index:
        //recentBorrowBalance = borrower.borrowBalance * market.borrowIndex / borrower.borrowIndex
        (mathErr, principalTimesIndex) = mulUInt(
            borrowSnapshot.principal,
            borrowIndex
        );
        //if theres a math error return zero so as not to fail
        if (mathErr != MathError.NO_ERROR) {
            return (0);
        }
        (mathErr, result) = divUInt(
            principalTimesIndex,
            borrowSnapshot.interestIndex
        );
        //if theres a math error return zero so as not to fail
        if (mathErr != MathError.NO_ERROR) {
            return (0);
        }

        return result;
    }

    /**
    @notice Accrue interest to updated borrowIndex and then calculate account's borrow balance using the updated borrowIndex
    @param _account The address whose balance should be calculated after updating borrowIndex
    @return The calculated balance
    **/
    function borrowBalanceCurrent(address _account) public returns (uint256) {
        accrueInterest();
        return borrowBalancePrior(_account);
    }
}
