// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./WrapperToken.sol";
import "./interfaces/IDebtToken.sol";
import "hardhat/console.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title DebtToken
/// @author @samparsky
////////////////////////////////////////////////////////////////////////////////////////////

contract DebtToken is WrapperToken, IDebtToken {
    bool constant isDebtToken = true;

        /// @notice
    function initialize(
        IBSLendingPair __owner,
        address _underlying,
        string memory _tokenName,
        string memory _tokenSymbol
    ) external override(WrapperToken, IBSWrapperToken) initializer {
        require(address(__owner) != address(0), "invalid owner");
        _owner = __owner;
        initializeERC20(_tokenName, _tokenSymbol, 18);
        initializeERC20Permit(_tokenName);
        underlying = _underlying;
    }

    function balanceOf(address _account) public view override(ERC20, IERC20) returns(uint256 balance) {
        uint256 principalTimesIndex;
        // Get borrowBalance and borrowIndex
        uint256 principal = _balances[_account];
        // If borrowBalance = 0 then borrowIndex is likely also 0.
        // Rather than failing the calculation with a division by 0, we immediately return 0 in this case.
        if (principal == 0) {
            return 0;
        }

        uint256 borrowInterestIndex = _owner.accountInterestIndex(_account);
        // Calculate new borrow balance using the interest index:
        // recentBorrowBalance = borrower.borrowBalance * market.borrowIndex / borrower.borrowIndex
        principalTimesIndex = principal * _owner.borrowIndex();
        balance = principalTimesIndex / borrowInterestIndex;
    }

    /**
    * @notice burn is an only owner function that allows the owner to burn  tokens from an input account
    * @param _from is the address where the tokens will be burnt
    * @param _amount is the amount of token to be burnt
    **/
    function burn(address _from, uint256 _amount) external override(IBSWrapperToken, WrapperToken) onlyLendingPair {
        _balances[_from] = balanceOf(_from) - _amount;
        _totalSupply = _totalSupply - _amount;
    }

    /**
    * @notice used to increase the debt of the system
    * @param _amount is the amount of token to increase supply
    **/
    function increaseTotalDebt(uint256 _amount) external override onlyLendingPair {
        _totalSupply = _totalSupply + _amount;
    }

    function transfer(address /*recipient*/, uint256 /*amount*/)
        public
        override(ERC20, IERC20)
        pure
        returns (bool)
    {
        revert("TRANSFER_NOT_SUPPORTED");
    }

    function approve(address /*spender*/, uint256 /*amount*/)
        public
        virtual
        override(ERC20, IERC20)
        returns (bool)
    {
        revert("APPROVAL_NOT_SUPPORTED");
    }

    function allowance(address /*owner*/, address /*spender*/)
        public
        view
        virtual
        override(ERC20, IERC20)
        returns (uint256)
    {
        revert("ALLOWANCE_NOT_SUPPORTED");
    }

    function transferFrom(
        address /*sender*/,
        address /*recipient*/,
        uint256 /*amount*/
    ) public virtual override(ERC20, IERC20) returns (bool) {
        revert("TRANSFER_NOT_SUPPORTED");
    }

    function increaseAllowance(address /*spender*/, uint256 /*addedValue*/)
        public
        virtual
        override
        returns (bool)
    {
        revert("ALLOWANCE_NOT_SUPPORTED");
    }

    function decreaseAllowance(address /*spender*/, uint256 /*subtractedValue*/)
        public
        virtual
        override
        returns (bool)
    {
        revert("ALLOWANCE_NOT_SUPPORTED");
    }
}
