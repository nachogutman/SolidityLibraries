const { expect } = require("chai");
const { ethers } = require("hardhat");

async function main() {
  const PointsLibraryFactory = await ethers.getContractFactory("PointsLibrary");
  const pointsLibrary = await PointsLibraryFactory.deploy();

  console.log("PointsLibrary Bytecode:");
  console.log(PointsLibraryFactory.bytecode);

  const PointsFactory = await ethers.getContractFactory("Points", {
    libraries: {
      PointsLibrary: await pointsLibrary.getAddress(),
    },
  });

  console.log("\nPoints Contract Bytecode external:");
  console.log(PointsFactory.bytecode);

  //We can notice that PointsLibrary is not inside the caller contract bytecode
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });