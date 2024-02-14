// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "./upgradability/UUPSProxiableAndPausable.sol";
import "./interfaces/IERC3156FlashLender.sol";
import "./interfaces/IERC3156FlashBorrower.sol";
import "./interfaces/IBSControl.sol";
// import "./interfaces/IBSPair.sol";
import "./interfaces/IBSLendingVault.sol";
import "./compound/Exponential.sol";
import "./compound/InterestRateModel.sol";

// @TODO Flashloan
contract BSVault is IERC3156FlashLender {
    
    bytes32 public constant FLASHLOAN_CALLBACK_SUCCESS = keccak256("ERC3156FlashBorrower.onFlashLoan");
    uint256 private constant SCALE = 1e18;

    // default 0.05%
    uint256 public flashLoanRate;

     // ************** //
    // *** EVENTS *** //
    // ************** //

    event Deposit(IERC20 indexed token, address indexed from, address indexed to, uint256 amount);
    event Withdraw(IERC20 indexed token, address indexed from, address indexed to, uint256 amount);
    event Transfer(IERC20 indexed token, address indexed from, address indexed to);
    event FlashLoan(address indexed borrower, IERC20 indexed token, uint256 amount, uint256 feeAmount, address indexed receiver);

    mapping(IERC20 => mapping(address => uint256)) public balanceOf;
    mapping(IERC20 => uint256) public totals;


    function initialize(
    ) {
        // 0.05% 
        flashLoanRate = 50000000000000000;
    }

    function deposit(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) {
        // Checks
        require(_to != address(0), "VAULT: INVALID_TO_ADDRESS");
        // transfer appropriate amount of underlying from _from to vault
        token.safeTransferFrom(_from, address(this), _amount);
        balanceOf[_token][_to] = balanceOf[_token][_to] + _amount;
        emit Deposit(_token, _from, _to, _amount);
    }

    function withdraw(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) {
        // Checks
        require(to != address(0), "VAULT: INVALID_TO_ADDRESS");
        _token.safeTransfer(_to, _amount);

        balanceOf[_token][_from] = balanceOf[_token][_from] - _amount;
        // 
        emit Withdraw(_token, _from, _to, _amount);
    }

    function transfer(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) {
        // Checks
        require(to != address(0), "VAULT: INVALID_TO_ADDRESS");

        // Effects
        balanceOf[_token][_from] = balanceOf[_token][_from] - _amount;
        balanceOf[_token][_to] = balanceOf[_token][_to] + _amount;

        emit LogTransfer(_token, _from, _to, _amount);
    }

    function flashFee(address _token, uint256 _amount) public returns(uint256) {
        require(address(_token) == address(underlying), "invalid token");
        return  _amount * flashLoanRate / 1e18;
    }

    function flashLoan(
        IERC3156FlashBorrower _receiver,
        address _token,
        uint256 _amount,
        bytes calldata _data
    ) public returns (bool) {
        require(address(underlying) == _token, "incorrect token");
        ERC20 token = ERC20(_token);
        
        uint256 tokenBalBefore = token.balanceOf(address(this));
        token.safeTransfer(address(_receiver), _amount);

        uint256 fees = flashFee(_token, _amount);

        require(
            _receiver.onFlashLoan(msg.sender, _token, _amount, fees, _data) == FLASHLOAN_CALLBACK_SUCCESS,
            "IERC3156: Callback failed"
        );

        // receive loans and fees
        token.safeTransferFrom(address(_receiver), address(this), _amount + fees);

        uint256 receivedFees = token.balanceOf(address(this)) - tokenBalBefore;
        require(receivedFees >= fees, "not enough fees");

        emit FlashLoan(
            msg.sender,
            _token,
            _amount,
            fees,
            address(_receiver)
        );
        return true;
    }
}

// initializable and upgradable
// contract BSLendingVault is 
//     UUPSProxiableAndPausable, 
//     IERC3156FlashLender,
//     IBSLendingVault,
//     ReentrancyGuard,
//     Exponential
// {
//     using SafeERC20 for ERC20;
    
//     uint256 public totalVaultBorrows;
//     uint256 public totalVaultReserves;

//     uint256 internal constant borrowRateMaxMantissa = 0.0005e16;
//     uint256 public percent = 1500;
//     uint256 public divisor = 10000;
//     // uint256 public timeWizard;

//     // This is the vault basic information    
//     ERC20 public underlying;
//     BSWrapperToken public wrapperToken;
//     IBSControl public bsControl;

//     uint256 public flashLoanFeeEarning;

//     // Lending Pair specific functions
//     struct Pair {
//         uint256 initialExchangeRateMantissa;
//         uint256 reserveFactorMantissa;
//         uint256 accrualBlockNumber;
//         uint256 borrowIndex;

//         InterestRateModel interestRate;
//         // @TODO add collateral only???

//         uint256 totalBorrows;
//         uint256 totalReserves;
//         uint256 underlyingBalance;

//         mapping(address => uint256) principalBalance;
//         mapping(address => BorrowSnapshot) accountBorrows;
//         mapping(address => uint256) historicalReward;
//     }

//     mapping(address => Pair) public pairs;

//     /**
//     @dev Throws if called by any account other than a blacksmith control
//     **/
//     modifier onlyBSControl() {
//         require(msg.sender == address(bsControl), "ONLY_CONTROL");
//         _;
//     }

//         /**
//     @dev Throws if called by any account other than a blacksmith control
//     **/
//     modifier pairExists(address _pair) {
//         require(pairs[_pair].borrowIndex != 0, "PAIR_DOES_NOT_EXIST");
//         _;
//     }

//     /**
//         @notice struct for borrow balance information
//         @member principal Total balance (with accrued interest), after applying the most recent balance-changing action
//         @member interestIndex Global borrowIndex as of the most recent balance-changing action
//     */
//     struct BorrowSnapshot {
//         uint256 principal;
//         uint256 interestIndex;
//     }

//     /**
//     set on BSControl and read on use 
//     uint256 internal flashLoanFee;
//     uint256 liquidationBonus
//     uint256 oracle
//     */
//     function initialize(
//         IBSControl _control,
//         ERC20 _underlying,
//         BSWrapperToken _wrapperToken
//     ) public {
//         underlying = _underlying;
//         bsControl = _control;
//         wrappedToken = _wrapperToken;
//     }


//     /**
//     @TODO only control should be able to call this
//     @TODO add pausable global pausable
//      */
//     function addPair(
//         address _pair,
//         address _interestRate,
//         uint256 _initialExchangeRateMantissa,
//         uint256 _reserveFactorMantissa,
//         InterestRateModel _interestRate
//     ) {
//         Pair memory newPair = Pair(
//             _initialExchangeRateMantissa,
//             _reserveFactorMantissa,
//             getBlockNumber(),
//             mantissaOne,
//             _interestRate
//         );

//         // set pair details in storage
//         pairs[_pair] = newPair;

//         emit NewPair(
//             address(this),
//             _pair,
//             _interestRate,
//             _initialExchangeRateMantissa,
//             _reserveFactorMantissa
//         );
//     }

//     /**
//     * @notice getBlockNumber allows for easy retrieval of block number
//     * @return block number
//     **/
//     function getBlockNumber() internal view returns (uint256) {
//         return block.number;
//     }


//     // struct used by mint to avoid stack too deep errors
//     struct MintLocalVars {
//         MathError mathErr;
//         uint256 exchangeRateMantissa;
//         uint256 mintTokens;
//         bool isMember;
//     }

//     //
//     function _deposit(
//         IBSPair _pair,
//         address _depositor,
//         address _tokenReceipeint,
//         uint256 _amount
//     ) public pairExists(_pair) nonReentrant whenNotPaused onlyBSControl returns (uint) {
//         // declare struct
//         MintLocalVars memory vars;

//         //retrieve exchange rate
//         vars.exchangeRateMantissa = exchangeRateCurrent(address(_pair));

//         // We get the current exchange rate and calculate the number of BSWrapperToken to be minted:
//         // mintTokens = _amount / exchangeRate
//         (vars.mathErr, vars.mintTokens) = divScalarByExpTruncate(
//             _amount,
//             Exp({mantissa: vars.exchangeRateMantissa})
//         );

//         // transfer appropriate amount of underlying from msg.sender to the Vault
//         underlying.safeTransferFrom(_depositor, address(this), _amount);

//         Pair storage pair = _pairs[address(_pair)];
//         pair.principalBalance[_tokenReceipeint] = principalBalance[_tokenReceipeint] + _amount;
//         pair.underlyingBalance = pair.underlyingBalance + amount;

//         // mint appropriate Blacksmith DAI
//         wrapperToken.mint(_tokenReceipeint, vars.mintTokens);

//         emit Deposit(address(_pair), asset, tokenReceipeint, user, amount);
//     }

//     // struct used by borrow function to avoid stack too deep errors
//     struct BorrowLocalVars {
//         MathError mathErr;
//         uint256 accountBorrows;
//         uint256 accountBorrowsNew;
//         uint256 totalBorrowsNew;
//     }

//     /**
//     @notice 
//     @param _borrowAmount The amount of the underlying asset to borrow
//     */
//     function _borrow(
//         IBPair _pair,
//         address _borrower,
//         uint256 _borrowAmount
//     ) public pairExists(_pair) nonReentrant whenNotPaused onlyBSControl {
//         // create local vars
//         BorrowLocalVars memory vars;
        
//         Pair storage pair = pairs[_pair];
        
//         // Fail if protocol has insufficient underlying cash
//         require(getCashPrior(pair) > _borrowAmount, "Not enough tokens to lend");

//         // calculate the new borrower and total borrow balances, failing on overflow:
//         vars.accountBorrows = borrowBalancePrior(address(_pair), _borrower);

//         // totalBorrowsNew = totalBorrows + borrowAmount
//         (vars.mathErr, vars.totalBorrowsNew) = addUInt(
//             totalBorrows,
//             _borrowAmount
//         );

//         // We write the previously calculated values into storage
//         pair.accountBorrows[_borrower].principal = vars.accountBorrowsNew;
//         pair.accountBorrows[_borrower].interestIndex = pair.borrowIndex;
//         pair.totalBorrows = vars.totalBorrowsNew;

//         pair.underlyingBalance = pair.underlyingBalance - _borrowAmount;

//         // send them their loaned asset
//         underlying.safeTransfer(_borrower, _borrowAmount);

//         // @TODO mint debt tokens hahahahahahaha
//     }

//     struct RepayBorrowLocalVars {
//         MathError mathErr;
//         uint256 repayAmount;
//         uint256 borrowerIndex;
//         uint256 accountBorrows;
//         uint256 accountBorrowsNew;
//         uint256 totalBorrowsNew;
//         uint256 totalOwed;
//         uint256 borrowPrinciple;
//         uint256 interestPayed;
//     }

//     /**
//     * @notice Sender repays their own borrow
//     * @param _repayAmount The amount to repay
//     */
//     function repay(
//         IBSPair _pair,
//         uint256 _repayAmount,
//         address _repayer,
//         address _beneficiary
//     ) public {
//         // create local vars
//         RepayBorrowLocalVars memory vars;

//         // We fetch the amount the borrower owes, with accumulated interest
//         vars.accountBorrows = borrowBalanceCurrent(address(_pair), _beneficiary);

//         // ensure the borrower cant pay more than they owe
//         require(
//             _repayAmount <= vars.accountBorrows,
//             "You are trying to pay back more than you owe"
//         );

//         // If repayAmount == 0, repayAmount = accountBorrows
//         if (_repayAmount == 0) {
//             vars.repayAmount = vars.accountBorrows;
//         } else {
//             vars.repayAmount = _repayAmount;
//         }

//         require(
//             underlying.balanceOf(_repayer) >= vars.repayAmount,
//             "Not enough asset to repay"
//         );

//         // transfer the stablecoin from the borrower
//         underlying.safeTransferFrom(
//             _repayer,
//             address(this),
//             vars.repayAmount
//         );

//         // we calculate the new borrower and total borrow balances
//         // accountBorrowsNew = accountBorrows - actualRepayAmount
//         (vars.mathErr, vars.accountBorrowsNew) = subUInt(
//             vars.accountBorrows,
//             vars.repayAmount
//         );
//         require(
//             vars.mathErr == MathError.NO_ERROR,
//             "Repay borrow new account balance calculation failed"
//         );

//         // totalBorrowsNew = totalBorrows - actualRepayAmount
//         (vars.mathErr, vars.totalBorrowsNew) = subUInt(
//             totalBorrows,
//             vars.repayAmount
//         );
//         require(
//             vars.mathErr == MathError.NO_ERROR,
//             "Repay borrow new total balance calculation failed"
//         );

//         /* We write the previously calculated values into storage */
//         Pair storage pair = pairs[address(_pair)];
//         pair.totalBorrows = vars.totalBorrowsNew;
//         pair.accountBorrows[_beneficiary].principal = vars.accountBorrowsNew;
//         pair.accountBorrows[_beneficiary].interestIndex = pair.borrowIndex;
//         pair.underlyingBalance = pair.underlyingBalance + vars.repayAmount;

//         emit Repay(
//             address(_pair), 
//             address(underlying), 
//             _beneficiary, 
//             _repayer, 
//             _repayAmount
//         );
//     }

//     struct WithdrawLocalVars {
//         MathError mathErr;
//         uint256 exchangeRateMantissa;
//         uint256 burnTokens;
//         uint256 currentBSBalance;
//         uint256 currentUnderlyingBalance;
//         uint256 principalRedeemed;
//         uint256 amount;
//     }

//     function withdraw(
//         IBSPair _pair,
//         address _user,
//         address _to,
//         uint256 _amount
//     ) {
//         RedeemLocalVars memory vars;

//         // fetch the users current Blacksmith wrapped balance
//         vars.currentBSBalance = underlying.userBalanceForPair(address(_pair), _user);
//         // retreive current exchange rate
//         vars.exchangeRateMantissa = exchangeRateCurrent();
//         // calculate the current underlying balance
//         (vars.mathErr, vars.currentUnderlyingBalance) = mulScalarTruncate(
//             Exp({mantissa: vars.exchangeRateMantissa}),
//             vars.currentBSBalance
//         );

//         if (_amount == 0) {
//             vars.amount = vars.currentUnderlyingBalance;
//         } else {
//             vars.amount = _amount;
//         }

//         // we get the current exchange rate and calculate the number of EdgeWrapperToken to be burned:
//         // burnTokens = _amount / exchangeRate
//         (vars.mathErr, vars.burnTokens) = divScalarByExpTruncate(
//             vars.amount,
//             Exp({mantissa: vars.exchangeRateMantissa})
//         );

//         Pair storage pair  = pairs[address(_pair)];
//         // ensure the vault pair has enough stablecoin
//         require(
//             pair.underlyingBalance >= vars.amount,
//             "Not enough stablecoin in vault."
//         );

//         uint256 currentUnderlyingReward = 0;
//         if (vars.currentUnderlyingBalance > pair.principalBalance[_user]) {
//             currentStableCoinReward = vars.currentUnderlyingBalance.sub(
//                 principalBalance[_user]
//             );
//         }

//         vars.principalRedeemed = vars.amount.sub(currentUnderlyingReward);

//         if (vars.amount >= currentUnderlyingReward) {
//             pair.historicalReward[_user] = pair.historicalReward[_user].add(
//                 currentUnderlyingReward
//             );
//             require(
//                 vars.principalRedeemed <= pair.principalBalance[_user],
//                 "Error calculating reward."
//             );
//             pair.principalBalance[_user] = pair.principalBalance[_user].sub(
//                 vars.principalRedeemed
//             );
//         } else {
//             pair.historicalReward[_user] = pair.historicalReward[_user].add(
//                 vars.amount
//             );
//         }

//         wrappedToken.burn(address(_pair), _user, vars.burnTokens);
//         // transferUnderlyingTo
//         underlying.safeTransfer(_to, vars.amount);

//         emit Withdraw(address(_pair), address(underlying), _user, _to, vars.amount, vars.burnTokens);
//     }

//     function _liquidate(
//         IBSPair _pair,
//         address _borrower,
//         address _liquidator,
//         uint256 _amount
//     ) public onlyBSControl {
//         Pair storage pair = pairs[address(_pair)];
//         // specify if you want BS tokens or underly otken

//         // pair.principalBalance[]
//     }

//     function flashFee(address _token, uint256 _amount) public returns(uint256) {
//         require(address(_token) == address(underlying), "invalid token");
//         return  _amount * control.flashLoanRate() / 1e18;
//     }

//     function flashLoan(
//         IERC3156FlashBorrower _receiver,
//         address _token,
//         uint256 _amount,
//         bytes calldata _data
//     ) public onlyBSControl returns (bool) {
//         require(address(underlying) == _token, "incorrect token");
//         ERC20 token = ERC20(_token);
        
//         uint256 tokenBalBefore = token.balanceOf(address(this));
//         token.safeTransfer(address(_receiver), _amount);

//         uint256 fees = flashFee(_token, _amount);

//         require(
//             _receiver.onFlashLoan(msg.sender, _token, _amount, fees, _data) == FLASHLOAN_CALLBACK_SUCCESS,
//             "IERC3156: Callback failed"
//         );

//         // receive loans and fees
//         token.safeTransferFrom(address(_receiver), address(this), _amount + fees);

//         uint256 receivedFees = token.balanceOf(address(this)) - tokenBalBefore;
//         require(receivedFees >= fees, "not enough fees");
        
//         // add flashloan earning
//         flashLoanFeeEarning = flashLoanFeeEarning + receivedFees;

//         emit FlashLoan(
//             _token,
//             address(_receiver),
//             _amount
//         );

//         return true;
//     }

//     /**
//         @notice _repayLiquidatingLoan is a function used by the Edge Control contract to repay a loan on behalf of a liquidator
//         @param _borrower is the address of the borrower who took out the loan
//         @param _liquidator is the address of the account who is liquidating the loan
//         @param _amount is the amount of StableCoin being repayed
//         @dev this function uses the onlyEdgeControl modifier which means it can only be called by the Edge Control contract
//     **/
//     function _repayLiquidatingLoan(
//         IBSPair _pair,
//         address _borrower,
//         address _liquidator,
//         uint256 _amount
//     ) public onlyBSControl {
//         underlying.safeTransferFrom(_liquidator, address(this), _amount);
        
//         Pair storage pair = pairs[address(_pair)];
//         // calculate the fee on the principle received
//         uint256 fee = calculateFee(_amount);
//         //transfer fee amount to Edge team
//         pair.totalReserves = pair.totalReserves + fee;
//         // Clear the borrowers loan
//         pair.accountBorrows[_borrower].principal = 0;
//         pair.accountBorrows[_borrower].interestIndex = 0;
//         pair.totalBorrows = pair.totalBorrows - _amount;
//         // transfer the owed amount of stablecoin from the borrower to this contract
//     }
    
//     /**
//     @notice calculateFee is used to calculate the fee earned by the Edge Platform
//     @param _payedAmount is a uint representing the full amount of stablecoin earned as interest
//     **/
//     function calculateFee(uint256 _payedAmount) public view returns (uint256) {
//         uint256 fee = _payedAmount.mul(percent).div(divisor);
//         return fee;
//     }

//     /**
//      @notice Accrue interest then return the up-to-date exchange rate
//      @return Calculated exchange rate scaled by 1e18
//      **/
//     function exchangeRateCurrent(address _pair) public returns (uint256) {
//         accrueInterest();

//         Pair memory pair = pairs[_pair];

//         if (pair.underlyingBalance == 0) {
//             // if there are no tokens minted: exchangeRate = initialExchangeRate
//             return initialExchangeRateMantissa;
//         } else {
//             // otherwise: exchangeRate = (totalCash + totalBorrows - totalReserves) / totalSupply
//             uint256 totalCash = getCashPrior(pair); //get contract asset balance
//             uint256 cashPlusBorrowsMinusReserves;
//             Exp memory exchangeRate;
//             MathError mathErr;
//             // calculate total value held by contract plus owed to contract
//             (mathErr, cashPlusBorrowsMinusReserves) = addThenSubUInt(
//                 totalCash,
//                 pair.totalBorrows,
//                 pair.totalReserves
//             );
//             // calculate exchange rate
//             (mathErr, exchangeRate) = getExp(
//                 cashPlusBorrowsMinusReserves,
//                 pair.underlyingBalance
//             );
//             return (exchangeRate.mantissa);
//         }
//     }

//     /**
//     @notice getCashPrior is a view funcion that returns the USD balance of all held underlying stablecoin assets
//     **/
//     function getCashPrior(Pair _pair) public view returns (uint256) {
//         return _pair.underlyingBalance;
//     }

//     /**
//     @notice Applies accrued interest to total borrows and reserves
//     @dev This calculates interest accrued from the last checkpointed block
//         up to the current block and writes new checkpoint to storage.
//     **/
//     function accrueInterest(address _pairAddress) public {
//         Pair storage pair = pairs[_pairAddress];
//         // remember the initial block number
//         uint256 currentBlockNumber = getBlockNumber();
//         uint256 accrualBlockNumberPrior = pair.accrualBlockNumber;

//         // short-circuit accumulating 0 interest
//         if (accrualBlockNumberPrior == currentBlockNumber) {
//             emit InterestShortCircuit(currentBlockNumber);
//             return;
//         }

//         // read the previous values out of storage
//         uint256 cashPrior = getCashPrior(pair);
//         uint256 borrowsPrior = pair.totalBorrows;
//         uint256 reservesPrior = pair.totalReserves;
//         uint256 borrowIndexPrior = pair.borrowIndex;
//         // calculate the current borrow interest rate
//         uint256 borrowRateMantissa = pair.interestRate.getBorrowRate(
//             cashPrior,
//             borrowsPrior,
//             reservesPrior
//         );
//         require(
//             borrowRateMantissa <= borrowRateMaxMantissa,
//             "Borrow Rate mantissa error"
//         );
//         //Calculate the number of blocks elapsed since the last accrual
//         (MathError mathErr, uint256 blockDelta) = subUInt(
//             currentBlockNumber,
//             accrualBlockNumberPrior
//         );
//         //Calculate the interest accumulated into borrows and reserves and the new index:
//         Exp memory simpleInterestFactor;
//         uint256 interestAccumulated;
//         uint256 totalBorrowsNew;
//         uint256 totalReservesNew;
//         uint256 borrowIndexNew;
//         //simpleInterestFactor = borrowRate * blockDelta
//         (mathErr, simpleInterestFactor) = mulScalar(
//             Exp({mantissa: borrowRateMantissa}),
//             blockDelta
//         );
//         //interestAccumulated = simpleInterestFactor * totalBorrows
//         (mathErr, interestAccumulated) = mulScalarTruncate(
//             simpleInterestFactor,
//             borrowsPrior
//         );
//         //totalBorrowsNew = interestAccumulated + totalBorrows
//         (mathErr, totalBorrowsNew) = addUInt(interestAccumulated, borrowsPrior);
//         //totalReservesNew = interestAccumulated * reserveFactor + totalReserves
//         (mathErr, totalReservesNew) = mulScalarTruncateAddUInt(
//             Exp({mantissa: reserveFactorMantissa}),
//             interestAccumulated,
//             reservesPrior
//         );
//         //borrowIndexNew = simpleInterestFactor * borrowIndex + borrowIndex
//         (mathErr, borrowIndexNew) = mulScalarTruncateAddUInt(
//             simpleInterestFactor,
//             borrowIndexPrior,
//             borrowIndexPrior
//         );

//         //Write the previously calculated values into storage
//         pair.accrualBlockNumber = currentBlockNumber;
//         pair.borrowIndex = borrowIndexNew;
//         pair.totalBorrows = totalBorrowsNew;
//         pair.totalReserves = totalReservesNew;

//         emit InterestAccrued(
//             _pairAddress,
//             pair.accrualBlockNumber,
//             pair.borrowIndex,
//             pair.totalBorrows,
//             pair.totalReserves
//         );
//     }

//      /**
//     @notice returns last calculated account's borrow balance using the prior borrowIndex
//     @param account The address whose balance should be calculated after updating borrowIndex
//     @return The calculated balance
//     **/
//     function borrowBalancePrior(address _pair, address _account) public view returns (uint256) {
//         MathError mathErr;
//         uint256 principalTimesIndex;
//         uint256 result;

//         // Get borrowBalance and borrowIndex
//         BorrowSnapshot memory borrowSnapshot = pairs[_pair].accountBorrows[_account];
//         //If borrowBalance = 0 then borrowIndex is likely also 0.
//         //Rather than failing the calculation with a division by 0, we immediately return 0 in this case.
//         if (borrowSnapshot.principal == 0) {
//             return (0);
//         }
//         //Calculate new borrow balance using the interest index:
//         //recentBorrowBalance = borrower.borrowBalance * market.borrowIndex / borrower.borrowIndex
//         (mathErr, principalTimesIndex) = mulUInt(
//             borrowSnapshot.principal,
//             borrowIndex
//         );
//         //if theres a math error return zero so as not to fail
//         if (mathErr != MathError.NO_ERROR) {
//             return (0);
//         }
//         (mathErr, result) = divUInt(
//             principalTimesIndex,
//             borrowSnapshot.interestIndex
//         );
//         //if theres a math error return zero so as not to fail
//         if (mathErr != MathError.NO_ERROR) {
//             return (0);
//         }

//         return result;
//     }

//     /**
//     @notice Accrue interest to updated borrowIndex and then calculate account's borrow balance using the updated borrowIndex
//     @param account The address whose balance should be calculated after updating borrowIndex
//     @return The calculated balance
//     **/
//     function borrowBalanceCurrent(address _pair, address _account) public returns (uint256) {
//         accrueInterest(_pair);
//         return borrowBalancePrior(_pair, _account);
//     }
// }
