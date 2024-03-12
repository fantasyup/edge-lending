// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IBSLendingPair.sol";

interface IBSWrapperToken is IERC20 {
     function initialize(
        IBSLendingPair _owner,
        address _underlying,
        string memory _tokenName,
        string memory _tokenSymbol
    ) external;
    function burn(address _from, uint256 _amount) external;
    function mint(address _to, uint256 _amount) external;
    function owner() external view returns(IBSLendingPair);
}
