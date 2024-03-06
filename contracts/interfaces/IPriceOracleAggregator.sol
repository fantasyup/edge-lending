// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IPriceOracleAggregator {
    function getPriceInUSD(IERC20 _token) external returns (uint256);
    function viewPriceInUSD(IERC20 _token) external view returns(uint256);
}
