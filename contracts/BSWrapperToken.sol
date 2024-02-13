// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./token/ERC20.sol";
import "./token/ERC20Permit.sol"

////////////////////////////////////////////////////////////////////////////////////////////
/// @title BSWrapperToken
/// @author @samparsky
////////////////////////////////////////////////////////////////////////////////////////////

contract BSWrapperToken is ERC20Permit, Ownable {
    address public control;
    // underlying wrapper token
    address public underlying;
    // user => pairIds
    // @TODO check
    mapping(address => bytes32[]) public userPairs;
    // user => pairId => value
    mapping(address => mapping(bytes32 => uint256)) private _balanceForPair;

    /// @notice
    function initialize(
        BSControl _control,
        address _underlying,
        string memory _tokenName,
        string memory _tokenSymbol
    ) external {
        initializeERC20(_tokenName, _symbol, 18);
        initializeERC20Permit(_tokenName);
        control = _control;
        underlying = _underlying;
    }

    /**
    @notice mint is an only owner function that allows the owner to mint new tokens to an input account
    @param _to is the address that will receive the new tokens
    @param _amount is the amount of token they will receive
    **/
    function mint(address _pair, address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
        _balanceForPair[_to][_pair] = _balanceForPair[_to][_pair] + amount;
    }

    /**
    * @notice burn is an only owner function that allows the owner to burn  tokens from an input account
    * @param _from is the address where the tokens will be burnt
    * @param _amount is the amount of token to be burnt
    **/
    function burn(address _from, uint256 _amount) public onlyOwner {
        _burn(_from, _amount);
        _balanceForPair[_from][_pair] = _balanceForPair[_from][_pair] - amount;
    }

    /**
    
    **/
    function userBalanceForPair(address _pair, address _user) external returns (uint) {
        return _balanceForPair[_user][_pair];
    }

}
