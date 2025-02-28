// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "../interfaces/IOracle.sol";

contract MockPriceOracle is IOracle {
    int256 lastestAnswer;

    constructor(int256 _price) {
        lastestAnswer = _price;
    }

    function setPrice(int256 _newPrice) external {
        lastestAnswer = _newPrice;
    }

    function latestAnswer() external view override returns (int256) {
        return lastestAnswer;
    }

    function viewPriceInUSD() external view returns (int256) {
        return lastestAnswer;
    }
}
