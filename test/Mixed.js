const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mixed", function () {
    let Mixed;
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

        Mixed = await MixedContract.deploy();
    });

    it("Should add a + b", async function () {
        const a = 1;
        const b = 2;
        const res = await Mixed.add(a, b);

        expect(res).to.equal(3);
    });

    it("Should divide a + b", async function () {
        const a = 4;
        const b = 2;
        const res = await Mixed.divide(a, b);

        expect(res).to.equal(2);
    });
});