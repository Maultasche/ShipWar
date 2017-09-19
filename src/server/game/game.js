/**
 * This module serves as the interface for the game logic
 */

import shipGrid from "./shipGrid";
import hitGrid from "./hitGrid";
import ships from "./ships";

/**
 * Creates an initial game object
 * @return {Object} The initial game state
 */
function initializeGame() {
	throw new Error("not implemented");

	//Create new ship grids, new hit grids, new ships for each player (index corresponds to player number)
	//Game state object also contains whose turn it is (player number) and whether the game has ended
}


let game = {
	initializeGame
};

export default game;