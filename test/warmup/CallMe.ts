import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";

let accounts: Signer[];
let eoa: Signer;
let contract: Contract;

before(async () => {
  accounts = await ethers.getSigners();
  eoa = accounts[0];
  const factory = await ethers.getContractFactory("CallMeChallenge");
  contract = factory.attach("0x8b047922b99379370DaC1eFb33c39609b2E90c54");
});

it("solves the challenge", async function () {
  const tx = await contract.callme();
  const txHash = tx.hash;
  expect(txHash).to.not.be.undefined;
});
