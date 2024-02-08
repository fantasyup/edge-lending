// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

interface IBSPair {
    event UpdatedPriceOracle(address oldOracle, address newOracle);

    function deposit(uint256 amount) external returns(uint);
    function depositWithPermit() external returns(uint);
    function borrow() external returns(uint);
    function updatePriceOracle() external returns(address);

}