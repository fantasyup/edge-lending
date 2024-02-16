// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

interface IOracle {
    function getPriceInETH(address _token)
        external
        view
        returns (uint256);

    function getPriceInUSD(address _token)
        external
        view
        returns (uint256);
}