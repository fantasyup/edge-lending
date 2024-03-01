// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../../interfaces/IOracle.sol";
import "../../interfaces/IChainlinkAggregator.sol";

contract Chainlink is IOracle {

    /// @notice the asset with the price oracle
    address immutable public asset;
    
    /// @notice weth address
    address immutable public WETH;

    /// @notice chainlink aggregator
    IChainlinkAggregator immutable public aggregator;


    constructor (address _asset, address _weth, IChainlinkAggregator _aggregator) {
        asset = _asset;
        WETH = _weth;
        aggregator = _aggregator;
    }

    function getPriceInETH() external override view returns(uint256) {

    }

    function getPriceInUSD() external override view returns(uint256) {

    }

    function viewPriceInETH() external override view returns(uint256) {

    }

    function viewPriceInUSD() external override view returns(uint256) {

    }

}
