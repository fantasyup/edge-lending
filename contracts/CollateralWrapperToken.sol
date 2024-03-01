// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./WrapperToken.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title CollateralWrapperToken
/// @author @samparsky
////////////////////////////////////////////////////////////////////////////////////////////

contract CollateralWrapperToken is WrapperToken {
    function transfer(address _recipient, uint256 _amount) public override returns (bool) {
        uint maxWithdrawAllowed = pair.getMaxWithdrawAllowed(msg.sender);
        require(_amount <= maxWithdrawAllowed, "EXCEEDS_ALLOWANCE");
        _transfer(msg.sender, _recipient, _amount);
        return true;
    }
}
