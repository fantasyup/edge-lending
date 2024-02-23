// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../interfaces/IPriceOracle.sol";

contract MockPriceOracle is IPriceOracle {
  
  uint lastestAnswer = 1e18; 

  function getPriceInUSD(IERC20 /*_token*/) external override returns(uint256) {
    lastestAnswer = 1e18; // to remove solidity compiler warnings
    return lastestAnswer;
  }
  
  function getPriceInETH(IERC20 /*_token*/) external override returns(uint256) {
    lastestAnswer = 1e18; // to remove solidity compiler warnings
    return lastestAnswer;
  }

  function viewPriceInETH(IERC20 /*_token*/) external view override returns(uint256) {
    return lastestAnswer;
  }

  function viewPriceInUSD(IERC20 /*_token*/) external view override returns(uint256) {
    return lastestAnswer;
  }

}
