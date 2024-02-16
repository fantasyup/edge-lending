// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/security/Pausable.sol";
import "../upgradability/UUPSProxy.sol";

contract UpgradableProxyAndPausable is UUPSProxy, Pausable {

}