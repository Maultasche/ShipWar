/**
 * This module serves as the interface to the ship grid logic
 */

import _ from "lodash";
import gridCells from "./gridCells";

/**
 * Creates and initializes a ship grid
 *
 * The ship grid will be initialized only with water cells
 * 
 * @param  {number} width  The ship grid width
 * @param  {number} height The ship grid height
 * @return {Object} A new ship grid
 */
function createInitialShipGrid(width, height) {
	let arraySize = width * height;

	let shipGrid = Array(arraySize).fill(gridCells.WATER);

	return shipGrid;
}

let shipGridFunctions = {
	createInitialShipGrid
};

export default shipGridFunctions;