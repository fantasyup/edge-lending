// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "./interfaces/IBSLendingVault.sol";

contract BSControl {

    // underlying => vault
    uint256 public totalLendingPairs;

    // vaults
    address[] public vaults;

    // pairIds
    bytes32[] public pairIds;

    // mapping underlying => exists
    mapping (address => bool) vaults;

    // pairId => vaults
    mapping(bytes32 => address[]) public lendingPairs;

    uint256 public flashLoanRate;

    event LendingPairAdded(
        address indexed creator,
        address indexed asset0,
        address indexed asset1,
        bytes32 pairId,
        uint256 totalLendingPairs,
        uint256 created
    );

    event LendingVault(
        address indexed underlying,
        address indexed vault,
        uint256 created
    );

    event VaultAdded(
        address indexed vault,
        address indexed underlying
    );

    event FlashLoanRateUpdate(
        uint256 newRate
    );

    modifier vaultExists(address _vault) {
        require(vaults[_vault] == true, "VAULT_DOES_NOT_EXIST");
        _;
    }

    modifier pairExists(bytes32 _pairId) {
        require(lendingPairs[_pairId].length != 0, "PAIR_DOES_NOT_EXIST");
        _;
    }

    modifier vaultExistsForPair(bytes32 _pairId, address _vault) {
        require(
            lendingPairs[_pairId][0] == _vault || lendPairs[_pairId][1] == _vault, 
            "VAULT_DOES_NOT_EXIST_FOR_PAIR"
        );
        _;
    }

    function initialize(
       uint256 _flashloanRate
    ) external {

    }

    function updateFlashLoanRate(
        uint256 _newFlashloanRate
    ) external onlyOwner {
        flashLoanRate = _newFlashloanRate;

        emit FlashLoanRateUpdate(
            _newFlashloanRate
        );
    }

    function addVault(
        IBSLendingVault _vault
    ) external {
        // vault has not been added
        require(assetLendingVaults[address(_vault)] == address(0), "vault exists");

        // do some assertions
        address underlying = address(_vault.underlying());
        address control  = address(_vault.bsControl());

        require(control == address(this), "invalid control");
        require(underlying != address(0), "invalid underlying");
        
        // add vault to
        vaults[address(_vault)] = true;
        vaults.push(address(_vault));

        emit VaultAdded(
            address(vault),
            underlying
        );
    }

    function createLendingPair(
        address _vault0,
        address _vault1,
        bool _singleSided
    ) external {

        // retreive lending vaults
        address asset0Vault = assetLendingVaults[_asset0];
        address asset1Vault = assetLendingVaults[_asset1];

        require(
             asset0Vault != address(0),
            'ASSET0_LENDING_VAULT_DOES_NOT_EXIST'
        );
        
        require(
            asset1Vault != address(0),
            'ASSET1_LENDING_VAULT_DOES_NOT_EXIST'
        );

        bytes32 pairId = keccak256(
            abi.encode(
                _asset0,
                _asset1,
                totalLendingPairs
            )
        );
        
        // ensure the lending pair hasn't been created
        require(lendingPairs[pairId].length == 0, "PAIR_EXISTS");

        address[] memory newPairs = new address[](2);
        newPairs[0] = _asset0;
        newPairs[1] = _asset1;

        // store the pairId in the db
        lendingPairs[pairId] = newPairs;
        pairIds.push(pairId);

        // make single sided if the
        // if(!_singleSided) lendingPairs[_asset1][_asset0] = pairId;
        // totalLendingPairs = totalLendingPairs + 1;

        // @TODO add pairId to both lendingVault
        emit LendingPairAdded(
            msg.sender,
            _asset0,
            _asset1, 
            pairId,
            totalLendingPairs, 
            block.timestamp
        );
    }

    // function to deposit for a pair lending vault
    function deposit(
        bytes32 _pairId,
        IBSLendingVault _vaultToDeposit,
        address _tokenReceipeint,
        uint256 _amount
    ) external pairExists(_pairId) vaultExistsForPair(_pairId, address(_vaultToDeposit)) {
        //@TODO is a user is not allowed to deposit for asset they borrowed in pair
        _vaultToDeposit._deposit(
            _pairId, 
            msg.sender,
            _tokenReceipeint, 
            _amount
        );
    }

    function borrow(
        bytes32 _pairId,
        IBSLendingVault _vaultToBorrowFrom,
        address _tokenReceipeint,
        uint256 _amount
    ) external pairExists(_pairId) vaultExistsForPair(_pairId, address(_vaultToBorrowFrom)) {
        // @TODO a user is not allowed to borrow asset they deposited in pair
    }


    function repay(

    ) {

    }

}

