// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

interface IOracle {
    function getPriceInETH() external view returns (uint256);
    function getPriceInUSD() external view returns (uint256);
    function viewPriceInETH() external view returns (uint256);
    function viewPriceInUSD() external view returns (uint256);
}
