import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";
import { formatEtherscanTx } from "../utils/format";

let accounts: Signer[];
let eoa: Signer;
let contract: Contract;

before(async () => {
  accounts = await ethers.getSigners();
  eoa = accounts[0];
  const factory = await ethers.getContractFactory("GuessTheSecretNumberChallenge");
  contract = factory.attach("0x92e077E6df89B7019954a5a583D76C642a37739D");
});

it("solves the challenge", async function () {
  const tx = await contract.guess(170, {
      value: ethers.utils.parseEther('1'),
      gasLimit: 1e5
  })
  const txHash = tx && tx.hash
  expect(txHash).to.not.be.undefined


});


// find number in range 2 ** 8 whose hash equals to the given hash of answer
/*
const bruteForceHash = (range: number, targetHash: string) => {
    for(let i=0; i < range; i++){
        const hash = ethers.utils.keccak256([i]);
        if(targetHash.includes(hash)) return i;
    }
    throw new Error(`no hash found ${range}`);
}

const number = bruteForceHash(
    2 ** 8,
    `0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365`
);

console.log(number)
*/