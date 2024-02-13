// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

interface IBSWrapperToken {
    function balanceForPair(address _pair, address _user_) external returns (uint);
}
