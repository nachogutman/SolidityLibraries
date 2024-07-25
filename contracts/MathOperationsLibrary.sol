// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


library MathOperationsLibrary {

    //The add function (internal) is compiled into the Mixed contract's bytecode.
    function add(uint a, uint b) internal pure returns (uint){
        return a + b;
    }

    //The divide function (external) remains in the deployed library and is called via DELEGATECALL.
    function divide(uint a, uint b) external pure returns (uint){
        return a / b;
    }
}