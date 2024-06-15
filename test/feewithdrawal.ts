import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber, Event, Signer } from "ethers";

import { runTestSuite, TestVars, defaultLendingPairInitVars, setupAndInitLendingPair } from "./lib";
import { deployUUPSProxy, deployContract, deployFeeWithdrawl, deployLendingPair } from "../helpers/contracts";
import { ContractId } from "../helpers/types";
import {
    FeeWithdrawal as FeeWithdrawalContract,
    LendingPair as LendingPairContract,
} from "../types";


runTestSuite("FeeWithdrawal", async (vars: TestVars) => {
    it('proxiableUUID & updateCode', async () => {
        const {
            FeeWithdrawal,
            accounts: [admin, blackSmithTeam]
        } = vars;

        const uups = await deployUUPSProxy();
        await uups.initializeProxy(FeeWithdrawal.address);
        const proxiedFeeWithdrawl = await ethers.getContractAt(
            ContractId.FeeWithdrawal,
            uups.address
        );
        await proxiedFeeWithdrawl.initialize(admin.address);

        // check current impl
        expect(await proxiedFeeWithdrawl.getCodeAddress()).to.eq(FeeWithdrawal.address)

        // check proxiable UUID string
        let msgBytes = ethers.utils.toUtf8Bytes(
            "org.edge.contracts.edgehelper.feewithdrawal"
        )
        const hash = ethers.utils.keccak256(msgBytes);
        expect(
            (await proxiedFeeWithdrawl.proxiableUUID()).toString()
        ).to.eq(hash.toString());

        // check updateCode
        const newFeeWithdrawl = await deployContract<FeeWithdrawalContract>(ContractId.FeeWithdrawal, [
            admin.address,
            await FeeWithdrawal.vault(),
            await FeeWithdrawal.receiver(),
            await FeeWithdrawal.edgeToken(),
            await FeeWithdrawal.WETH(),
            await FeeWithdrawal.uniswapRouter()
        ])

        await proxiedFeeWithdrawl.updateCode(newFeeWithdrawl.address)
        expect(await proxiedFeeWithdrawl.getCodeAddress()).to.eq(newFeeWithdrawl.address);
    })

    describe('senariose', async () => {
        let LendingPair: LendingPairContract;
        let FeeWithdrawal: FeeWithdrawalContract;

        beforeEach(async () => {
            const { Vault, BorrowAsset, BorrowAssetMockPriceOracle, PriceOracleAggregator, accounts: [ admin, james, frank ] } = vars
            // deploy new FeeWithdrawl
            FeeWithdrawal = await deployFeeWithdrawl(
                vars.blackSmithTeam.address,
                await vars.FeeWithdrawal.vault(),
                await vars.FeeWithdrawal.receiver(),
                BorrowAsset.address, // edgeToken
                await vars.FeeWithdrawal.WETH(),
                await vars.FeeWithdrawal.uniswapRouter(),
            );

            // setup new LendingPair
            LendingPair = await deployLendingPair( Vault.address, PriceOracleAggregator.address, FeeWithdrawal.address, BigNumber.from(10).pow(18));

            // do some borrow, deposit actions
            vars.LendingPair = LendingPair;
            const helper = await setupAndInitLendingPair( vars, { ...defaultLendingPairInitVars, account: admin, accountsToApproveInVault: [ frank, admin, james, ] } )

            await helper.depositCollateralAsset(james, 1000)
            await helper.depositBorrowAsset(frank, 1000)
            await LendingPair.connect(james.signer).borrow(500, james.address);  // James borrow 500,  lendingPairBalanceInVault = 500
            await (await BorrowAssetMockPriceOracle.setPrice(BigNumber.from(3000).pow(8))).wait()  // change price && set oracle price to half
            await helper.depositInVault(admin.signer, BorrowAsset, 800)         // liquidator deposits in vault, adminBalanceInVault = 800,
            await (await LendingPair.liquidate(james.address)).wait() // james now has zero debt 
        })

        it('withdrawFeesAndSwap', async () => {
            const { Vault } = vars

            const withdrawAmount = (await LendingPair.totalReserves() ).toNumber(); // amount to withdraw
            const beforeLendingPairVaultBalance = (await Vault.balanceOf(await LendingPair.asset(), LendingPair.address) ).toNumber(); // LendingPair vault balance before withdraw
            
            // do withdraw
            const tx = await ( await FeeWithdrawal.withdrawFeesAndSwap(
                [ LendingPair.address ],
                [ 0 ],
                true
            )).wait();

            expect((await Vault.balanceOf(await LendingPair.asset(), LendingPair.address)).toNumber() ).to.eq(beforeLendingPairVaultBalance - withdrawAmount);

            const withdrawFeesValue = tx.events?.find((e: any) => e.event === 'LogWithdrawFees');
            const totalWrapReceived = (withdrawFeesValue!.args!.totalEdgeReceived).toNumber();
            console.log('===>totalWrapReceived',totalWrapReceived)
        })

        it ('transferToReceiver', async () => {
            const { EdgeToken } = vars

            const beforeFeeWithdrawlWrapBalance = ( await EdgeToken.balanceOf(await FeeWithdrawal.receiver()) ).toNumber(); // FeeWithdrawal's edgeToken balance before withdraw
            await FeeWithdrawal.withdrawFeesAndSwap([LendingPair.address], [0] ,false);
            const feeAmount = ( await EdgeToken.balanceOf(FeeWithdrawal.address) ).toNumber(); // withthraw fee amount
            await FeeWithdrawal.transferToReceiver();

            expect( (await EdgeToken.balanceOf(await FeeWithdrawal.receiver())).toNumber() ).to.eq(beforeFeeWithdrawlWrapBalance + feeAmount) // receiver edgeToken balance should be increased
            expect( (await EdgeToken.balanceOf(FeeWithdrawal.address)).toNumber() ).to.eq(0) // after withdraw Fee, FeeWithdrawFee balance should be zero
        })

        it('rescueFunds', async () => {
            const { EdgeToken, accounts: [ admin ] } = vars

            // permission test
            await expect(FeeWithdrawal.rescueFunds(EdgeToken.address)).to.be.revertedWith('ONLY_ADMIN')

            // logic test
            const originalAdminEdgeBalance = (await EdgeToken.balanceOf(admin.address)).toNumber(); // FeeWithdrawal's edgeToken balance before withdraw
            await FeeWithdrawal.withdrawFeesAndSwap([LendingPair.address], [0] ,false);
            const feeWithdrawalAmount = ( await EdgeToken.balanceOf(FeeWithdrawal.address) ).toNumber(); // withthraw fee amount
            await FeeWithdrawal.connect(vars.blackSmithTeam.signer).rescueFunds(EdgeToken.address);

            expect((await EdgeToken.balanceOf(vars.blackSmithTeam.address)).toNumber()).to.eq(originalAdminEdgeBalance + feeWithdrawalAmount) // after rescueFunds, admin balance should be increased
            expect((await EdgeToken.balanceOf(FeeWithdrawal.address)).toNumber()).to.eq(0) // after rescueFunds, FeeWithdrawFee balance should be zero

        })
    })
})
