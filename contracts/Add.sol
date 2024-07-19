// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./AddLibrary.sol";

contract Add {
    function add(uint a, uint b) public pure returns (uint256){
        return AddLibrary.add(a, b);
    }
}