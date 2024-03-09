// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../interfaces/IPriceOracleAggregator.sol";

contract MockPriceOracle is IPriceOracleAggregator {
  
  uint lastestAnswer;

  mapping(IERC20 => uint256) prices;

  constructor(uint _price) {
    lastestAnswer = _price;
  }

  function setPrice(IERC20 _asset, uint _newPrice) external {
    prices[_asset] = _newPrice;
  }

  function getPriceInUSD(IERC20 _token) external view override returns(uint256) {
    if (prices[_token] != 0) {
      return prices[_token];
    }
    return lastestAnswer;
  }

  function viewPriceInUSD(IERC20 /*_token*/) external view override returns(uint256) {
    return lastestAnswer;
  }

}
