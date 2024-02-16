// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./upgradability/UUPSProxiableAndPausable.sol";
import "./interfaces/IERC3156FlashLender.sol";
import "./interfaces/IERC3156FlashBorrower.sol";
import "./interfaces/IBSControl.sol";
import "./interfaces/IBSVault.sol";
import "./compound/Exponential.sol";
import "./compound/InterestRateModel.sol";


contract BSVault is IBSVault, IERC3156FlashLender {
    using SafeERC20 for IERC20;

    bytes32 public constant FLASHLOAN_CALLBACK_SUCCESS = keccak256("ERC3156FlashBorrower.onFlashLoan");
    uint256 private constant SCALE = 1e18;

    // default 0.05%
    IBSControl public control;
    uint256 public flashLoanRate;

    mapping(IERC20 => mapping(address => uint256)) public override balanceOf;
    mapping(IERC20 => uint256) public totals;

    function initialize(
    ) external {
        // 0.05% 
        flashLoanRate = 50000000000000000;
    }

    function deposit(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) public override {
        // Checks
        require(_to != address(0), "VAULT: INVALID_TO_ADDRESS");
        // transfer appropriate amount of underlying from _from to vault
        _token.safeTransferFrom(_from, address(this), _amount);
        balanceOf[_token][_to] = balanceOf[_token][_to] + _amount;
        totals[_token] = totals[_token] + _amount;
        emit Deposit(_token, _from, _to, _amount);
    }

    function withdraw(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) public override {
        // Checks
        require(_to != address(0), "VAULT: INVALID_TO_ADDRESS");
        _token.safeTransfer(_to, _amount);

        balanceOf[_token][_from] = balanceOf[_token][_from] - _amount;
        totals[_token] = totals[_token] - _amount;
        emit Withdraw(_token, _from, _to, _amount);
    }

    function transfer(
        IERC20 _token,
        address _from,
        address _to,
        uint256 _amount
    ) public override {
        // Checks
        require(_to != address(0), "VAULT: INVALID_TO_ADDRESS");

        // Effects
        balanceOf[_token][_from] = balanceOf[_token][_from] - _amount;
        balanceOf[_token][_to] = balanceOf[_token][_to] + _amount;

        emit Transfer(_token, _from, _to, _amount);
    }
    
    function maxFlashLoan(
        address _token
    ) public override view returns (uint256) {
        return totals[IERC20(_token)];
    }

    function flashFee(address /*_token*/, uint256 _amount) public view override returns(uint256) {
        return  _amount * flashLoanRate / 1e18;
    }

    function flashLoan(
        IERC3156FlashBorrower _receiver,
        address _token,
        uint256 _amount,
        bytes calldata _data
    ) public override returns (bool) {
        // @TOODO check we have enough balance

        IERC20 token = IERC20(_token);
        
        uint256 tokenBalBefore = token.balanceOf(address(this));
        token.safeTransfer(address(_receiver), _amount);

        uint256 fees = flashFee(_token, _amount);

        require(
            _receiver.onFlashLoan(msg.sender, _token, _amount, fees, _data) == FLASHLOAN_CALLBACK_SUCCESS,
            "IERC3156: Callback failed"
        );

        // receive loans and fees
        token.safeTransferFrom(address(_receiver), address(this), _amount + fees);

        uint256 receivedFees = token.balanceOf(address(this)) - tokenBalBefore;
        require(receivedFees >= fees, "not enough fees");

        emit FlashLoan(
            msg.sender,
            token,
            _amount,
            fees,
            address(_receiver)
        );
        return true;
    }

    function updateFlashloanRate() external {

    }

    function shareValueOf(address _token) public pure returns(uint256) {
        return 0;
    }
}
