// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { Initializable } from "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import { UUPSProxiableAndPausable } from "./upgradability/UUPSProxiableAndPausable.sol";
import "./interfaces/IBSVault.sol";

abstract contract VaultBase is UUPSProxiableAndPausable, IBSVault {
    
    /// @notice the address of the blackSmithTeam that enables `admin` functions
    address public blackSmithTeam;

    /// @notice the flashloan rate to charge for flash loans
    uint256 public flashLoanRate;

    /// @notice mapping of token asset to user address and balance
    mapping(IERC20 => mapping(address => uint256)) public override balanceOf;

    /// @notice mapping of token asset to total deposit
    mapping(IERC20 => uint256) public totals;

    /// @notice mapping of user to contract to approval status
    mapping(address => mapping(address => bool)) public userApprovedContracts;

}
