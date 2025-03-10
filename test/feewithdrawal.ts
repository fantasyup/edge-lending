import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";

import { runTestSuite, TestVars, defaultLendingPairInitVars, setupAndInitLendingPair } from "./lib";
import { deployUUPSProxy, deployContract, deployFeeWithdrawal, deployLendingPair, deployMockUniswapV2Router02 } from "../helpers/contracts";
import { ContractId } from "../helpers/types";
import {
    FeeWithdrawal as FeeWithdrawalContract,
    LendingPair as LendingPairContract,
} from "../types";


const amountToDeposit = 1000;

runTestSuite("FeeWithdrawal", async (vars: TestVars) => {
    it('proxiableUUID & updateCode', async () => {
        const {
            FeeWithdrawal,
            accounts: [admin, blackSmithTeam]
        } = vars;

        const uups = await deployUUPSProxy();
        await uups.initializeProxy(FeeWithdrawal.address);
        const proxiedFeeWithdrawal = await ethers.getContractAt(
            ContractId.FeeWithdrawal,
            uups.address
        );
        await proxiedFeeWithdrawal.initialize(
            admin.address,
            process.env.ROUTER || '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D' // router
        );

        // check current impl
        expect(await proxiedFeeWithdrawal.getCodeAddress()).to.eq(FeeWithdrawal.address)

        // check proxiable UUID string
        let msgBytes = ethers.utils.toUtf8Bytes(
            "org.edge.contracts.edgehelper.feewithdrawal"
        )
        const hash = ethers.utils.keccak256(msgBytes);
        expect(
            (await proxiedFeeWithdrawal.proxiableUUID()).toString()
        ).to.eq(hash.toString());

        // check updateCode
        const newFeeWithdrawl = await deployContract<FeeWithdrawalContract>(ContractId.FeeWithdrawal, [
            await FeeWithdrawal.vault(),
            await FeeWithdrawal.receiver(),
            await FeeWithdrawal.edgeToken(),
            await FeeWithdrawal.WETH()
        ])

        await proxiedFeeWithdrawal.updateCode(newFeeWithdrawl.address)
        expect(await proxiedFeeWithdrawal.getCodeAddress()).to.eq(newFeeWithdrawl.address);
    })

    describe('scenarios', async () => {
        let LendingPair: LendingPairContract;
        let FeeWithdrawal: FeeWithdrawalContract;

        beforeEach(async () => {
            const {
                Vault,
                BorrowAsset,
                BorrowAssetMockPriceOracle,
                PriceOracleAggregator,
                EdgeToken,
                accounts: [ admin, james, frank ]
            } = vars

            // deploy MockUniswapV2Router 
            const mockUniswapV2Router = await deployMockUniswapV2Router02();
            await EdgeToken.mint(mockUniswapV2Router.address, amountToDeposit);

            // deploy new FeeWithdrawl
            FeeWithdrawal = await deployFeeWithdrawal(
                await vars.FeeWithdrawal.vault(),
                await vars.FeeWithdrawal.receiver(),
                EdgeToken.address,
                await vars.FeeWithdrawal.WETH(),
            );

            // initialize
            await FeeWithdrawal.initialize(
                admin.address,
                mockUniswapV2Router.address,
            );

            // setup new LendingPair
            LendingPair = await deployLendingPair( Vault.address, PriceOracleAggregator.address, FeeWithdrawal.address, BigNumber.from(10).pow(18));

            // do some borrow, deposit actions
            vars.LendingPair = LendingPair;
            const helper = await setupAndInitLendingPair( vars, { ...defaultLendingPairInitVars, account: admin, accountsToApproveInVault: [ frank, admin, james, ] } )
            await helper.depositCollateralAsset(james, amountToDeposit)
            await helper.depositBorrowAsset(frank, amountToDeposit)
            await LendingPair.connect(james.signer).borrow(500, james.address);  // James borrow 500,  lendingPairBalanceInVault = 500
            await (await BorrowAssetMockPriceOracle.setPrice(BigNumber.from(3000).pow(8))).wait()  // change price && set oracle price to half
            await helper.depositInVault(admin.signer, BorrowAsset, 800)         // liquidator deposits in vault, adminBalanceInVault = 800,
            await (await LendingPair.liquidate(james.address)).wait() // james now has zero debt 
        })

        it('withdrawFees', async () => {
            const { Vault } = vars

            const withdrawAmount = (await LendingPair.totalReserves() ).toNumber(); // amount to withdraw
            const beforeLendingPairVaultBalance = (await Vault.balanceOf(await LendingPair.asset(), LendingPair.address) ).toNumber(); // LendingPair vault balance before withdraw
            
            // do withdraw
            await ( await FeeWithdrawal.withdrawFees([ LendingPair.address ])).wait();
            expect((await Vault.balanceOf(await LendingPair.asset(), LendingPair.address)).toNumber() ).to.eq(beforeLendingPairVaultBalance - withdrawAmount);
        })

        it('swapFees', async () => {
            const { EdgeToken, BorrowAsset, accounts: [admin, frank] } = vars

            // do withdraw
            const withdrawTx = await ( await FeeWithdrawal.withdrawFees([ LendingPair.address ])).wait();
            const withdrawFeesValue = withdrawTx.events?.find((e: any) => e.event === 'LogWithdrawFees');
            const totalWithdrawnFees = (withdrawFeesValue!.args!.totalWithdrawnFees).toNumber();

            await expect(
                FeeWithdrawal.connect(frank.signer).swapFees( [ await LendingPair.asset() ], [ 0 ])
            ).to.be.revertedWith('ONLY_ADMIN')

            const swapTx = await ( await FeeWithdrawal.swapFees( [ await LendingPair.asset() ], [ 0 ])).wait();
            const swapFessValue = swapTx.events?.find((e: any) => e.event === 'LogWithSwap');
            const totalEdgeReceived = (swapFessValue!.args!.totalEdgeReceived).toNumber();

            expect(await BorrowAsset.balanceOf(FeeWithdrawal.address)).to.equal(0);
            expect(await EdgeToken.balanceOf(FeeWithdrawal.address)).to.equal(totalWithdrawnFees);
            expect(totalWithdrawnFees).to.equal(totalEdgeReceived);
        })

        it ('transferToReceiver', async () => {
            const { EdgeToken } = vars

            const beforeFeeWithdrawlWrapBalance = ( await EdgeToken.balanceOf(await FeeWithdrawal.receiver()) ).toNumber(); // FeeWithdrawal's edgeToken balance before withdraw
            await FeeWithdrawal.withdrawFees([LendingPair.address]);
            const feeAmount = ( await EdgeToken.balanceOf(FeeWithdrawal.address) ).toNumber(); // withthraw fee amount
            await FeeWithdrawal.transferToReceiver();

            expect( (await EdgeToken.balanceOf(await FeeWithdrawal.receiver())).toNumber() ).to.eq(beforeFeeWithdrawlWrapBalance + feeAmount) // receiver edgeToken balance should be increased
            expect( (await EdgeToken.balanceOf(FeeWithdrawal.address)).toNumber() ).to.eq(0) // after withdraw Fee, FeeWithdrawFee balance should be zero
        })

        it('rescueFunds', async () => {
            const { EdgeToken, accounts: [ admin, frank ] } = vars

            // permission test
            await expect(FeeWithdrawal.connect(frank.signer).rescueFunds(EdgeToken.address)).to.be.revertedWith('ONLY_ADMIN')

            // logic test
            const originalAdminEdgeBalance = (await EdgeToken.balanceOf(admin.address)).toNumber(); // FeeWithdrawal's edgeToken balance before withdraw
            await FeeWithdrawal.withdrawFees([LendingPair.address]);
            const feeWithdrawalAmount = ( await EdgeToken.balanceOf(FeeWithdrawal.address) ).toNumber(); // withthraw fee amount
            await FeeWithdrawal.rescueFunds(EdgeToken.address);

            expect((await EdgeToken.balanceOf(admin.address)).toNumber()).to.eq(originalAdminEdgeBalance + feeWithdrawalAmount) // after rescueFunds, admin balance should be increased
            expect((await EdgeToken.balanceOf(FeeWithdrawal.address)).toNumber()).to.eq(0) // after rescueFunds, FeeWithdrawFee balance should be zero
        })
    })
})
