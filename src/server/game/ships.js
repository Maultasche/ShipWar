/**
 * This module serves as the interface to the ship functionality
 */

import _ from "lodash";

//Enumerate the ship cell states
let cellState = {
	UNDAMAGED: 0,
	DESTROYED: 1
};

/**
 * Creates the ships available to a player
 * @param {array} The types of ships to be created
 * @return {array} A collection of the ships available to a player
 */
function createPlayerShips(shipTypes) {
	return shipTypes.map(shipType => createShip(shipType));
}

/**
 * Creates a ship of a particular type
 * @param  {object} shipType The type of ship to be created
 * @return {object}          [The created ship]
 */
function createShip(shipType) {
	//Create object with a ship type, ship cells, and whether the ship is currently destroyed
	let ship = {
		type: shipType,
		cells: createShipCells(shipType.length),
		isDestroyed: false
	};

	return ship;
}

/**
 * Creates the cells for a particular ship type
 * @param  {number} shipLength The length of the ship whose cells are being created
 * @return {array}             An array containing the ship cells
 */
function createShipCells(shipLength) {
	//Create an array of undamaged cell states
	
	return Array(shipLength).map(() => ({ state: cellState.UNDAMAGED }));
}


let ships = {
	cellState,
	createPlayerShips
};

export default ships;