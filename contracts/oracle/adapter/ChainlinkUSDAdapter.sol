// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../../interfaces/IOracle.sol";
import "../../interfaces/IChainlinkV3Aggregator.sol";

contract ChainlinkUSDAdapter is IOracle {

    /// @notice the asset with the price oracle
    address immutable public asset;
    
    /// @notice chainlink aggregator with price in USD
    IChainlinkV3Aggregator immutable public aggregator;

    /// @dev the latestAnser returned
    uint256 private latestAnswer;

    constructor (address _asset, IChainlinkV3Aggregator _aggregator) {
        asset = _asset;
        aggregator = _aggregator;
    }

    /// @dev returns price of asset in 1e8
    function getPriceInUSD() external override returns(uint256 price) {
        (, int256 priceC, , , ) = aggregator.latestRoundData();
        price = uint256(priceC);
        latestAnswer = price;
        emit PriceUpdated(asset, price);
    }

    /// @dev returns the latest price of asset
    function viewPriceInUSD() external override view returns(uint256) {
        return latestAnswer;
    }

}
