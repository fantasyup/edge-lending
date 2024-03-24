// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./math/Exponential.sol";
import "./interfaces/IInterestRateModel.sol";
import "./interfaces/IBSVault.sol";
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IBSWrapperToken.sol";
import "./interfaces/IDebtToken.sol";
import "./interfaces/IPriceOracleAggregator.sol";
import "hardhat/console.sol";
import "./DataTypes.sol";
import "./util/Initializable.sol";
import "./token/IERC20Details.sol";

////////////////////////////////////////////////////////////////////////////////////////////
///
/// @title LendingPair
/// @author @samparsky
/// @notice
///
////////////////////////////////////////////////////////////////////////////////////////////

contract LendingPair is IBSLendingPair, Exponential, Initializable {
    using SafeERC20 for IERC20;
    using DataTypes for DataTypes.BorrowAssetConfig;

    enum Actions {Deposit, Borrow}

    /// @dev lending pair name
    string public name;

    /// @dev lending pair symbol
    string public symbol;

    /// @dev version
    uint256 public constant VERSION = 0x1;

    /// @notice where the tokens are stored
    IBSVault public immutable vault;

    /// @notice protocol liquidation fee percent in 1e18
    uint256 public immutable procotolLiquidationFeeShare;

    /// @notice The interest rate model for the borrow asset
    IInterestRateModel public immutable interestRate;

    /// @notice The price oracle for the assets
    IPriceOracleAggregator public immutable override oracle;

    /// @notice The address to withdraw fees to
    address public feeWithdrawalAddr;

    /// @dev borrow asset underlying decimal
    uint8 private _borrowAssetUnderlyingDecimal;

    /// @dev collateral asset underlying decimal
    uint8 private _collateralAssetUnderlyingDecimal;

    /// @dev initialExchangeRateMantissa Initial exchange rate used when minting
    uint256 internal initialExchangeRateMantissa;

    /// @dev Fraction of interest currently set aside for reserves
    uint256 private reserveFactorMantissa;

    /// @dev Block number that interest was last accrued at
    uint256 private accrualBlockNumber;

    /// @dev Accumulator of the total earned interest rate since the opening of the market
    uint256 public override borrowIndex;

    /// @notice Total amount of reserves of the underlying held in this market
    uint256 public totalReserves;

    /// @dev The amount of collateral required for a borrow position
    uint256 public collateralFactor;

    /// @dev collateral factor precision
    uint256 private constant COLLATERAL_FACTOR_PRECSIION = 1e18;

    /// @notice liquidation fee in 1e18
    uint256 public liquidationFee;

    /// @dev liquidation fee precision
    uint256 private constant LIQUIDATION_FEES_PRECISION = 1e18;

    /// @notice the address that can pause borrow & deposits of assets
    address public pauseGuardian;

    /// @notice The pair borrow asset
    IERC20 public override asset;

    /// @notice The pair collateral asset
    IERC20 public override collateralAsset;

    /// @notice The wrapper token for the borrow asset
    IBSWrapperToken public wrapperBorrowedAsset;

    /// @notice The wrapper token for the borrow asset
    IBSWrapperToken public wrappedCollateralAsset;

    /// @notice The wrapper token for debt
    IDebtToken public override debtToken;

    /// @notice Mapping of account addresses to their interest interest index
    mapping(address => uint256) public override accountInterestIndex;

    /// @notice Mapping of action to pause status
    mapping(Actions => bool) public pauseStatus;

    modifier whenNotPaused(Actions action) {
        require(pauseStatus[action] == false, "PAUSED");
        _;
    }

    modifier onlyPauseGuardian() {
        require(msg.sender == pauseGuardian, "ONLY_GUARDIAN");
        _;
    }

    constructor(
        IBSVault _vault,
        IPriceOracleAggregator _oracle,
        address _feeWithdrawalAddr,
        uint256 _procotolLiquidationFeeShare,
        IInterestRateModel _interestRate
    ) {
        // invalid vault or oracle
        require(address(_vault) != address(0), "IV0");
        // invalid vault or oracle
        require(address(_oracle) != address(0), "IV0");
        // invalid fee withdrawal addr
        require(_feeWithdrawalAddr != address(0), "IVWA");
        // interest rate model
        require(address(_interestRate) != address(0), "IVIR");

        vault = _vault;
        oracle = _oracle;
        feeWithdrawalAddr = _feeWithdrawalAddr;
        procotolLiquidationFeeShare = _procotolLiquidationFeeShare;
        interestRate = _interestRate;
    }

    /// @notice Initialize function
    /// @param _name for lending pair
    /// @param _symbol for lending pair
    /// @param _asset borrow asset
    /// @param _collateralAsset pair collateral
    /// @param _wrappedCollateralAsset wrapped token minted when depositing collateral asset
    /// @param _pauseGuardian pause guardian address
    function initialize(
        string memory _name,
        string memory _symbol,
        IERC20 _asset,
        IERC20 _collateralAsset,
        DataTypes.BorrowAssetConfig calldata borrowConfig,
        IBSWrapperToken _wrappedCollateralAsset,
        address _pauseGuardian
    ) external override initializer {
        // invalid asset or collateral asset
        require(address(_asset) != address(0) && address(_collateralAsset) != address(0), "IAC");
        // invalid pause guardian
        require(_pauseGuardian != address(0), "IVP");
        // validate wrapped collateral asset owner
        require(_wrappedCollateralAsset.owner() == address(this), "IVWC");
        // validate borrow config
        borrowConfig.validBorrowAssetConfig(address(this));

        name = _name;
        symbol = _symbol;
        pauseGuardian = _pauseGuardian;
        asset = _asset;
        collateralAsset = _collateralAsset;
        borrowIndex = mantissaOne;

        initialExchangeRateMantissa = borrowConfig.initialExchangeRateMantissa;
        reserveFactorMantissa = borrowConfig.reserveFactorMantissa;
        collateralFactor = borrowConfig.collateralFactor;
        liquidationFee = borrowConfig.liquidationFee;
        wrapperBorrowedAsset = borrowConfig.wrappedBorrowAsset;
        debtToken = borrowConfig.debtToken;

        wrappedCollateralAsset = _wrappedCollateralAsset;

        _borrowAssetUnderlyingDecimal = IERC20Details(address(asset)).decimals();
        _collateralAssetUnderlyingDecimal = IERC20Details(address(collateralAsset)).decimals();
    }

    /// @dev pause actions in the lending pair
    function pause(Actions action) external onlyPauseGuardian {
        pauseStatus[action] = true;
        emit ActionPaused(uint8(action), block.timestamp);
    }

    /// @dev unpause actions in lending pair
    function unpause(Actions action) external onlyPauseGuardian {
        pauseStatus[action] = false;
        emit ActionUnPaused(uint8(action), block.timestamp);
    }

    /// @notice deposit allows a user to deposit underlying collateral from vault
    /// @param _tokenRecipient address to credit the wrapped collateral shares
    /// @param _vaultShareAmount is the amount of user vault shares being collateralized
    function depositCollateral(address _tokenRecipient, uint256 _vaultShareAmount)
        external
        override
        whenNotPaused(Actions.Deposit)
    {
        vault.transfer(collateralAsset, msg.sender, address(this), _vaultShareAmount);
        // mint receipient vault share amount
        wrappedCollateralAsset.mint(_tokenRecipient, _vaultShareAmount);
        emit Deposit(
            address(this),
            address(collateralAsset),
            _tokenRecipient,
            msg.sender,
            _vaultShareAmount
        );
    }

    /// @dev the user should initially have deposited in the vault
    /// transfer appropriate amount of underlying from msg.sender to the LendingPair
    /// @param _tokenReceipeint whom to credit the wrapped tokens
    function depositBorrowAsset(address _tokenReceipeint, uint256 _vaultShareAmount)
        external
        override
        whenNotPaused(Actions.Deposit)
    {
        require(_tokenReceipeint != address(0), "IDB");
        // retrieve exchange rate
        uint256 exchangeRateMantissa = exchangeRateCurrent();
        // We get the current exchange rate and calculate the number of wrapper token to be minted:
        // mintTokens = _amount / exchangeRate
        uint256 mintTokens =
            divScalarByExpTruncate(_vaultShareAmount, Exp({mantissa: exchangeRateMantissa}));

        // transfer appropriate amount of DAI from msg.sender to the Vault
        vault.transfer(asset, msg.sender, address(this), _vaultShareAmount);

        // mint appropriate wrapped tokens
        wrapperBorrowedAsset.mint(_tokenReceipeint, mintTokens);

        emit Deposit(
            address(this),
            address(asset),
            _tokenReceipeint,
            msg.sender,
            _vaultShareAmount
        );
    }

    /// @param _amountToBorrow is the amount of the borrow asset vault shares the user wants to borrow
    /// @param _debtOwner this should be the msg.sender or address that delegates credit to the msg.sender
    /// @dev we use normalized amounts to calculate the
    function borrow(uint256 _amountToBorrow, address _debtOwner) external whenNotPaused(Actions.Borrow) {
        require(_debtOwner != address(0), "INVALID_DEBT_OWNER");
        // save on sload
        uint8 __borrowAssetUnderlyingDecimal = _borrowAssetUnderlyingDecimal;

        uint256 borrowedTotalWithInterest = borrowBalanceCurrent(msg.sender);
        uint256 currentBorrowAssetPrice = oracle.getPriceInUSD(asset);
        uint256 borrowedTotalInUSDNormalized =
            normalize(borrowedTotalWithInterest, __borrowAssetUnderlyingDecimal) *
                currentBorrowAssetPrice;
        uint256 borrowLimitInUSDNormalized =
            normalize(getBorrowLimit(msg.sender), _collateralAssetUnderlyingDecimal) *
                getPriceOfCollateral();
        uint256 borrowAmountAllowedInUSDNormalized =
            borrowLimitInUSDNormalized - borrowedTotalInUSDNormalized;
        // borrow amount in usd normalized
        uint256 borrowAmountInUSDNormalized =
            normalize(_amountToBorrow, __borrowAssetUnderlyingDecimal) * currentBorrowAssetPrice;
        // require the amount being borrowed is less than
        // or equal to the amount they are aloud to borrow
        require(
            borrowAmountAllowedInUSDNormalized >= borrowAmountInUSDNormalized,
            "BORROWING_MORE_THAN_ALLOWED"
        );

        uint256 amountOfSharesToBorrow = vault.toShare(asset, _amountToBorrow, false);
        // mint debt tokens to _debtOwner account
        debtToken.mint(_debtOwner, msg.sender, _amountToBorrow);
        // set interest index
        accountInterestIndex[msg.sender] = borrowIndex;
        // transfer borrow asset to borrower
        vault.transfer(asset, address(this), msg.sender, amountOfSharesToBorrow);
        emit Borrow(msg.sender, _amountToBorrow);
    }

    struct RepayBorrowLocalVars {
        uint256 repayAmount;
        uint256 accountBorrows;
        uint256 accountBorrowsNew;
        uint256 totalBorrowsNew;
    }

    /// @notice Sender repays their own borrow
    /// @param _repayAmount The amount of borrow asset to repay
    function repay(uint256 _repayAmount) public {
        // create local vars storage
        RepayBorrowLocalVars memory vars;

        // We fetch the amount the borrower owes, with accumulated interest
        vars.accountBorrows = borrowBalanceCurrent(msg.sender);

        // require the borrower cant pay more than they owe
        require(_repayAmount <= vars.accountBorrows, "PAYING_MORE_THAN_OWED");

        if (_repayAmount == 0) {
            vars.repayAmount = vars.accountBorrows;
        } else {
            vars.repayAmount = _repayAmount;
        }

        // convert repayAmount to share and round up
        uint256 repayAmountInShares = vault.toShare(asset, vars.repayAmount, true);

        require(
            vault.balanceOf(asset, msg.sender) >= repayAmountInShares,
            "NOT_ENOUGH_BALANCE_TO_REPAY"
        );

        // transfer the borrow asset from the borrower to LendingPair
        vault.transfer(asset, msg.sender, address(this), repayAmountInShares);

        accountInterestIndex[msg.sender] = borrowIndex;

        debtToken.burn(msg.sender, vars.repayAmount);

        emit Repay(
            address(this),
            address(asset),
            msg.sender, // @TODO add beneficiary
            msg.sender,
            _repayAmount
        );
    }

    struct RedeemLocalVars {
        uint256 exchangeRateMantissa;
        uint256 burnTokens;
        uint256 currentBSBalance;
        uint256 currentUnderlyingBalance;
        uint256 amount;
    }

    /// @notice Allows a user to redeem their Wrapper Token for the appropriate amount of underlying asset
    /// @param _to Address to send the underlying tokens to
    /// @param _amount of wrapper token to redeem
    function redeem(address _to, uint256 _amount) external override {
        RedeemLocalVars memory vars;

        // fetch the users current wrapped balance
        vars.currentBSBalance = wrapperBorrowedAsset.balanceOf(msg.sender);

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

        // we get the current exchange rate and calculate the number of EdgeWrapperToken to be burned:
        // burnTokens = _amount / exchangeRate
        vars.burnTokens = divScalarByExpTruncate(
            vars.amount,
            Exp({mantissa: vars.exchangeRateMantissa})
        );

        // ensure the vault pair has enough borrow asset balance
        require(vault.balanceOf(asset, address(this)) >= vars.amount, "NOT_ENOUGH_BALANCE");

        wrapperBorrowedAsset.burn(msg.sender, vars.burnTokens);
        // transfer
        vault.transfer(asset, address(this), _to, vars.amount);

        emit Redeem(address(this), address(asset), msg.sender, _to, vars.amount, vars.burnTokens);
    }

    /// @notice calculateFee is used to calculate the fee earned
    /// @param _amount is a uint representing the full amount earned as interest
    function calculateLiquidationFee(uint256 _amount) public view returns (uint256 fee) {
        fee = (_amount * liquidationFee) / LIQUIDATION_FEES_PRECISION;
    }

    /// @notice Accrue interest then return the up-to-date exchange rate
    /// @return Calculated exchange rate scaled by 1e18
    function exchangeRateCurrent() public returns (uint256) {
        accrueInterest();

        // convert amount to underlying
        uint256 currentTotalSupply = vault.toUnderlying(asset, wrapperBorrowedAsset.totalSupply());

        if (currentTotalSupply == 0) {
            // If there are no tokens minted: exchangeRate = initialExchangeRate
            return initialExchangeRateMantissa;
        } else {
            // Otherwise: exchangeRate = (totalCash + totalBorrows - totalReserves) / totalSupply
            uint256 totalCash = getCashPrior(); // get contract asset balance
            uint256 cashPlusBorrowsMinusReserves;
            Exp memory exchangeRate;

            // calculate total value held by contract plus owed to contract
            // uint totalBorrows = totalBorrows();
            cashPlusBorrowsMinusReserves = totalCash + totalBorrows() - totalReserves;

            // calculate exchange rate
            exchangeRate = getExp(cashPlusBorrowsMinusReserves, currentTotalSupply);

            return (exchangeRate.mantissa);
        }
    }

    /// @notice getCashPrior is a view funcion that returns the balance of all held borrow asset
    function getCashPrior() public view returns (uint256) {
        return vault.toUnderlying(asset, vault.balanceOf(asset, address(this)));
    }

    /// @notice Total amount of outstanding borrows of the asset in this market
    function totalBorrows() public view returns (uint256) {
        return debtToken.totalSupply();
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
            emit InterestShortCircuit(currentBlockNumber);
            return;
        }

        // read the previous values out of storage
        uint256 cashPrior = getCashPrior();
        uint256 borrowsPrior = totalBorrows();
        uint256 reservesPrior = totalReserves;

        uint256 borrowIndexPrior = borrowIndex;

        // calculate the current borrow interest rate
        uint256 borrowRateMantissa =
            interestRate.getBorrowRate(cashPrior, borrowsPrior, reservesPrior);

        // Calculate the number of blocks elapsed since the last accrual
        uint256 blockDelta = currentBlockNumber - accrualBlockNumberPrior;

        // Calculate the interest accumulated into borrows and reserves and the new index:
        Exp memory simpleInterestFactor;
        uint256 interestAccumulated;
        uint256 totalReservesNew;
        uint256 borrowIndexNew;

        // simpleInterestFactor = borrowRate * blockDelta
        simpleInterestFactor = mulScalar(Exp({mantissa: borrowRateMantissa}), blockDelta);

        // interestAccumulated = simpleInterestFactor * totalBorrows
        interestAccumulated = mulScalarTruncate(simpleInterestFactor, borrowsPrior);

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
        // increase total borrows
        // totalBorrowsNew = interestAccumulated + totalBorrows
        debtToken.increaseTotalDebt(interestAccumulated);

        totalReserves = totalReservesNew;

        emit InterestAccrued(
            address(this),
            accrualBlockNumber,
            borrowIndex,
            // total borrows
            borrowsPrior + interestAccumulated,
            totalReserves
        );
    }

    /**
    @notice Accrue interest to updated borrowIndex and then calculate account's borrow balance 
            using the updated borrowIndex
    @param _account The address whose balance should be calculated after updating borrowIndex
    @return The calculated balance
    **/
    function borrowBalanceCurrent(address _account) public returns (uint256) {
        accrueInterest();
        return borrowBalancePrior(_account);
    }

    function borrowBalancePrior(address _account) public view override returns (uint256 balance) {
        uint256 principalTimesIndex;
        // Get borrowBalance and borrowIndex
        uint256 principal = debtToken.principal(_account);
        // If borrowBalance = 0 then borrowIndex is likely also 0.
        // Rather than failing the calculation with a division by 0, we immediately return 0 in this case.
        if (principal == 0) {
            return 0;
        }

        uint256 borrowInterestIndex = accountInterestIndex[_account];
        // Calculate new borrow balance using the interest index:
        // recentBorrowBalance = borrower.borrowBalance * market.borrowIndex / borrower.borrowIndex
        principalTimesIndex = principal * borrowIndex;

        balance = principalTimesIndex / borrowInterestIndex;
    }

    /// @notice withdrawFees to the feeWithdrawalAddr
    /// @param _toWithdraw is the amount of a reservers being withdrawn
    /// @dev this function can be called by anyone
    function withdrawFees(uint256 _toWithdraw) external {
        require(totalReserves >= _toWithdraw, "NOT_ENOUGH_BALANCE");

        totalReserves = totalReserves - _toWithdraw;
        vault.transfer(asset, address(this), feeWithdrawalAddr, _toWithdraw);

        emit ReserveWithdraw(feeWithdrawalAddr, _toWithdraw);
    }

    /// @notice changeFeeWithdrawalAddress
    /// @param _newAddress new address to withdrawa fees to
    /// @dev this function can only be called by `feeWithdrawalAddr`
    function changeFeeWithdrawalAddress(address _newAddress) external {
        require(_newAddress != address(0), "invalid address");
        require(msg.sender == feeWithdrawalAddr, "invalid sender");

        feeWithdrawalAddr = _newAddress;
        emit ChangeFeeWithdrawalAddress(_newAddress, block.timestamp);
    }

    ////////////////////////////////
    // Collateral Actions
    ///////////////////////////////

    function withdrawCollateral(uint256 _amount) external {
        uint256 amount;

        uint256 maxAmount = getMaxWithdrawAllowed(msg.sender);

        if (_amount == 0) {
            amount = maxAmount;
        } else {
            amount = _amount;
        }

        // require the availible value of the collateral locked in this contract the user has
        // is greater than or equal to the amount being withdrawn
        require(maxAmount >= amount, "EXCEEDS_ALLOWED");
        // require the user has locked up enough collateral to withdraw this amount
        require(wrappedCollateralAsset.balanceOf(msg.sender) >= amount, "EXCEEDS_BALANCE");

        // subtract withdrawn amount from amount stored
        // collateralBalance[msg.sender] = collateralBalance[msg.sender] - amount;
        wrappedCollateralAsset.burn(msg.sender, amount);
        // transfer them their token
        vault.transfer(collateralAsset, address(this), msg.sender, _amount);

        emit WithdrawCollateral(msg.sender, amount);
    }

    /// @notice collateralOfAccount is a view function to retreive an accounts collateral
    /// @param _account is the address of the account being looked up
    function collateralOfAccount(address _account) public view override returns (uint256) {
        return wrappedCollateralAsset.balanceOf(_account);
    }

    /// @notice Figures out how much of a given collateral an account is allowed to withdraw
    /// @param _account is the account being checked
    /// @dev this function runs calculations to accrue interest for an up to date amount
    function getMaxWithdrawAllowed(address _account) public override returns (uint256) {
        // save on sload
        uint8 __collateralAssetUnderlyingDecimal = _collateralAssetUnderlyingDecimal;

        uint256 normalizedBorrowedAmountTotal =
            normalize(borrowBalanceCurrent(_account), _borrowAssetUnderlyingDecimal);

        uint256 currentCollateralValueInUSD = getPriceOfCollateral();

        uint256 borrowedTotalNormalizedAmountInUSD =
            getPriceOfToken(asset, normalizedBorrowedAmountTotal);
        uint256 collateralValueNormalizedInUSD =
            normalize(
                getTotalAvailableCollateralValue(_account),
                __collateralAssetUnderlyingDecimal
            ) * currentCollateralValueInUSD;
        uint256 requiredCollateralNormalizedInUSD =
            calcCollateralRequired(borrowedTotalNormalizedAmountInUSD);

        if (collateralValueNormalizedInUSD < requiredCollateralNormalizedInUSD) {
            return 0;
        }

        // remaining collateral denormalized
        uint256 leftoverCollateral =
            denormalize(
                collateralValueNormalizedInUSD - requiredCollateralNormalizedInUSD,
                __collateralAssetUnderlyingDecimal
            );

        return leftoverCollateral / currentCollateralValueInUSD;
    }

    /// @notice getTotalAvailableCollateralValueInUSD returns the total availible collaeral value for an account in USD
    /// @param _account is the address whos collateral is being retreived
    /// @dev this function runs calculations to accrue interest for an up to date amount
    function getTotalAvailableCollateralValueInUSD(address _account) public returns (uint256) {
        return
            getPriceOfToken(
                collateralAsset,
                // convert the amount of collateral to underlying amount
                vault.toUnderlying(collateralAsset, collateralOfAccount(_account))
            );
    }

    /// @notice getTotalAvailableCollateralValue returns the total availible collaeral value for an account
    /// @param _account is the address whos collateral is being retreived
    /// @dev this function runs calculations to accrue interest for an up to date amount
    function getTotalAvailableCollateralValue(address _account) public view returns (uint256) {
        // convert the amount of collateral to underlying amount
        return vault.toUnderlying(collateralAsset, collateralOfAccount(_account));
    }

    /// @dev returns price of collateral in usd
    function getPriceOfCollateral() public returns (uint256) {
        return oracle.getPriceInUSD(collateralAsset);
    }

    /// @dev returns price of collateral in usd
    function getPriceOfBorrowAsset() public returns (uint256) {
        return oracle.getPriceInUSD(asset);
    }

    /// @notice getPriceOfToken returns price of token in usd
    /// @param _token this is the price of the token
    /// @param _amount this is the amount of tokens
    function getPriceOfToken(IERC20 _token, uint256 _amount) public returns (uint256) {
        return oracle.getPriceInUSD(_token) * _amount;
    }

    /// @notice getTotalBorrowedValueInUSD returns the total borrowed value for an account in USD
    /// @param _account is the account whos borrowed value we are calculating
    /// @dev this function returns newly calculated values
    function getTotalBorrowedValueInUSD(address _account) public returns (uint256) {
        return getPriceOfToken(asset, borrowBalanceCurrent(_account));
    }

    /// @notice calcBorrowLimit is used to calculate the borrow limit for an account 
    /// based on the input value of their collateral
    /// @param _collateralValueInUSD is the USD value of the users collateral
    function calcBorrowLimit(uint256 _collateralValueInUSD) public view override returns (uint256) {
        return (_collateralValueInUSD * COLLATERAL_FACTOR_PRECSIION) / collateralFactor;
    }

    /// @notice calcCollateralRequired returns the amount of collateral needed for an input borrow value
    /// @param _borrowAmount is the input borrow amount
    function calcCollateralRequired(uint256 _borrowAmount) public view returns (uint256) {
        return (_borrowAmount * collateralFactor) / COLLATERAL_FACTOR_PRECSIION;
    }

    /// @notice getBorrowLimit returns the borrow limit for an account
    /// @param _account is the input account address
    /// @dev this calculation uses current values for calculations
    function getBorrowLimitInUSD(address _account) public returns (uint256) {
        uint256 availibleCollateralValue = getTotalAvailableCollateralValueInUSD(_account);

        return calcBorrowLimit(availibleCollateralValue);
    }

    /// @notice getBorrowLimit returns the borrow limit for an account
    /// @param _account is the input account address
    /// @dev this calculation uses current values for calculations
    function getBorrowLimit(address _account) public view returns (uint256) {
        uint256 availibleCollateralValue = getTotalAvailableCollateralValue(_account);

        return calcBorrowLimit(availibleCollateralValue);
    }

    function liquidate(address _borrower) external {
        // require the liquidator is not also the borrower
        require(msg.sender != _borrower, "NOT_LIQUIDATE_YOURSELF");

        uint256 currentBorrowAssetPriceInUSD = oracle.getPriceInUSD(asset);
        uint256 priceOfCollateralInUSD = getPriceOfCollateral();

        uint256 borrowedTotalWithInterest = borrowBalanceCurrent(_borrower);
        uint256 borrowedTotalInUSDNormalized =
            getPriceOfToken(
                asset,
                normalize(borrowedTotalWithInterest, _borrowAssetUnderlyingDecimal)
            );
        uint256 borrowLimitInUSDNormalized =
            normalize(getBorrowLimit(_borrower), _collateralAssetUnderlyingDecimal) *
                getPriceOfCollateral();

        // check if the borrow is less than the borrowed amount
        if (borrowLimitInUSDNormalized <= borrowedTotalInUSDNormalized) {
            // liquidation fee
            uint256 totalLiquidationFee = calculateLiquidationFee(borrowedTotalWithInterest);
            uint256 protocolLiquidationFeeShare =
                (totalLiquidationFee * procotolLiquidationFeeShare) / LIQUIDATION_FEES_PRECISION;
            uint256 borrowedTotal = borrowedTotalWithInterest + totalLiquidationFee;

            _repayLiquidatingLoan(
                _borrower,
                msg.sender,
                borrowedTotalWithInterest + protocolLiquidationFeeShare
            );

            // Clear the borrowers interest rate index
            accountInterestIndex[_borrower] = 0;
            // add protocol liquidaiton fee amount to reserves
            totalReserves = totalReserves + protocolLiquidationFeeShare;

            // convert borrowedTotal to usd and divide by collateral usd price
            uint256 borrowedTotalInUSD = currentBorrowAssetPriceInUSD * borrowedTotal;
            uint256 amountOfCollateralToLiquidate = borrowedTotalInUSD / priceOfCollateralInUSD;

            uint256 amountOfCollateralToLiquidateInVaultShares =
                vault.toShare(collateralAsset, amountOfCollateralToLiquidate, true);

            _liquidate(_borrower, msg.sender, amountOfCollateralToLiquidateInVaultShares);
        }
    }

    /// @dev _repayLiquidatingLoan
    /// @param _borrower is the address of the borrower who took out the loan
    /// @param _liquidator is the address of the account who is liquidating the loan
    /// @param _borrowedAmount is the amount of StableCoin being repayed + fee
    /// @dev
    function _repayLiquidatingLoan(
        address _borrower,
        address _liquidator,
        uint256 _borrowedAmount
    ) internal {
        // borrowed amount + liquidation fee
        uint256 amountInShares = vault.toShare(asset, _borrowedAmount, true);
        // repay the liquidated position
        vault.transfer(asset, _liquidator, address(this), amountInShares);
        // burn borrower debt
        debtToken.burn(_borrower, _borrowedAmount);
    }

    /// @dev _liquidate is a function to liquidate a user
    /// @param _account is the address of the account being liquidated
    /// @param _liquidator is the address of the account doing the liquidating who receives the collateral
    function _liquidate(
        address _account,
        address _liquidator,
        uint256 amountOfCollateralToLiquidateInVaultShares
    ) internal {
        // reset the borrowers collateral tracker
        wrappedCollateralAsset.burn(_account, amountOfCollateralToLiquidateInVaultShares);
        // transfer the collateral tokens to the liquidator
        vault.transfer(
            collateralAsset,
            address(this),
            _liquidator,
            amountOfCollateralToLiquidateInVaultShares
        );

        emit Liquidate(
            address(this),
            address(collateralAsset),
            address(_account),
            amountOfCollateralToLiquidateInVaultShares,
            _liquidator
        );
    }

    /// @notice getBlockNumber allows for easy retrieval of block number
    /// @return block number
    function getBlockNumber() internal view returns (uint256) {
        return block.number;
    }

    /// @dev scales the input to from _underlyingDecimal to 18 decimal places
    function normalize(uint256 _amount, uint8 _underlyingDecimal) internal pure returns (uint256) {
        if (_underlyingDecimal >= 18) {
            return _amount / 10**(_underlyingDecimal - 18);
        } else {
            return _amount * (10**(18 - _underlyingDecimal));
        }
    }

    /// @dev scales the input to from 18 decinal to underlying decimal places
    function denormalize(uint256 _amount, uint8 _underlyingDecimal)
        internal
        pure
        returns (uint256)
    {
        if (_underlyingDecimal >= 18) {
            return _amount * 10**(_underlyingDecimal - 18);
        } else {
            return _amount / (10**(18 - _underlyingDecimal));
        }
    }
}
