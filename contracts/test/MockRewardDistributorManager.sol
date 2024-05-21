// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "../interfaces/IRewardDistributorManager.sol";
import "../upgradability/UUPSProxiable.sol";

contract MockRewardDistributorManager is UUPSProxiable, IRewardDistributorManager {
    function activateReward(address _tokenAddr) external pure override {
        _tokenAddr;
        return;
    }

    function removeReward(address _tokenAddr, IRewardDistributor _distributor)
        external
        pure
        override
    {
        _tokenAddr;
        _distributor;
        return;
    }

    function accumulateRewards(
        address _from,
        address _to,
        uint256 _balance
    ) external pure override {
        _from;
        _to;
        _balance;
        return;
    }

    function proxiableUUID() public pure override returns (bytes32) {
        return keccak256("org.edge.contracts.edgerewards.implementation");
    }
    
    function updateCode(address newAddress) external override {
         _updateCodeAddress(newAddress);
    }

}
