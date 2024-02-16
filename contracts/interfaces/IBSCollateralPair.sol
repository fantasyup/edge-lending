// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IBSCollateralPair {
    event Deposit(address indexed _account, uint256 _amount);
    event Withdraw(address _account, uint256 _amount);
    event Liquidate(
        address indexed pair,
        address indexed asset,
        address indexed user,
        // uint256 amountOfDebtToCover,
        uint256 liquidatedCollateralAmount,
        address liquidator
    );

    function asset() external view returns (IERC20);
    function collateralOfAccount(address _account)
        external
        view
        returns (uint256);
}