// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./WrapperToken.sol";
import "hardhat/console.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title CollateralWrapperToken
/// @author @samparsky
////////////////////////////////////////////////////////////////////////////////////////////

contract CollateralWrapperToken is WrapperToken {
    function transfer(address _recipient, uint256 _amount) external override returns (bool) {
        uint maxWithdrawAllowed = this.owner().getMaxWithdrawAllowed(msg.sender);
        console.logString("transfer");
        console.logUint(maxWithdrawAllowed);
        require(_amount <= maxWithdrawAllowed, "EXCEEDS_ALLOWED");
        _transfer(msg.sender, _recipient, _amount);
        return true;
    }
}
