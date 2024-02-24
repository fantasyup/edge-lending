// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./util/Ownable.sol";
import "./token/ERC20Permit.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title WrapperToken
/// @author @samparsky
////////////////////////////////////////////////////////////////////////////////////////////

contract WrapperToken is ERC20Permit, Ownable {
    // underlying wrapper token
    address public underlying;

    /// @notice
    function initialize(
        address _underlying,
        string memory _tokenName,
        string memory _tokenSymbol
    ) external {
        initializeOwner();
        initializeERC20(_tokenName, _tokenSymbol, 18);
        initializeERC20Permit(_tokenName);
        underlying = _underlying;
    }

    /**
    @notice mint is an only owner function that allows the owner to mint new tokens to an input account
    @param _to is the address that will receive the new tokens
    @param _amount is the amount of token they will receive
    **/
    function mint(address _to, uint256 _amount) external onlyOwner {
        _mint(_to, _amount);
    }

    /**
    * @notice burn is an only owner function that allows the owner to burn  tokens from an input account
    * @param _from is the address where the tokens will be burnt
    * @param _amount is the amount of token to be burnt
    **/
    function burn(address _from, uint256 _amount) external onlyOwner {
        _burn(_from, _amount);
    }

}
