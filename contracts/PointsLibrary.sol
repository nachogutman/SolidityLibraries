// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

library PointsLibrary {
    struct Player {
        uint score;
    }

    function incrementScore(Player storage _player, uint points) external {
        _player.score += points;
    }
}