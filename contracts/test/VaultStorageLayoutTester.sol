// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "../Vault.sol";
import "hardhat/console.sol";

contract VaultStorageLayoutTester is Vault {

    function validateStorageLayout() external pure {
        uint256 slot;
        uint256 offset;

        assembly { slot:= flashLoanRate.slot offset := flashLoanRate.offset }
        require (slot == 1 && offset == 0, "flashloan rate has changed location");

        assembly { slot:= blackSmithTeam.slot offset := blackSmithTeam.offset }
        require (slot == 2 && offset == 0, "blacksmith team has changed location");

        assembly { slot:= balanceOf.slot offset := balanceOf.offset }
        require (slot == 3 && offset == 0, "balanceOf rate has changed location");

        assembly { slot:= totals.slot offset := totals.offset }
        require (slot == 4 && offset == 0, "totals has changed location");

        assembly { slot:= userApprovedContracts.slot offset := userApprovedContracts.offset }
        require (slot == 5 && offset == 0, "userApprovedContracts rate has changed location");
    }
}
