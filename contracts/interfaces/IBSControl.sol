// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

interface IBSControl {

    function getMaxWithdrawAllowed(
        address,
        address
    ) external returns(uint256);

    function viewPriceOfCollateral(
        address
    ) external view returns(uint256);

}