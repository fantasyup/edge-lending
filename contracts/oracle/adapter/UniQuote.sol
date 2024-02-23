// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../../interfaces/IOracle.sol";
import "../../interfaces/IKeeperOracle.sol";

contract UniQuote is IOracle {
    /// @notice the asset with the price oracle
    address immutable public asset;
    
    /// @notice weth address
    address immutable public WETH;

    /// @notice oracle being used
    IKeeperOracle immutable public sushiswapKeeperOracle;

    uint256 private latestPriceInETH;
    uint256 private latestPriceInUSD;

    constructor (address _asset, address _weth, IKeeperOracle _sushiswapKeeperOracle) {
        asset = _asset;
        WETH = _weth;
        sushiswapKeeperOracle = _sushiswapKeeperOracle;
    }

    function getPriceInETH() public override view returns (uint256 priceInETH) {
        uint8 decimals = ERC20(asset).decimals();
        // If token has SushiSwap Keeper oracle
        address sushiPair = sushiswapKeeperOracle.pairFor(asset, WETH);

        if (sushiswapKeeperOracle.observationLength(sushiPair) > 0) {
            priceInETH = sushiswapKeeperOracle.current(asset, 10 ** decimals, WETH);
            latestPriceInETH = priceInETH;
        }
    }

    function viewPriceInETH() external override view returns(uint256) {
        return latestPriceInETH;
    }

    function viewPriceInUSD() external override view returns(uint256) {
        return latestPriceInUSD;
    }

    // @TODO compelete implementataion
    function getPriceInUSD() external override view returns(uint256 priceInUSD) {
        uint256 priceInETH = getPriceInETH();
        return priceInETH / 1e18;
    }
}