// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { UUPSProxiable } from "../upgradability/UUPSProxiable.sol";
import "../interfaces/IPriceOracleAggregator.sol";
import "../interfaces/IOracle.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title DataTypes
/// @author @samparsky
/// @notice aggregator of price oracle for assets in LendingPairs
////////////////////////////////////////////////////////////////////////////////////////////

contract PriceOracleAggregator is UUPSProxiable, IPriceOracleAggregator {
    /// @dev control allowed to update price oracle
    address public blackSmithTeam;

    /// @notice token to the oracle address
    mapping(IERC20 => IOracle) public assetToOracle;

    event UpdateOracle(IERC20 token, IOracle oracle);

    modifier onlyBlackSmithTeam() {
        require(msg.sender == blackSmithTeam, "ONLY_TEAM");
        _;
    }

    constructor(address _blackSmithTeam) {
        blackSmithTeam = _blackSmithTeam;
    }

    /// @notice adds oracle for an asset e.g. ETH
    /// @param _asset the oracle for the asset
    /// @param _oracle the oracle address
    function updateOracleForAsset(IERC20 _asset, IOracle _oracle) external override onlyBlackSmithTeam {
        require(address(_asset) != address(0), "INVALID_ASSET");
        require(address(_oracle) != address(0), "INVALID_ORACLE");
        assetToOracle[_asset] = _oracle;
        emit UpdateOracle(_asset, _oracle);
    }

    /// @notice returns price of token in USD in 1e8 decimals
    /// @param _token token to fetch price
    function getPriceInUSD(IERC20 _token) external override returns (uint256) {
        require(address(assetToOracle[_token]) != address(0), "INVALID_ORACLE");
        return assetToOracle[_token].getPriceInUSD();
    }

    /// @notice returns price of token in USD
    /// @param _token view price of token
    function viewPriceInUSD(IERC20 _token) external view override returns (uint256) {
        require(address(assetToOracle[_token]) != address(0), "INVALID_ORACLE");
        return assetToOracle[_token].viewPriceInUSD();
    }

    function proxiableUUID() public pure override returns (bytes32) {
        return keccak256("org.edge.contracts.edgevault.priceoralceaggregator");
    }

    function updateCode(address newAddress) external override onlyBlackSmithTeam {
        _updateCodeAddress(newAddress);
    }
}
