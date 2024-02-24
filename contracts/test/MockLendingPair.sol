// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract MockLendingPair {
    function deposit(
        address /*_token*/,
        address /*__tokenReceipeint*/,
        uint256/*_ _amount*/
    ) external pure returns(uint256) {
        return 1;
    }
}