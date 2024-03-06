// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "../interfaces/IPriceOracle.sol";
import "../interfaces/IOracle.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title DataTypes
/// @author @samparsky
/// @notice aggregator of price oracle for assets in LendingPairs
////////////////////////////////////////////////////////////////////////////////////////////

contract PriceOracleAggregator is IPriceOracle {

    /// @dev control allowed to update price oracle
    address public blackSmithTeam;

    /// @notice token to the oracle address
    mapping(IERC20 => IOracle) public assetToOracle;

    event UpdateOracle(
        IERC20 token,
        IOracle oracle
    );

    modifier onlyBlackSmithTeam() {
        require(msg.sender == blackSmithTeam);
        _;
    }

    constructor(address _blackSmithTeam) {
        blackSmithTeam = _blackSmithTeam;
    }

    /// @notice adds oracle for an asset e.g. ETH
    /// @param _asset the oracle for the asset
    /// @param _oracle the oracle address
    function updateOracleForAsset(IERC20 _asset, IOracle _oracle) external onlyBlackSmithTeam {
        require(address(_oracle) != address(0), "INVALID_ORACLE");
        assetToOracle[_asset] = _oracle;
        emit UpdateOracle(_asset, _oracle);
    }

    /// @notice returns price of token in USD in 1e8 decimals
    /// @param _token token to fetch price
    function getPriceInUSD(IERC20 _token) external override returns(uint256) {
        require(address(assetToOracle[_token]) != address(0), "INVALID_ORACLE");
        return assetToOracle[_token].getPriceInUSD();
    }


    /// @notice returns price of token in USD
    /// @param _token view price of token
    function viewPriceInUSD(IERC20 _token) external view override returns(uint256) {
        require(address(assetToOracle[_token]) != address(0), "INVALID_ORACLE");
        return assetToOracle[_token].viewPriceInUSD();
    }

}
