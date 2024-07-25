const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Add", function () {
    let add;
    let owner;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();

        //It does not deploy the library because it has an internal function
        const AddContract = await ethers.getContractFactory("Add");
        add = await AddContract.deploy();
    });

    it("Should add a + b", async function () {
        const a = 1;
        const b = 2;
        const res = await add.add(a, b);

        expect(res).to.equal(3);
    });
});