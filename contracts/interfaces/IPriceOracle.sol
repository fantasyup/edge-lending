// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IPriceOracle {
    function getPriceInETH(IERC20 _token)
        external
        view
        returns (uint256);

    function getPriceInUSD(IERC20 _token)
        external
        view
        returns (uint256);
}