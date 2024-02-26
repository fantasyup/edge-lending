// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./compound/Exponential.sol";
import "./interfaces/IInterestRateModel.sol";
import "./interfaces/IBSVault.sol";
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IBSWrapperToken.sol";
import "./interfaces/IPriceOracle.sol";
import "hardhat/console.sol";
import "./util/Initializable.sol";
import "./token/IERC20Details.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// 
/// @title LendingPair
/// @author samparsky
/// @notice 
///
////////////////////////////////////////////////////////////////////////////////////////////

contract LendingPair is IBSLendingPair, Exponential, Initializable {
    using SafeERC20 for IERC20;

    /// @dev initialExchangeRateMantissa Initial exchange rate used when minting the first CTokens (used when totalSupply = 0)
    uint256 internal initialExchangeRateMantissa;
    /// @notice Fraction of interest currently set aside for reserves
    uint256 public reserveFactorMantissa;
    /// @notice Block number that interest was last accrued at
    uint256 public accrualBlockNumber;
    /// @notice Accumulator of the total earned interest rate since the opening of the market
    uint256 public borrowIndex;
    /// @notice Total amount of outstanding borrows of the asset in this market
    uint256 public totalBorrows;
    /// @notice Total amount of reserves of the underlying held in this market
    uint256 public totalReserves;
    /// @dev Maximum borrow rate that can ever be applied (.0005% / block)
    uint256 internal constant borrowRateMaxMantissa = 0.0005e16;
    /// @notice percent
    uint256 public percent = 1500;
    /// @notice divisor
    uint256 public divisor = 10000;

    /// @notice where the tokens are stored
    IBSVault public vault;
    
    /// @notice The admin
    address public blackSmithTeam;

    /// @notice The price oracle for the assets
    IPriceOracle public oracle;

    /// @notice The pair borrow asset
    IERC20 public override asset;

    /// @notice The pair collateral asset
    IERC20 public collateralAsset;

    /// @notice The wrapper token for the borrow asset
    IBSWrapperToken public wrappedAsset;

    /// @notice The interest rate model for the borrow asset
    IInterestRateModel public interestRate;
    
    /// @dev mapping of address to borrow asset deposited
    mapping(address => uint256) public principalBalance;
    
    /// @notice Mapping of account addresses to outstanding borrow balances
    mapping(address => BorrowSnapshot) public accountBorrows;

    /// @dev historicalReward
    mapping(address => uint256) public historicalReward;

    /// @dev mapping of address to collateral deposited
    mapping(address => uint256) private collateralBalance;

    modifier onlyBlackSmithTeam() {
        require(msg.sender == blackSmithTeam, "ONLY_BLACK_SMITH_TEAM");
        _;
    }

    /// @notice Container for borrow balance information
    /// principal Total balance (with accrued interest), after applying the most recent balance-changing action
    /// interestIndex Global borrowIndex as of the most recent balance-changing action
    struct BorrowSnapshot {
        uint256 principal;
        uint256 interestIndex;
    }
    
    /// @notice Initialize function
    /// @param _blackSmithTeam control addres 
    /// @param _oracle price oracle
    /// @param _vault where assets are stored
    /// @param _asset borrow asset
    /// @param _collateralAsset pair collateral
    /// @param _interestRate for borrow asset
    /// @param _initialExchangeRateMantissa initial exchange rate mantissa
    /// @param _reserveFactorMantissa reserve factor for borrow
    /// @param _wrappedBorrowAsset wrapped token minted when depositing borrow asset
    function initialize(
        address _blackSmithTeam,
        IPriceOracle _oracle,
        IBSVault _vault,
        IERC20 _asset, 
        IERC20 _collateralAsset,
        IInterestRateModel _interestRate,
        uint256 _initialExchangeRateMantissa,
        uint256 _reserveFactorMantissa,
        IBSWrapperToken _wrappedBorrowAsset
    ) external initializer {
        blackSmithTeam = _blackSmithTeam;
        vault = _vault;
        asset = _asset;
        oracle = _oracle;
        borrowIndex = mantissaOne;
        collateralAsset = _collateralAsset;
        interestRate = _interestRate;
        initialExchangeRateMantissa = _initialExchangeRateMantissa;
        reserveFactorMantissa = _reserveFactorMantissa;
        // // abi encode and concat strings
        // bytes memory name = abi.encodePacked("BlackSmith-");
        // name = abi.encodePacked(name, _asset.name(), _collateralAsset.name());
        // bytes memory symbol = abi.encodePacked("BS-");
        // symbol = abi.encodePacked(symbol, _asset.symbol(), _collateralAsset.symbol());

        // initialize wrapped borrow asset
        IBSWrapperToken(_wrappedBorrowAsset).initialize(address(_asset), "BlackSmith-", "BS");
        wrappedAsset = _wrappedBorrowAsset;
    }

    /// @notice getBlockNumber allows for easy retrieval of block number
    /// @return block number
    function getBlockNumber() internal view returns (uint256) {
        return block.number;
    }

    /// @notice deposit allows a user to deposit underlying collateral from vault
    /// @param _vaultShareAmount is the amount of user vault shares being collateralized
    function depositCollateral(address _tokenReceipeint, uint256 _vaultShareAmount) external override {
        vault.transfer(collateralAsset, msg.sender, address(this), _vaultShareAmount);
        collateralBalance[_tokenReceipeint] = collateralBalance[_tokenReceipeint] + _vaultShareAmount;
        emit Deposit(address(this), address(collateralAsset), _tokenReceipeint, msg.sender, _vaultShareAmount);
    }

    // struct used by mint to avoid stack too deep errors
    struct MintLocalVars {
        uint256 exchangeRateMantissa;
        uint256 mintTokens;
        bool isMember;
    }

    // the user should initially have deposited in the vault 
    // transfer appropriate amount of underlying from msg.sender to the Vault
    function depositBorrowAsset(
        address _tokenReceipeint,
        uint256 _vaultShareAmount
    ) external override {
        // declare struct
        MintLocalVars memory vars;

        //retrieve exchange rate
        vars.exchangeRateMantissa = exchangeRateCurrent();

        // We get the current exchange rate and calculate the number of BSWrapperToken to be minted:
        // mintTokens = _amount / exchangeRate
        vars.mintTokens = divScalarByExpTruncate(
            _vaultShareAmount,
            Exp({mantissa: vars.exchangeRateMantissa})
        );

        // transfer appropriate amount of DAI from msg.sender to the Vault
        vault.transfer(asset, msg.sender, address(this), _vaultShareAmount);

        principalBalance[_tokenReceipeint] = principalBalance[_tokenReceipeint] + _vaultShareAmount;
        // mint appropriate Blacksmith DAI
        wrappedAsset.mint(_tokenReceipeint, vars.mintTokens);
        emit Deposit(address(this), address(asset), _tokenReceipeint, msg.sender, _vaultShareAmount);
    }

    // struct used by borrow function to avoid stack too deep errors
    struct BorrowLocalVars {
        uint256 accountBorrows;
        uint256 accountBorrowsNew;
        uint256 totalBorrowsNew;
    }

    /// @notice _borrow
    /// @param _borrower the address of the borrower
    /// @param _amountOfSharesToBorrow The amount of shares of the borrow asset to borrow
    function _borrow(
        address _borrower,
        uint256 _amountOfSharesToBorrow
    ) internal {
        // create local vars
        BorrowLocalVars memory vars;

        // Fail if protocol has insufficient underlying cash
        require(getCashPrior() > _amountOfSharesToBorrow, "NOT_ENOUGH_TOKEN");

        // calculate the new borrower and total borrow balances, failing on overflow:
        vars.accountBorrows = borrowBalancePrior(_borrower);
        vars.accountBorrowsNew = vars.accountBorrows + _amountOfSharesToBorrow;
        
        // totalBorrowsNew = totalBorrows + borrowAmount
        vars.totalBorrowsNew = totalBorrows + _amountOfSharesToBorrow;

        // We write the previously calculated values into storage
        accountBorrows[_borrower].principal = vars.accountBorrowsNew;
        accountBorrows[_borrower].interestIndex = borrowIndex;
        totalBorrows = vars.totalBorrowsNew;
        // console.logUint(_amountOfSharesToBorrow);

        vault.transfer(asset, address(this), _borrower, _amountOfSharesToBorrow);
    }

    /// @param _vaultShares is the amount of the borrow asset vault shares the user wants to borrow
    function borrow(uint256 _vaultShares) external {
        uint256 borrowedTotalInUSD = getTotalBorrowedValueInUSD(msg.sender);
        // console.logUint(borrowedTotalInUSD);
        uint256 borrowLimitInUSD = getBorrowLimitInUSD(msg.sender);
        // console.logUint(borrowLimitInUSD);
        uint256 borrowAmountAllowedInUSD = borrowLimitInUSD - borrowedTotalInUSD;
        // console.logUint(borrowAmountAllowedInUSD);

        uint256 borrowAmountInUSD = getPriceOfToken(asset, _vaultShares);

        // require the amount being borrowed is less than or equal to the amount they are aloud to borrow
        require(
            borrowAmountAllowedInUSD >= borrowAmountInUSD,
            "BORROWING_MORE_THAN_ALLOWED"
        );

        _borrow(msg.sender, _vaultShares);

        emit Borrow(msg.sender, _vaultShares);
    }

    struct RepayBorrowLocalVars {
        uint256 repayShares;
        uint256 borrowerIndex;
        uint256 accountBorrows;
        uint256 accountBorrowsNew;
        uint256 totalBorrowsNew;
        uint256 totalOwed;
        uint256 borrowPrinciple;
        uint256 interestPayed;
    }

    /// @notice Sender repays their own borrow
    /// @param _repayAmountInShares The amount of shares to repay
    function repay(
        uint256 _repayAmountInShares
    ) public {
        // create local vars storage
        RepayBorrowLocalVars memory vars;

        // We fetch the amount the borrower owes, with accumulated interest
        vars.accountBorrows = borrowBalanceCurrent(msg.sender);

        // console.logString("accountboorwos");
        // console.logUint(vars.accountBorrows);
        // require the borrower cant pay more than they owe
        require(
            _repayAmountInShares <= vars.accountBorrows,
            "PAYING_MORE_THAN_OWED"
        );

        // If repayShares == 0, repayShares = accountBorrows
        if (_repayAmountInShares == 0) {
            vars.repayShares = vars.accountBorrows;
        } else {
            vars.repayShares = _repayAmountInShares;
        }
        // redudant maybe?
        require(
            vault.balanceOf(asset, msg.sender) >= _repayAmountInShares,
            "NOT_ENOUGH_BALANCE_TO_REPAY"
        );

        // transfer the borrow asset from the borrower to LendingPair
        vault.transfer(
            asset,
            msg.sender,
            address(this),
            _repayAmountInShares
        );

        // We calculate the new borrower and total borrow balances
        // accountBorrowsNew = accountBorrows - actualRepayShares
        vars.accountBorrowsNew = vars.accountBorrows - vars.repayShares;

        // totalBorrowsNew = totalBorrows - actualRepayAmount
        vars.totalBorrowsNew = totalBorrows - vars.repayShares;
        
        /* We write the previously calculated values into storage */
        totalBorrows = vars.totalBorrowsNew;
        accountBorrows[msg.sender].principal = vars.accountBorrowsNew;
        accountBorrows[msg.sender].interestIndex = borrowIndex;

        emit Repay(
            address(this), 
            address(asset), 
            msg.sender, // @TODO add beneficiary
            msg.sender, 
            _repayAmountInShares
        );
    }

    struct RedeemLocalVars {
        uint256 exchangeRateMantissa;
        uint256 burnTokens;
        uint256 currentBSBalance;
        uint256 currentUnderlyingBalance;
        uint256 principalRedeemed;
        uint256 amount;
    }

    /// @notice Allows a user to redeem their Wrapper Token for the appropriate amount of underlying stablecoin asset
    /// @param _to Address to send the underlying tokens to
    /// @param _amount of wrapper token to redeem
    function redeem(
        address _to,
        uint256 _amount
    ) external override {
        RedeemLocalVars memory vars;

        // fetch the users current wrapped balance
        vars.currentBSBalance = wrappedAsset.balanceOf(msg.sender);

        // retreive current exchange rate
        vars.exchangeRateMantissa = exchangeRateCurrent();
        // calculate the current underlying balance
        vars.currentUnderlyingBalance = mulScalarTruncate(
            Exp({mantissa: vars.exchangeRateMantissa}),
            vars.currentBSBalance
        );

        if (_amount == 0) {
            vars.amount = vars.currentUnderlyingBalance;
        } else {
            vars.amount = _amount;
        }
        // console.logString("exchangeRateMantissa");
        // console.logUint(vars.exchangeRateMantissa);
        // we get the current exchange rate and calculate the number of EdgeWrapperToken to be burned:
        // burnTokens = _amount / exchangeRate
        vars.burnTokens = divScalarByExpTruncate(
            vars.amount,
            Exp({mantissa: vars.exchangeRateMantissa})
        );

        // ensure the vault pair has enough borrow asset balance
        require(
            vault.balanceOf(asset, address(this)) >= vars.amount,
            "NOT_ENOUGH_BALANCE"
        );

        uint256 currentUnderlyingReward = 0;
        if (vars.currentUnderlyingBalance > principalBalance[msg.sender]) {
            currentUnderlyingReward = vars.currentUnderlyingBalance - principalBalance[msg.sender];
        }

        vars.principalRedeemed = vars.amount - currentUnderlyingReward;

        if (vars.amount >= currentUnderlyingReward) {
            historicalReward[msg.sender] = historicalReward[msg.sender] + currentUnderlyingReward;
            
            require(
                vars.principalRedeemed <= principalBalance[msg.sender],
                "ERROR_CALCULATING_REWARD"
            );
            principalBalance[msg.sender] = principalBalance[msg.sender] - vars.principalRedeemed;
            
        } else {
            historicalReward[msg.sender] = historicalReward[msg.sender] - vars.amount;
        }

        wrappedAsset.burn(msg.sender, vars.burnTokens);
        // transferUnderlyingTo
        vault.transfer(asset, address(this), _to, vars.amount);

        emit Redeem(address(this), address(asset), msg.sender, _to, vars.amount, vars.burnTokens);
    }
    
    /// @notice calculateFee is used to calculate the fee earned
    /// @param _payedAmount is a uint representing the full amount earned as interest
    function calculateFee(uint256 _payedAmount) public view returns (uint256) {
        uint256 fee = _payedAmount * percent / divisor;
        return fee;
    }

    
    /// @notice Accrue interest then return the up-to-date exchange rate
    /// @return Calculated exchange rate scaled by 1e18
    function exchangeRateCurrent() public returns (uint256) {
        accrueInterest();

        uint256 currentTotalSupply = wrappedAsset.totalSupply();
        // console.logString("currentTotalSupply");
        // console.logUint(currentTotalSupply);

        if (currentTotalSupply == 0) {
            // If there are no tokens minted: exchangeRate = initialExchangeRate
            return initialExchangeRateMantissa;
        } else {
            // Otherwise: exchangeRate = (totalCash + totalBorrows - totalReserves) / totalSupply
            uint256 totalCash = getCashPrior(); //get contract asset balance
            uint256 cashPlusBorrowsMinusReserves;
            Exp memory exchangeRate;

            // console.logUint(totalCash);
            // console.logUint(totalBorrows);
            // console.logUint(totalReserves);

            // calculate total value held by contract plus owed to contract
            cashPlusBorrowsMinusReserves = totalCash + totalBorrows - totalReserves;
            
            // console.logUint(cashPlusBorrowsMinusReserves);

            // calculate exchange rate
            exchangeRate = getExp(
                cashPlusBorrowsMinusReserves,
                currentTotalSupply
            );

            // console.logUint(exchangeRate.mantissa);

            return (exchangeRate.mantissa);
        }
    } 

    
    /// @notice getCashPrior is a view funcion that returns the balance of all held borrow asset
    function getCashPrior() public view returns (uint256) {
        return vault.balanceOf(asset, address(this));
    }

    
    /// @notice Applies accrued interest to total borrows and reserves
    /// @dev This calculates interest accrued from the last checkpointed block
    /// up to the current block and writes new checkpoint to storage.
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
        uint256 blockDelta = currentBlockNumber - accrualBlockNumberPrior;
        
        //Calculate the interest accumulated into borrows and reserves and the new index:
        Exp memory simpleInterestFactor;
        uint256 interestAccumulated;
        uint256 totalBorrowsNew;
        uint256 totalReservesNew;
        uint256 borrowIndexNew;

        //simpleInterestFactor = borrowRate * blockDelta
        simpleInterestFactor = mulScalar(
            Exp({mantissa: borrowRateMantissa}),
            blockDelta
        );
        // interestAccumulated = simpleInterestFactor * totalBorrows
        interestAccumulated = mulScalarTruncate(
            simpleInterestFactor,
            borrowsPrior
        );
        // totalBorrowsNew = interestAccumulated + totalBorrows
        totalBorrowsNew = interestAccumulated + borrowsPrior;

        // totalReservesNew = interestAccumulated * reserveFactor + totalReserves
        totalReservesNew = mulScalarTruncateAddUInt(
            Exp({mantissa: reserveFactorMantissa}),
            interestAccumulated,
            reservesPrior
        );

        // borrowIndexNew = simpleInterestFactor * borrowIndex + borrowIndex
        borrowIndexNew = mulScalarTruncateAddUInt(
            simpleInterestFactor,
            borrowIndexPrior,
            borrowIndexPrior
        );

        // Write the previously calculated values into storage
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


    /// @notice returns last calculated account's borrow balance using the prior borrowIndex
    /// @param _account The address whose balance should be calculated after updating borrowIndex
    /// @return The calculated balance
    function borrowBalancePrior(address _account) public view returns (uint256) {
        uint256 principalTimesIndex;
        uint256 result;

        // Get borrowBalance and borrowIndex
        BorrowSnapshot memory borrowSnapshot = accountBorrows[_account];
        // If borrowBalance = 0 then borrowIndex is likely also 0.
        // Rather than failing the calculation with a division by 0, we immediately return 0 in this case.
        if (borrowSnapshot.principal == 0) {
            return 0;
        }

        // Calculate new borrow balance using the interest index:
        // recentBorrowBalance = borrower.borrowBalance * market.borrowIndex / borrower.borrowIndex
        principalTimesIndex = borrowSnapshot.principal * borrowIndex;

        // console.logString("principalTimesIndex");
        // console.logUint(borrowSnapshot.principal);
        // console.logUint(borrowIndex);
        // console.logUint(principalTimesIndex);
        // console.logUint(borrowSnapshot.interestIndex);

        result = principalTimesIndex / borrowSnapshot.interestIndex;
        
        // console.logUint(result);
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


    ////////////////////////////////
    // Collateral Actions
    ///////////////////////////////

    function withdrawCollateral(uint256 _amount) external {
        uint256 amount;

        uint256 maxAmount = getMaxWithdrawAllowed(
            msg.sender
        );

        if (_amount == 0) {
            amount = maxAmount;
        } else {
            amount = _amount;
        }
        // console.logString("colalteral");
        // console.logUint(amount);
        // console.logUint(maxAmount);

        // require the availible value of the collateral locked in this contract the user has
        // is greater than or equal to the amount being withdrawn
        require(maxAmount >= amount, "EXCEEDS_DEPOSITED");
        // require the user has locked up enough collateral to withdraw this amount
        require(
            collateralBalance[msg.sender] >= amount,
            "EXCEEDS_BALANCE"
        );

        // subtract withdrawn amount from amount stored
        collateralBalance[msg.sender] = collateralBalance[msg.sender] - amount;
        // transfer them their token
        vault.transfer(collateralAsset, address(this), msg.sender, _amount);
        
        emit WithdrawCollateral(msg.sender, amount);
    }


    /// @notice collateralOfAccount is a view function to retreive an accounts collateral
    /// @param _account is the address of the account being looked up
    function collateralOfAccount(address _account)
        public
        view
        override
        returns (uint256)
    {
        return collateralBalance[_account];
    }

    function valueOfAccountCollateral(address _account)
        external
        returns (uint256)
    {
        uint256 collateralPrice = getPriceOfCollateral();
        uint256 collateralValue = collateralBalance[_account] * collateralPrice;
        return collateralValue;
    }

    /// @notice Figures out how much of a given collateral an account is allowed to withdraw
    /// @param account is the account being checked
    /// @dev this function runs calculations to accrue interest for an up to date amount
    function getMaxWithdrawAllowed(address account)
        public
        returns (uint256)
    {
        uint256 borrowedTotal = getTotalBorrowedValueInUSD(account);
        console.logString("borrowedTotal");
        console.logUint(borrowedTotal);
        uint256 collateralValue = getTotalAvailableCollateralValueInUSD(account);
        console.logUint(borrowedTotal);
        uint256 requiredCollateral = calcCollateralRequired(borrowedTotal);
        console.logUint(requiredCollateral);
        if (collateralValue < requiredCollateral) {
            return 0;
        }
        uint256 leftoverCollateral = collateralValue - requiredCollateral;
        console.logUint(leftoverCollateral);

        uint256 currentCollateralValueInUSD = getPriceOfToken(collateralAsset, 1);

        console.logUint(currentCollateralValueInUSD);
        console.logUint(leftoverCollateral / currentCollateralValueInUSD);

        return leftoverCollateral / currentCollateralValueInUSD;
    }


    /// @notice getTotalAvailableCollateralValueInUSD returns the total availible collaeral value for an account in USD
    /// @param _account is the address whos collateral is being retreived
    /// @dev this function runs calculations to accrue interest for an up to date amount
    function getTotalAvailableCollateralValueInUSD(address _account)
        public
        returns (uint256)
    {
        // uint256 accountCollateral = collateralOfAccount(_account);
        // multiply the amount of collateral by the asset price and return it
        // uint256 accountAssetsValue =  getPriceOfToken(collateralAsset, accountCollateral);
        return getPriceOfToken(collateralAsset, collateralOfAccount(_account));
    }

    function getPriceOfCollateral() public returns (uint256) {
        return oracle.getPriceInUSD(collateralAsset);
    }

    function getPriceOfToken(IERC20 _token, uint256 _shares)
        public
        returns (uint256)
    {
        // convert shares to underlying
        uint256 amount = vault.toUnderlying(_token, _shares);
        return oracle.getPriceInUSD(_token) * amount;
    }


    /// @notice getTotalBorrowedValueInUSD returns the total borrowed value for an account in USD
    /// @param _account is the account whos borrowed value we are calculating
    /// @dev this function returns newly calculated values
    function getTotalBorrowedValueInUSD(address _account) public returns (uint256) {
        uint256 currentBorrowBalance = borrowBalanceCurrent(_account);

        return getPriceOfToken(
            asset,
            currentBorrowBalance
        );
    }


    /// @notice calcBorrowLimit is used to calculate the borrow limit for an account based on the input value of their collateral
    /// @param _collateralValue is the USDC value of the users collateral
    /// @dev this function divides the input value by 3 and then adds that value to itself so it can return 2/3rds of the availible collateral
    ///  as the borrow limit. If a usser has $150 USDC value in collateral this function will return $100 USDC as their borrow limit.
    function calcBorrowLimit(uint256 _collateralValue)
        public
        pure
        returns (uint256)
    {
        //divide the collaterals value by 3 to get 1/3rd of its value
        uint256 thirdCollatVal = _collateralValue / 3;
        //add this 1/3rd value to itself to get 2/3rds of the original value
        return thirdCollatVal + thirdCollatVal;
    }

    /// @notice calcCollateralRequired returns the amount of collateral needed for an input borrow value
    /// @param _borrowAmount is the input borrow amount
    function calcCollateralRequired(uint256 _borrowAmount)
        public
        pure
        returns (uint256)
    {
        // 150% collateralFactor
        return (_borrowAmount * 3) / 2;
    }

    /// @notice getBorrowLimit returns the borrow limit for an account
    /// @param _account is the input account address
    /// @dev this calculation uses current values for calculations
    function getBorrowLimitInUSD(address _account) public returns (uint256) {
        uint256 availibleCollateralValue = getTotalAvailableCollateralValueInUSD(
            _account
        );

        return calcBorrowLimit(availibleCollateralValue);
    }

    function liquidate(address _borrower) external {
        // require the liquidator is not also the borrower
        require(msg.sender != _borrower, "NOT_LIQUIDATE_YOURSELF");

        uint256 borrowedAmount = borrowBalanceCurrent(_borrower);
        uint256 borrowedAmountInUSD = getPriceOfToken(
            collateralAsset,
            borrowedAmount
        );

        uint256 borrowLimit = getBorrowLimitInUSD(_borrower);

        // check if the borrow is less than the borrowed amount
        if (borrowLimit <= borrowedAmountInUSD) {
            _repayLiquidatingLoan(
                _borrower,
                msg.sender,
                borrowedAmount
            );
            _liquidate(_borrower, msg.sender);
        }
    }

    
    /// @dev _repayLiquidatingLoan
    /// @param _borrower is the address of the borrower who took out the loan
    /// @param _liquidator is the address of the account who is liquidating the loan
    /// @param _amount is the amount of StableCoin being repayed
    /// @dev
    function _repayLiquidatingLoan(
        address _borrower,
        address _liquidator,
        uint256 _amount
    ) internal {
        vault.transfer(asset, _liquidator, address(this), _amount);

        // calculate the fee on the principle received
        uint256 fee = calculateFee(_amount);
        // transfer fee amount to Edge team
        totalReserves = totalReserves + fee;
        // Clear the borrowers loan
        accountBorrows[_borrower].principal = 0;
        accountBorrows[_borrower].interestIndex = 0;
        totalBorrows = totalBorrows - _amount;
    }

    /// @dev _liquidate is a function to liquidate a user
    /// @param _account is the address of the account being liquidated
    /// @param _liquidator is the address of the account doing the liquidating who receives the collateral
    function _liquidate(address _account, address _liquidator)
        internal
    {
        uint256 balance = collateralBalance[_account];

        // transfer the collateral tokens to the liquidator
        vault.transfer(collateralAsset, address(this), _liquidator, balance);

        // reset the borrowers collateral tracker
        collateralBalance[_account] = 0;

        emit Liquidate(
            address(this),
            address(collateralAsset),
            address(_account),
            balance,
            _liquidator
        );
    }

    /// @notice withdrawFees allows the blacksmith team to withdraw the reserves earned by fees
    /// @param _sharesToWithdraw is the amount of a reservers being withdrawn
    /// @dev this is a protected function that can only be called by the blacksmith address
    function withdrawFees(uint256 _sharesToWithdraw) public onlyBlackSmithTeam {
        require(
            totalReserves >= _sharesToWithdraw,
            "NOT_ENOUGH_BALANCE"
        );

        totalReserves = totalReserves - _sharesToWithdraw;
        vault.transfer(asset, address(this), blackSmithTeam, _sharesToWithdraw);

        emit ReserveWithdraw(msg.sender, _sharesToWithdraw);
    }

}
