// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import './MathOperationsLibrary.sol';

contract MathOperations {
    function add(uint a, uint b) public pure returns (uint256){
        return MathOperationsLibrary.add(a, b);
    }

    function divide(uint a, uint b) public pure returns (uint256){
        return MathOperationsLibrary.divide(a, b);
    }
}