// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./WrapperToken.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title DebtToken
/// @author @samparsky
////////////////////////////////////////////////////////////////////////////////////////////

contract DebtToken is WrapperToken {
    bool constant isDebtToken = true;
    
    function transfer(address recipient, uint256 amount)
        public
        override
        pure
        returns (bool)
    {
        recipient = recipient;
        amount;
        revert("TRANSFER_NOT_SUPPORTED");
    }

    function approve(address spender, uint256 amount)
        public
        virtual
        override
        returns (bool)
    {
        spender;
        amount;
        revert("APPROVAL_NOT_SUPPORTED");
    }

    function allowance(address owner, address spender)
        public
        view
        virtual
        override
        returns (uint256)
    {
        owner;
        spender;
        revert("ALLOWANCE_NOT_SUPPORTED");
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        sender;
        recipient;
        amount;
        revert("TRANSFER_NOT_SUPPORTED");
    }

    function increaseAllowance(address spender, uint256 addedValue)
        public
        virtual
        override
        returns (bool)
    {
        spender;
        addedValue;
        revert("ALLOWANCE_NOT_SUPPORTED");
    }

    function decreaseAllowance(address spender, uint256 subtractedValue)
        public
        virtual
        override
        returns (bool)
    {
        spender;
        subtractedValue;
        revert("ALLOWANCE_NOT_SUPPORTED");
    }
}
