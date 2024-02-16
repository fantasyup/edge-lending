
// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IBSVault {
    
    // ************** //
    // *** EVENTS *** //
    // ************** //

    event Deposit(IERC20 indexed token, address indexed from, address indexed to, uint256 amount);

    event Withdraw(IERC20 indexed token, address indexed from, address indexed to, uint256 amount);

    event Transfer(IERC20 indexed token, address indexed from, address indexed to, uint256 amount);

    event FlashLoan(address indexed borrower, IERC20 indexed token, uint256 amount, uint256 feeAmount, address indexed receiver);

    function balanceOf(
        IERC20,
        address
    ) external returns(uint256);

    function transfer(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) external;

    function deposit(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) external;

    function withdraw(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) external;
}