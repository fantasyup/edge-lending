// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "./upgradability/UUPSProxy.sol";
import "./interfaces/IBSVault.sol";

contract VaultFactory {
    address public vaultLogic;
    address immutable public owner;

    event NewVault(address vault, uint256 created);
    event VaultUpdated(address vault, uint256 created);


    /// @notice modifier to allow only the owner to call a function
    modifier onlyOwner {
        require(msg.sender == owner, "ONLY_ADMIN");
        _;
    }

    constructor(
        address _owner,
        address _vaultLogic
    ) {
        require(_vaultLogic != address(0), "invalid vault");
        owner = _owner;
        vaultLogic = _vaultLogic;
    }

    function updateVault(address _newVault) external onlyOwner {
        require(_newVault != address(0), "invalid vault");
        vaultLogic = _newVault;

        emit VaultUpdated(_newVault, block.timestamp);
    }

    function createVaultWithProxy(
        uint256 _flashLoanRate,
        address _vaultOwner
    ) external returns(address) {
        UUPSProxy proxy = new UUPSProxy();
        proxy.initializeProxy(vaultLogic);

        /// initiailize vault
        IBSVault(address(proxy)).initialize(_flashLoanRate, _vaultOwner);

        emit NewVault(address(proxy), block.timestamp);

        return address(proxy);
    }

}