const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Add", function () {
    let Add;
    let owner;
    let addLibrary;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        
        const AddLibrary = await ethers.getContractFactory("AddLibrary");
        addLibrary = await AddLibrary.deploy();
        const address = await addLibrary.getAddress();

        const AddContract = await ethers.getContractFactory("Add", {
            libraries: {
                AddLibrary: address
                }
        });

        Add = await AddContract.deploy();
    });

    it("Should add a + b", async function () {
        const a = 1;
        const b = 2;
        const res = await Add.add(a, b);

        expect(res).to.equal(3);
    });
});