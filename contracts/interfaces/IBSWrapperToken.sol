// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IBSWrapperToken is IERC20 {
     function initialize(
        address _underlying,
        string memory _tokenName,
        string memory _tokenSymbol
    ) external;
    function burn(address _from, uint256 _amount) external;
    function mint(address _to, uint256 _amount) external;
}
