const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mixed", function () {
    let mixed;
    let owner;
    let mixedLibrary;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        const MixedLibrary = await ethers.getContractFactory("MixedLibrary");
        mixedLibrary = await MixedLibrary.deploy();
        const Address = await mixedLibrary.getAddress();

        const MixedContract = await ethers.getContractFactory("Mixed", {
            libraries: {
                MixedLibrary: Address
                }
        });

        mixed = await MixedContract.deploy();
    });

    it("Should add a + b", async function () {
        const a = 1;
        const b = 2;
        const res = await mixed.add(a, b);

        expect(res).to.equal(3);
    });

    it("Should divide a + b", async function () {
        const a = 4;
        const b = 2;
        const res = await mixed.divide(a, b);

        expect(res).to.equal(2);
    });
});