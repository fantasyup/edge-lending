// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

/// @notice Blacksmith governance token
contract BSToken is ERC20Permit {
    constructor() ERC20Permit("BlackSimith") ERC20("BlackSmith", "BST"){}
}
