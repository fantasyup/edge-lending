// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./WrapperToken.sol";
import "./interfaces/IBSLendingPair.sol";
import "./interfaces/IDebtToken.sol";
import "hardhat/console.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title DebtToken
/// @author @samparsky
////////////////////////////////////////////////////////////////////////////////////////////

contract DebtToken is WrapperToken, IDebtToken {
    bool constant isDebtToken = true;

    mapping(address => mapping(address => uint256)) private _borrowAllowances;

    /// @notice
    function initialize(
        address __owner,
        address _underlying,
        string memory _tokenName,
        string memory _tokenSymbol
    ) external override(WrapperToken, IBSWrapperTokenBase) initializer {
        require(__owner != address(0), "invalid owner");
        _owner = __owner;
        uint8 underlyingDecimal = IERC20Details(_underlying).decimals();
        initializeERC20(_tokenName, _tokenSymbol, underlyingDecimal);
        initializeERC20Permit(_tokenName);
        underlying = address(0);
    }

    function principal(address _account) external view override returns (uint256) {
        return _balances[_account];
    }

    /// @dev calculates the debt balance of account
    function balanceOf(address _account) public view override(ERC20, IERC20) returns (uint256) {
        return IBSLendingPair(_owner).borrowBalancePrior(_account);
    }

    function mint(address _debtOwner, address _to, uint256 _amount) external override onlyLendingPair {
        if(_debtOwner != _to) {
            _decreaseBorrowAllowance(_debtOwner, _to, _amount);
        }
        _mint(_debtOwner, _amount);
    }

    /**
     * @notice burn is an only owner function that allows the owner to burn  tokens from an input account
     * @param _from is the address where the tokens will be burnt
     * @param _amount is the amount of token to be burnt
     **/
    function burn(address _from, uint256 _amount)
        external
        override(IBSWrapperTokenBase, WrapperToken)
        onlyLendingPair
    {
        _balances[_from] = balanceOf(_from) - _amount;
        if (_amount > _totalSupply) {
            _totalSupply = 0;
        } else {
            _totalSupply -= _amount;
        }
    }

    function borrowAllowance(address _from, address _to) external view returns(uint256) {
        return _borrowAllowances[_from][_to];
    }

    function delegateBorrow(address _to, uint256 _amount) external {
        require(_to != address(0), "invalid _to");

        _borrowAllowances[msg.sender][_to] = _amount;
        emit DelegateBorrow(msg.sender, _to, _amount, block.timestamp);
    }

    function _decreaseBorrowAllowance(address _from, address _to, uint256 _amount) internal {
        _borrowAllowances[_from][_to] =  _borrowAllowances[_from][_to] - _amount;
        emit DelegateBorrow(_from, _to, _amount, block.timestamp);
    }
    
    /// @notice used to increase the debt of the system
    /// @param _amount is the amount to increase
    function increaseTotalDebt(uint256 _amount) external override onlyLendingPair {
        _totalSupply = _totalSupply + _amount;
    }

    function transfer(
        address, /*recipient*/
        uint256 /*amount*/
    ) public pure override(ERC20, IERC20) returns (bool) {
        revert("TRANSFER_NOT_SUPPORTED");
    }

    function approve(
        address, /*spender*/
        uint256 /*amount*/
    ) public virtual override(ERC20, IERC20) returns (bool) {
        revert("APPROVAL_NOT_SUPPORTED");
    }

    function allowance(
        address, /*owner*/
        address /*spender*/
    ) public view virtual override(ERC20, IERC20) returns (uint256) {
        revert("ALLOWANCE_NOT_SUPPORTED");
    }

    function transferFrom(
        address, /*sender*/
        address, /*recipient*/
        uint256 /*amount*/
    ) public virtual override(ERC20, IERC20) returns (bool) {
        revert("TRANSFER_NOT_SUPPORTED");
    }

    function increaseAllowance(
        address, /*spender*/
        uint256 /*addedValue*/
    ) public virtual override returns (bool) {
        revert("ALLOWANCE_NOT_SUPPORTED");
    }

    function decreaseAllowance(
        address, /*spender*/
        uint256 /*subtractedValue*/
    ) public virtual override returns (bool) {
        revert("ALLOWANCE_NOT_SUPPORTED");
    }
}
