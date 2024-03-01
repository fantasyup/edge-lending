// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

interface IOracle {

    /// @notice Price update event
    /// @param asset the asset 
    /// @param newPrice price of the asset
    event PriceUpdated(
        address asset,
        uint256 newPrice
    );

    function getPriceInETH() external returns (uint256);
    function getPriceInUSD() external returns (uint256);
    function viewPriceInETH() external view returns (uint256);
    function viewPriceInUSD() external view returns (uint256);
}
