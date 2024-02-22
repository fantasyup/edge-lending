// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

interface IPriceOracle {
    function getPriceETH() external returns (uint256);
    function getPriceUSD() external returns (uint256);
}