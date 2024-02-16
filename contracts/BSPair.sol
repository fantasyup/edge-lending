// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./interfaces/IBSCollateralPair.sol";
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IBSControl.sol";
import "./interfaces/IBSVault.sol";
import "./interfaces/IOracle.sol";

contract BSPair {

    IBSControl public control;
    IBSVault public vault;
    IOracle public oracle;

    IBSLendingPair public lendingPair;
    IBSCollateralPair public collateralPair;

    function initialize(
        IBSControl _control,
        IBSVault _vault,
        IBSLendingPair _lendingPair,
        IBSCollateralPair _collateralPair
    ) public {
        control = _control;
        vault = _vault;
        lendingPair = _lendingPair;
        collateralPair = _collateralPair;
    }

    // helper functions to access information about a pair
    function pairCollateralAsset() public view returns (IERC20) {
        return collateralPair.asset();
    }

    function pairBorrowAsset() public view returns (IERC20) {
        return lendingPair.asset();
    }

    /**
    @notice Figures out how much of a given LP token an account is allowed to withdraw
    @param account is the account being checked
    @dev this function runs calculations to accrue interest for an up to date amount
     */
    function getMaxWithdrawAllowed(address account)
        public
        returns (uint256)
    {
        uint256 borrowedTotal = getTotalBorrowedValue(account);
        uint256 collateralValue = getTotalAvailableCollateralValue(account);
        uint256 requiredCollateral = calcCollateralRequired(borrowedTotal);
        if (collateralValue < requiredCollateral) {
            return 0;
        }
        uint256 leftoverCollateral = collateralValue - requiredCollateral;
        uint256 currentCollateralValueInUSD = oracle.getPriceInUSD(address(pairCollateralAsset()), leftoverCollateral);
        return leftoverCollateral * 1e18 / currentCollateralValueInUSD;
    }

    /**
    @notice getTotalAvailableCollateralValue returns the total availible collaeral value for an account in USDC
    @param _account is the address whos collateral is being retreived
    @dev this function runs calculations to accrue interest for an up to date amount
    **/
    function getTotalAvailableCollateralValue(address _account)
        public
        returns (uint256)
    {
        // get the number of LP vaults the platform has
        // uint256 numVaults = lpVaults.length;
        //initialize the totalCollateral variable to zero
        // uint256 totalCollateral = 0;
        //loop through each lp wapr vault
        // for (uint256 i = 0; i < numVaults; ++i) {
        // instantiate edge vault at that position
        // EdgeVaultLPI vault = EdgeVaultLPI(lpVaults[i]);
        // retreive the address of its asset
        address asset = address(collateralPair.collateral());

        uint256 accountCollateral = collateralPair.collateralOfAccount(_account);
        // convert accountCollateral to underlyingBalance
        uint256 accountVaultUnderlyingBalance = accountCollateral * vault.shareValueOf(asset);
        // emit DebugValues(accountCollateral, assetPrice);
        // multiply the amount of collateral by the asset price and return it
        uint256 accountAssetsValue =  getPriceOfToken(asset, accountVaultUnderlyingBalance);
        // add value to total collateral
        // totalCollateral = totalCollateral.add(accountAssetsValue);
        // }
        return accountAssetsValue;
    }


    // /**
    // @notice getPriceOfCollateral returns the price of an lpToken
    // @param lpToken is the address of the lp token
    // @dev this function does not run calculations amd returns the previously calculated price
    // **/
    // function getPriceOfCollateral(address lpToken) public returns (uint256) {
    //     return Oracle.getUnderlyingPrice(lpToken);
    // }

    function getPriceOfToken(address token, uint256 amount)
        public
        returns (uint256)
    {
        return oracle.getPriceInUSD(token) * amount;
    }

    /**
    @notice viewTotalBorrowedValue returns the total borrowed value for an account in USDC
    @param _account is the account whos borrowed value we are calculating
    @dev this function returns newly calculated values
    **/
    function getTotalBorrowedValue(address _account) public returns (uint256) {
        // uint256 numSCVaults = scVaults.length;
        //initialize the totalBorrowedValue variable to zero
        // uint256 totalBorrowedValue = 0;
        // loop through all stable coin vaults
        // for (uint256 i = 0; i < numSCVaults; ++i) {
            //instantiate each LP edge vault
            // EdgeVaultSCI WVSC = EdgeVaultSCI(scVaults[i]);
            //retreive the amount user has borrowed from each stablecoin vault
        uint256 currentBorrowBalance = lendingPair.borrowBalanceCurrent(_account);
            // if (borrowBalanceInStable == 0) {
            //     continue;
            // }
        return getPriceOfToken(
            address(lendingPair.asset()),
            currentBorrowBalance
        );
            // totalBorrowedValue = totalBorrowedValue.add(usdcBorrowedAmount);
        // }
        // return total Borrowed Value
        // return totalBorrowedValue;
    }

    /**
    @notice calcBorrowLimit is used to calculate the borrow limit for an account based on the input value of their collateral
    @param _collateralValue is the USDC value of the users collateral
    @dev this function divides the input value by 3 and then adds that value to itself so it can return 2/3rds of the availible collateral
        as the borrow limit. If a usser has $150 USDC value in collateral this function will return $100 USDC as their borrow limit.
    **/
    function calcBorrowLimit(uint256 _collateralValue)
        public
        pure
        returns (uint256)
    {
        //divide the collaterals value by 3 to get 1/3rd of its value
        uint256 thirdCollatVal = _collateralValue.div(3);
        //add this 1/3rd value to itself to get 2/3rds of the original value
        return thirdCollatVal.add(thirdCollatVal);
    }

    /**
    @notice calcCollateralRequired returns the amount of collateral needed for an input borrow value
    @param _borrowAmount is the input borrow amount
    **/
    function calcCollateralRequired(uint256 _borrowAmount)
        public
        pure
        returns (uint256)
    {
        // 150% collateralFactor
        return _borrowAmount.mul(3).div(2);
    }

    /**
    @notice getBorrowLimit returns the borrow limit for an account
    @param _account is the input account address
    @dev this calculation uses current values for calculations
    **/
    function getBorrowLimit(address _account) public returns (uint256) {
        uint256 availibleCollateralValue = getTotalAvailableCollateralValue(
            _account
        );

        return calcBorrowLimit(availibleCollateralValue);
    }


    /**
    @param _amount is the amount of that stablecoin the user wants to borrow
    **/
    function borrow(uint256 _amount) public {
        uint256 borrowedTotalInUSDC = getTotalBorrowedValue(msg.sender);
        uint256 borrowLimitInUSDC = getBorrowLimit(msg.sender);
        uint256 borrowAmountAllowedInUSDC = borrowLimitInUSDC.sub(
            borrowedTotalInUSDC
        );

        uint256 borrowAmountInUSDC = getPriceOfToken(pairBorrowAsset(), _amount);

        //require the amount being borrowed is less than or equal to the amount they are aloud to borrow
        require(
            borrowAmountAllowedInUSDC >= borrowAmountInUSDC,
            "Borrowing more than allowed"
        );

        //retreive stablecoin vault address being borrowed from and instantiate it
        lendingPair._borrow(_amount, msg.sender);

        // emit NewBorrow(msg.sender, address(pairBorrowAsset()), _amount);
    }

    /**
    @notice liquidateAccount is used to liquidate a non-compliant loan after it has reached its 30 minute grace period
    @param _borrower is the address of the borrower whos loan is non-compliant
    **/
    function liquidateAccount(address _borrower) public {
        //require the liquidator is not also the borrower
        require(msg.sender != _borrower, "you cant liquidate yourself");
        //retreive the number of stablecoin vaults in the edge platform
        uint256 numSCVaults = scVaults.length;
        //retreive the number of LP vaults in the edge platform
        uint256 numLPVaults = lpVaults.length;
        // This is how much USDC worth of Stablecoin the user has borrowed
        uint256 borrowedAmount = 0;
        //initialize the stable coin balances array
        uint256[] memory scBalances = new uint256[](numSCVaults);
        // loop through and retreive the Borrowed Amount From All Vaults
        for (uint256 i = 0; i < numSCVaults; ++i) {
            //instantiate the vault at the current  position in the array
            EdgeVaultSCI scVault = EdgeVaultSCI(scVaults[i]);
            //retreive the borrowers borrow balance from this vault and add it to the scBalances array
            scBalances[i] = scVault.borrowBalanceCurrent(_borrower);
            uint256 borrowedAmountInUSDC = viewPriceOfToken(
                getAssetByVault[address(scVault)],
                scBalances[i]
            );

            //add the borrowed amount to the total borrowed balance
            borrowedAmount = borrowedAmount.add(borrowedAmountInUSDC);
        }
        //retreve the USDC borrow limit for the borrower
        uint256 borrowLimit = getBorrowLimit(_borrower);
        //check if the borrow is less than the borrowed amount
        if (borrowLimit <= borrowedAmount) {
            // If it is Liquidate the account
            //loop through each SC vault so the  Liquidator can pay off Stable Coin loans
            for (uint256 i = 0; i < numSCVaults; ++i) {
                //instantiate the Edge SC Vault at the current position
                EdgeVaultSCI scVault = EdgeVaultSCI(scVaults[i]);
                //call repayLiquidatedLoan function to repay the loan
                scVault._repayLiquidatedLoan(
                    _borrower,
                    msg.sender,
                    scBalances[i]
                );
            }
            //loop through each LP vault so the Liquidator gets the LP tokens the borrower had
            for (uint256 i = 0; i < numLPVaults; ++i) {
                //instantiate the Edge LP Vault at the current position
                EdgeVaultLPI lpVault = EdgeVaultLPI(lpVaults[i]);
                //call liquidateAccount function on that LP vault
                lpVault._liquidateAccount(_borrower, msg.sender);
            }
            emit Liquidation(_borrower, msg.sender);
        }
    }


}