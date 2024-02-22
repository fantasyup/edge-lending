// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import { Initializable } from "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import { UUPSProxiableAndPausable } from "./upgradability/UUPSProxiableAndPausable.sol";

abstract contract VaultBase is UUPSProxiableAndPausable  {
}
