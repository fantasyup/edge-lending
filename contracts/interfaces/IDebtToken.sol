// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "./IBSWrapperToken.sol";

interface IDebtToken is IBSWrapperToken {
    function increaseTotalDebt(uint256 _amount) external;

    function principal(address _account) external view returns (uint256);
}
