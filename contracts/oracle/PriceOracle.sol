// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "../interfaces/IPriceOracle.sol";
import "../interfaces/IOracle.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @notice aggregator of price oracle for assets in LendingPairs

contract PriceOracle is IPriceOracle {

    /// @dev control allowed to update price oracle
    address control;

    /// @notice token to the oracle address
    mapping(IERC20 => IOracle) public assetToOracle;

    event UpdateOracle(
        IERC20 token,
        IOracle oracle
    );

    modifier onlyControl() {
        require(msg.sender == control);
        _;
    }

    constructor(address _control) {
        control = _control;
    }

    /// @notice adds oracle for an asset e.g. ETH
    /// @param _asset the oracle for the asset
    /// @param _oracle the oracle address
    function updateOracleForAsset(IERC20 _asset, IOracle _oracle) external onlyControl {
        require(address(_oracle) != address(0), "INVALID_ORACLE");
        assetToOracle[_asset] = _oracle;
        emit UpdateOracle(_asset, _oracle);
    }

    /// @notice returns price of token in USD
    /// @param _token token to fetch price
    function getPriceInUSD(IERC20 _token) external override returns(uint256) {
        require(address(assetToOracle[_token]) != address(0), "INVALID_ORACLE");
        return assetToOracle[_token].getPriceInUSD();
    }

    /// @notice returns price of token in ETH
    /// @param _token token to fetch price
    function getPriceInETH(IERC20 _token) external override returns(uint256) {
        require(address(assetToOracle[_token]) != address(0), "INVALID_ORACLE");
        return assetToOracle[_token].getPriceInETH();
    }

    /// @notice returns price of token in USD
    /// @param _token view price of token
    function viewPriceInUSD(IERC20 _token) external view override returns(uint256) {
        require(address(assetToOracle[_token]) != address(0), "INVALID_ORACLE");
        return assetToOracle[_token].viewPriceInUSD();
    }

    /// @notice returns price of token in USD
    /// @param _token view price of token
    function viewPriceInETH(IERC20 _token) external view override returns(uint256) {
        require(address(assetToOracle[_token]) != address(0), "INVALID_ORACLE");
        return assetToOracle[_token].viewPriceInETH();
    }
}
