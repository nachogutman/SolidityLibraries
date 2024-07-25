const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Points", function () {
    let points;
    let owner;
    let pointsLibrary;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        
        //It deploys the library because it has an external function
        const PointsLibrary = await ethers.getContractFactory("PointsLibrary");
        pointsLibrary = await PointsLibrary.deploy();
        const Address = await pointsLibrary.getAddress();

        const PointsContract = await ethers.getContractFactory("Points", {
            libraries: {
                PointsLibrary: Address
                }
        });

        points = await PointsContract.deploy();
    });

    it("Should add points to player[0]", async function () {
        await points.foo(912);
        expect(await points.players(0)).to.equal(912);
    });
});