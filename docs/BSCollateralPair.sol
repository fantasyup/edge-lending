// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./interfaces/IBSVault.sol";
import "./interfaces/IBSControl.sol";
import "./interfaces/IBSCollateralPair.sol";


contract BSCollateralPair is IBSCollateralPair {
    using SafeERC20 for IERC20;

    IERC20 public asset;
    IBSVault public vault;

    IBSControl public control;

    mapping(address => uint256) private collateralBalance;

    /**
     * @dev Throws if called by any account other than a edge control
     */
    modifier onlyControl() {
        require(msg.sender == address(control));
        _;
    }

    /**
    @dev Throws if a function is called before the time wizard allows it
    **/
    modifier angryWizard() {
        // require(now > timeWizard);
        _;
    }

    function initialize(
        // uint256 _timelock,
        IERC20 _asset,
        IBSControl _control,
        IBSVault _vault
    ) public {
        asset = _asset;
        control = _control;
        vault = _vault;
    }

    /**
    @notice deposit allows a user to deposit underlying collateral from vault
    @param _amount is the amount of asset being collateralized
    **/
    function deposit(uint256 _amount) public {
        require(vault.balanceOf(asset, msg.sender) >= _amount, "Not enough balance");

        vault.transfer(asset, msg.sender, address(this), _amount);

        collateralBalance[msg.sender] = collateralBalance[msg.sender] + _amount;

        emit Deposit(msg.sender, _amount);
    }

    /**
    @notice withdraw allows the user to trade in his EdgeLP tokens for hiss underlying LP token collateral
    @param _amount is the amount of LP tokens he wishes to withdraw
    **/
    function withdraw(uint256 _amount) public {
        uint256 amount;

        uint256 maxAmount = control.getMaxWithdrawAllowed(
            msg.sender,
            address(asset)
        );

        if (_amount == 0) {
            amount = maxAmount;
        } else {
            amount = _amount;
        }

        // require the availible value of the LP locked in this contract the user has
        // is greater than or equal to the amount being withdrawn
        require(maxAmount >= amount, "Trying to withdraw too much");
        // require the user has locked up enough collateral to withdraw this amount
        require(
            collateralBalance[msg.sender] >= amount,
            "you are trying to withdraw more collateral than you have locked"
        );

        // subtract withdrawn amount from amount stored
        collateralBalance[msg.sender] = collateralBalance[msg.sender] - amount;
        // transfer them their token
        vault.transfer(asset, address(this), msg.sender, _amount);

        emit Withdraw(msg.sender, amount);
    }

    /**
    @notice getAssetAdd allows for easy retrieval of a EdgeVaults LP token Adress
    **/
    function getCollateralAddress() public view returns (address) {
        return address(asset);
    }

    /**
    @notice collateralOfAccount is a view function to retreive an accounts collateralized LP amount
    @param _account is the address of the account being looked up
    **/
    function collateralOfAccount(address _account)
        public
        view
        returns (uint256)
    {
        return collateralBalance[_account];
    }

    /**
    @notice _liquidate is a function to liquidate a user
    @param _account is the address of the account being liquidated
    @param _liquidator is the address of the account doing the liquidating who receives the liquidated LP's
    @dev this function uses the onlyControl modifier meaning that only the BlackSmith Control contract can call it
    **/
    function _liquidate(address _account, address _liquidator, uint256 _amount)
        public
        onlyControl
        angryWizard
    {
        require(collateralBalance[_account] >= _amount, "invalid amount to liquidate");
        // transfer the LP tokens to the liquidator
        vault.transfer(asset, _account, _liquidator, _amount);
        // reset the borrowers collateral tracker
        collateralBalance[_account] = collateralBalance[_account] - _amount;

        emit Liquidate(
            address(this),
            address(asset),
            address(_account),
            _amount,
            _liquidator
        );
    }

    function valueOfAccountCollateral(address _account)
        external
        view
        returns (uint256)
    {
        uint256 collateralPrice = control.viewPriceOfCollateral(
            address(asset)
        );
        uint256 collateralValue = collateralBalance[_account] * collateralPrice;
        return collateralValue;
    }
}