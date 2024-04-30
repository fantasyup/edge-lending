// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../interfaces/IBSLendingPair.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";

contract FeeWithdrawal is Ownable {
    using SafeERC20 for IERC20;

    event LogUpdateAdmin(address newAdmin, uint256 timestamp);
    event LogRescueFunds(address token, address amount, uint256 timestamp);
    event LogTransferToReceiver(address receiver, uint256 amount, uint256 timestamp);

    uint256 constant public VERSION = 0x1;
    
    /// @notice The address to transfer the swapped EDGE to 
    address public immutable receiver;

    /// @notice vault address
    IBSVault public immutable vault;

    /// @notice the token's address that is swapped against any other fee token
    address public immutable edgeToken;

    /// @notice WETH address
    address public immutable WETH;

    /// @notice The admin
    address public admin;

    /// @notice IUniswapRouter from Sushiswap used to swap erc20 fee token into tokenAddress
    IUniswapV2Router02 public uniswapRouter;

    modifier onlyAdmin() {
        require(msg.sender == admin, "ONLY_ADMIN");
        _;
    }

    modifier onlyEOA() {
        // Try to make flash-loan exploit harder to do by only allowing externally-owned addresses.
        require(msg.sender == tx.origin, "MUST_BE_EOA");
        _;
    }

    /**
     * @notice Create a new FeeWithdrawal contract
     * @param _edgeToken address of edge token
     * @param _wethAddress WETH address
     * @param _uniswapV2Router Uniswap v2 router address
     */
    constructor(
        address _edgeToken,
        address _wethAddress,
        address _uniswapV2Router
    ) {
        require(
            _edgeToken != address(0),
            "FeeWithdrawal: invalid token address"
        );
        
        require(
            _wethAddress != address(0),
            "FeeWithdrawal: invalid weth address"
        );
        require(
            _uniswapV2Router != address(0),
            "FeeWithdrawal: invalid router address"
        );

        edgeToken = _edgeToken;
        WETH = _wethAddress;
        uniswapRouter = IUniswapV2Router02(_uniswapV2Router);

        admin = msg.sender;
    }

    /// @dev to avoid gas costs we are gonna send the underlying pair's asset as param & compute the amount off-chain
    /// @param 
    function withdrawFeesAndSwap(
        IBSLendingPair[] calldata _lendingPairs,
        bool _convert
    ) external onlyEOA {
        require(
            _lendingPairs.length > 0,
            "lendingPairs.length"
        );
        
        for (uint256 i = 0; i < _lendingPairs.length; i++) {
            IBSLendingPair pair = _lendingPairs[i];
            
            IERC20 asset = pair.asset();
            uint256 amountToWithdraw = pair.totalReserves();
            // withdraw to vault
            pair.withdrawFees(amountToWithdraw);
            // withdraw underlying
            vault.withdraw(asset, address(this), address(this), amountToWithdraw);
            
            uint amountToTrade = asset.balanceOf(address(this));
            if (_convert && address(asset) != edgeToken) {
                _convertToEdge(address(asset), amountToTrade, 2 ** 256);
            }
        }
    }

    function transferToReceiver() external {
        uint256 amount = IERC20(edgeToken).balanceOf(address(this));
        IERC20(edgeToken).transfer(receiver, amount);

        emit LogTransferToReceiver(receiver, amount, block.timestamp);
    }
    
    function updateAdmin(address _newAdmin) external onlyAdmin {
        require(_newAdmin != address(0), "INVALID_ADMIN");
        admin = _newAdmin;
        emit LogUpdateAdmin(_newAdmin, block.timestamp);
    }

    function rescueFunds(address _token) external onlyAdmin {
        uint256 balance = IERC20(_token).balanceOf(address(this));
        IERC20(_token).safeTransfer(admin, balance);
        emit LogRescueFunds(_token, balance, block.timestamp);
    }

    function getPath(address from) internal returns (address[] memory path) {
        if(from == WETH) {
            path = new address[](2);
            path[0] = WETH;
            path[1] = edgeToken;
        } else {
            path = new address[](3);
            path[0] = from;
            path[1] = WETH;
            path[2] = edgeToken;
        }
    }

    function _convertToEdge(
        address from,
        uint256 amount,
        uint256 deadline
    ) private returns (uint256) {
        address[] memory path = getPath(from);
        
        IERC20(from).safeIncreaseAllowance(address(uniswapRouter), amount);

        uint256[] memory amounts =
            uniswapRouter.swapExactTokensForTokens(
                amount,
                uint256(0),
                path,
                address(this),
                deadline
            );

        return amounts[amounts.length - 1];
    }

}
