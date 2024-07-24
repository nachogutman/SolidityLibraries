const { expect } = require("chai");
const { ethers } = require("hardhat");

async function main() {
  const MixedLibraryFactory = await ethers.getContractFactory("MixedLibrary");
  const mixedLibrary = await MixedLibraryFactory.deploy();

  console.log("MixedLibrary Bytecode:");
  console.log(MixedLibraryFactory.bytecode);

  const MixedFactory = await ethers.getContractFactory("Mixed", {
    libraries: {
      MixedLibrary: await mixedLibrary.getAddress(),
    },
  });

  console.log("\nMixed Contract Bytecode (with linked library):");
  console.log(MixedFactory.bytecode);

  /* Let's analyze these bytecodes to understand how the library functions are handled in the contract:
      
      The MixedLibrary contains both an internal function (add) and an external function (divide).
      The bytecode for both of these functions is contained within the library's bytecode.
      
      The Mixed contract uses both the internal and external functions from the library.
      
      The internal add function's bytecode is indeed included directly in the Mixed contract's bytecode. You can see this in the contract bytecode around the middle:
      Copy60006100a78383610133565b905092915050565b
      
      The external divide function is not directly included in the contract's bytecode. Instead, there's a call to the library:
      Copy6000735fbdb2315678afecb367f032d93f642f64180aa363f88e9fbf8484

  */
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });