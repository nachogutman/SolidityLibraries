const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Points", function () {
    let Points;
    let owner;
    let pointsLibrary;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        
        const PointsLibrary = await ethers.getContractFactory("PointsLibrary");
        pointsLibrary = await PointsLibrary.deploy();
        const Address = await pointsLibrary.getAddress();

        const PointsContract = await ethers.getContractFactory("Points", {
            libraries: {
                PointsLibrary: Address
                }
        });

        Points = await PointsContract.deploy();
    });

    it("Should add points to player[0]", async function () {
        await Points.foo(912);
        expect(await Points.players(0)).to.equal(912);
    });
});