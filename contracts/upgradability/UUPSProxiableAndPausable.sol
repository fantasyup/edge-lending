// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import { UUPSProxiable } from "./UUPSProxiable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @dev UUPS (Universal Upgradeable Proxy Standard) Proxiable contract.
 */

abstract contract UUPSProxiableAndPausable is UUPSProxiable, Pausable { }
