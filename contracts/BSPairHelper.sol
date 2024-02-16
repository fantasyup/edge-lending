// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

// helper methods to interact with a pair
contract BSPairHelper {
    

    // function viewPriceOfToken(address token, uint256 amount)
    // public
    // view
    // returns (uint256)
    // {
    //     return oracle.getCurrentPriceInUSD(token) * amount;
    // }


    // /**
    // @notice viewPriceOfCollateral returns the price of an lpToken
    // @param lpToken is the address of the lp token
    // @dev this function runs calculations to retrieve the current price
    // **/
    // function viewPriceOfCollateral(address lpToken)
    //     public
    //     view
    //     returns (uint256)
    // {
    //     return Oracle.viewUnderlyingPrice(lpToken);
    // }


        // /**
    // @notice viewTotalLentValue returns the total lent value for an account in USDC
    // @param _account is the account whos lent value we are calculating
    // **/
    // function viewTotalLentValue(address _account)
    //     public
    //     view
    //     returns (uint256)
    // {
    //     uint256 numSCVaults = scVaults.length;
    //     uint256 totalValue = 0;

    //     // Add up each stable coin vaults value
    //     for (uint256 i = 0; i < numSCVaults; ++i) {
    //         //instantiate each LP edge vault
    //         EdgeVaultSCI WVSC = EdgeVaultSCI(scVaults[i]);
    //         //retreive the amount user has borrowed from each stablecoin vault
    //         uint256 lentBalanceInStable = WVSC.viewAccountBalance(_account);
    //         if (lentBalanceInStable == 0) {
    //             continue;
    //         }
    //         uint256 usdcLentAmount = viewPriceOfToken(
    //             WVSC.getSCAddress(),
    //             lentBalanceInStable
    //         );
    //         totalValue = totalValue.add(usdcLentAmount);
    //     }

    //     return totalValue;
    // }

    // function viewTotalBorrowedValue(address _account)
    //     public
    //     view
    //     returns (uint256)
    // {
    //     // uint256 numSCVaults = scVaults.length;
    //     //initialize the totalBorrowedValue variable to zero
    //     uint256 totalBorrowedValue = 0;
    //     //loop through all stable coin vaults
    //     // for (uint256 i = 0; i < numSCVaults; ++i) {
    //     //instantiate each LP edge vault
    //     // EdgeVaultSCI WVSC = EdgeVaultSCI(scVaults[i]);
    //     //retreive the amount user has borrowed from each stablecoin vault
    //     uint256 borrowBalance = lendingPair.borrowBalancePrior(_account);
    //     // if (borrowBalanceInStable == 0) {
    //     //     continue;
    //     // }
    //     uint256 borrowedAmountInUSD = getPriceOfToken(
    //         address(pairBorrowAssset()),
    //         borrowBalance
    //     );
    //         // totalBorrowedValue = totalBorrowedValue.add(usdcBorrowedAmount);
    //     // }
    //     //return total Borrowed Value
    //     return borrowedAmountInUSD;
    // }

    //     function viewTotalAvailableCollateralValue(address _account)
    //     public
    //     view
    //     returns (uint256)
    // {
    //     // uint256 numVaults = lpVaults.length;
    //     // uint256 totalCollateral = 0;
    //     //loop through each lp wapr vault
    //     // for (uint256 i = 0; i < numVaults; ++i) {
    //         //instantiate edge vault at that position
    //         // EdgeVaultLPI vault = EdgeVaultLPI(lpVaults[i]);
    //         //retreive the address of its asset
    //         // address asset = vault.getAssetAdd();
    //         //retrieve USD price of this asset
    //         uint256 assetPrice = oracle.getPriceInUSD(pairCollateralAsset());
    //         uint256 accountCollateral = collateralPair.collateralOfAccount(_account);

    //         //multiply the amount of collateral by the asset price and return it
    //         uint256 accountAssetsValue = accountCollateral.mul(assetPrice);
    //         //add value to total collateral
    //         totalCollateral = totalCollateral.add(accountAssetsValue);
    //     // }
    //     //return total USDC value of all collateral
    //     return totalCollateral.div(1e18);
    // }



    // /**
    // @notice getBorrowLimit returns the borrow limit for an account
    // @param _account is the input account address
    // @dev this calculation uses previous values for calculations
    // **/
    // function viewBorrowLimit(address _account) public view returns (uint256) {
    //     uint256 availibleCollateralValue = viewTotalAvailableCollateralValue(
    //         _account
    //     );
    //     //return the users borrow limit
    //     return calcBorrowLimit(availibleCollateralValue);
    // }

    //     function viewMaxWithdrawAllowed(address account, address lpToken)
    //     public
    //     view
    //     returns (uint256)
    // {
    //     uint256 borrowedTotal = viewTotalBorrowedValue(account);
    //     uint256 collateralValue = viewTotalAvailableCollateralValue(account);
    //     uint256 requiredCollateral = calcCollateralRequired(borrowedTotal);
    //     if (collateralValue < requiredCollateral) {
    //         return 0;
    //     }
    //     uint256 leftoverCollateral = collateralValue - requiredCollateral;
    //     uint256 currentCollateralValueInUSD = oracle.getPriceInUSD(address(pairCollateralAsset()), leftoverCollateral);
    //     return leftoverCollateral * 1e18 / currentCollateralValueInUSD;
    // }
}
