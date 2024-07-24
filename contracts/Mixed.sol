// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import './MixedLibrary.sol';

contract Mixed {
    function add(uint a, uint b) public pure returns (uint256){
        return MixedLibrary.add(a, b);
    }

    function divide(uint a, uint b) public pure returns (uint256){
        return MixedLibrary.divide(a, b);
    }
}