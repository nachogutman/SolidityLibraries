// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./PointsLibrary.sol";

contract Points {
    using PointsLibrary for PointsLibrary.Player;
    mapping(uint => PointsLibrary.Player) public players;
    
    function foo(uint _points) external {
        players[0].incrementScore(_points);
    }
}