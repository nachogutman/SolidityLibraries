const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MathOperations", function () {
    let mathOperations;
    let owner;
    let mixedLibrary;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        const MathOperationsLibrary = await ethers.getContractFactory("MathOperationsLibrary");
        mathOperationsLibrary = await MathOperationsLibrary.deploy();
        const Address = await mathOperationsLibrary.getAddress();

        const MathOperationsContract = await ethers.getContractFactory("MathOperations", {
            libraries: {
                MathOperationsLibrary: Address
                }
        });

        mathOperations = await MathOperationsContract.deploy();
    });

    it("Should add a + b", async function () {
        const a = 1;
        const b = 2;
        const res = await mathOperations.add(a, b);

        expect(res).to.equal(3);
    });

    it("Should divide a + b", async function () {
        const a = 4;
        const b = 2;
        const res = await mathOperations.divide(a, b);

        expect(res).to.equal(2);
    });
});

