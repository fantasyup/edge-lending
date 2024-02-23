// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "../interfaces/IOracle.sol";

contract MockPriceOracle is IOracle {
  
  function getPriceInUSD(address /*_token*/) external view override returns(uint256){
    return 1e8;
  }
  
  function getPriceInETH(address /*_token*/) external view override returns(uint256){
    return 1e8;
  }

}
