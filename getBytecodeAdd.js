const { expect } = require("chai");
const { ethers } = require("hardhat");

async function main() {
  const AddLibraryFactory = await ethers.getContractFactory("AddLibrary");
  console.log("AddLibrary Bytecode:");
  console.log(AddLibraryFactory.bytecode);

  const AddFactory = await ethers.getContractFactory("Add");

  console.log("\nAdd Contract Bytecode internal:");
  console.log(AddFactory.bytecode);

  //We can notice that AddLibrary is inside the caller contract bytecode
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });