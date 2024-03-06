import { ethers, waffle } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";

import { 
    deployMockToken,
    deployPriceOracleAggregator
} from "../helpers/contracts";
import { MockToken, PriceOracleAggregator as BPriceOracleAggregator } from "../types";
// list of accounts
let accounts: Signer[];

let PriceOracleAggregator: BPriceOracleAggregator
let admin: string; // account used in deploying
let bob: string;
let frank: string;
let asset: MockToken

describe('PriceOracleAggregator', function() {

    before(async function() {
        ([
            admin,
            bob,
            frank,
          ] = await Promise.all(accounts.slice(0, 5).map(x => x.getAddress())))
      
        PriceOracleAggregator = await deployPriceOracleAggregator(admin)
        asset = await deployMockToken()
    })

    it("correct team address", async function() {
        expect(await PriceOracleAggregator.blackSmithTeam()).to.eq(admin)
    })

    it("updateOracleForAsset - fails for non blacksmithteam", async function(){
        await expect(
            PriceOracleAggregator.connect(await ethers.getSigner(frank)).updateOracleForAsset(
                asset.address,
                bob
            )
        ).to.revertedWith('ONLY_TEAM')
    })

    it("updateOracleForAsset", async function() {
        await expect(
            PriceOracleAggregator.updateOracleForAsset(
                asset.address,
                bob
            )
        ).to.emit(PriceOracleAggregator, 'UpdateOracle')
        .withArgs(asset.address, bob)
    
    
        
    
    
    })



})