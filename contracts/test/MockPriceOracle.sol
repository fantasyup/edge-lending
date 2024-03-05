// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../interfaces/IPriceOracle.sol";

contract MockPriceOracle is IPriceOracle {
  
  uint lastestAnswer;

  constructor(uint _price) {
    lastestAnswer = _price;
  }

  function setPrice(uint _newPrice) external {
    lastestAnswer = _newPrice;
  }

  function getPriceInUSD(IERC20 /*_token*/) external override returns(uint256) {
    lastestAnswer = lastestAnswer; // to remove solidity compiler warnings
    return lastestAnswer;
  }

  function viewPriceInUSD(IERC20 /*_token*/) external view override returns(uint256) {
    return lastestAnswer;
  }

}
