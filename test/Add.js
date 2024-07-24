const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Add", function () {
    let Add;
    let owner;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();

        //It does not deploy the library because it has an internal function
        const AddContract = await ethers.getContractFactory("Add");
        Add = await AddContract.deploy();
    });

    it("Should add a + b", async function () {
        const a = 1;
        const b = 2;
        const res = await Add.add(a, b);

        expect(res).to.equal(3);
    });
});