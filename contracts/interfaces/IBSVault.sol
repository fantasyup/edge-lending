
// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IERC3156FlashLender.sol";

interface IBSVault is IERC3156FlashLender {

    // ************** //
    // *** EVENTS *** //
    // ************** //

    /// @notice Emitted on deposit
    /// @param token being deposited
    /// @param from address making the depsoit
    /// @param to address to credit the tokens being deposited
    /// @param amount being deposited
    /// @param shares the represent the amount deposited in the vault
    event Deposit(
        IERC20 indexed token,
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 shares
    );

    /// @notice Emitted on withdraw
    /// @param token being deposited
    /// @param from address making the depsoit
    /// @param to address to credit the tokens being withdrawn
    /// @param amount Amount of underlying being withdrawn
    /// @param shares the represent the amount withdraw from the vault
    event Withdraw(
        IERC20 indexed token,
        address indexed from,
        address indexed to,
        uint256 shares,
        uint256 amount
    );

    event Transfer(
        IERC20 indexed token,
        address indexed from,
        address indexed to,
        uint256 amount
    );

    event FlashLoan(
        address indexed borrower,
        IERC20 indexed token,
        uint256 amount,
        uint256 feeAmount,
        address indexed receiver
    );

    event TransferControl(
        address _newTeam
    );

    event UpdateFlashLoanRate(
        uint256 newRate
    );

    event Approval(address indexed owner, address indexed spender, uint256 value);

    // ************** //
    // *** FUNCTIONS *** //
    // ************** //

    function deposit(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) external returns(uint256);

    function withdraw(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) external returns(uint256);

    function balanceOf(
        IERC20,
        address
    ) external returns(uint256);

    function transfer(
        IERC20 _token,
        address _to,
        uint256 _shares
    ) external;

    function send(
        IERC20 _token,
        address _to,
        uint256 _shares
    ) external;

    function toShare(
        IERC20 token,
        uint256 amount
    ) external view returns (uint256);

    function toUnderlying(
        IERC20 token,
        uint256 share
    ) external view returns (uint256);
}