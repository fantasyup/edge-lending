// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @notice Blacksmith governance token
contract BSToken is Ownable, ERC20Permit {
    constructor(uint256 _totalSupply) ERC20Permit("BlackSimith") ERC20("BlackSmith", "BST") {
        _mint(msg.sender, _totalSupply);
    }
}
