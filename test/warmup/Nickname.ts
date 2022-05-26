import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";

let accounts: Signer[];
let eoa: Signer;
let contract: Contract;

before(async () => {
  accounts = await ethers.getSigners();
  eoa = accounts[0];
  const factory = await ethers.getContractFactory("CaptureTheEther");
  contract = factory.attach("0x71c46Ed333C35e4E6c62D32dc7C8F00D125b4fee");
});

it("solves the challenge", async function () {
  const nickname = ethers.utils.formatBytes32String('crypto-martian');
  const tx = await contract.setNickname(nickname);
  const txHash = tx && tx.hash;
  expect(txHash).to.not.be.undefined;
});
