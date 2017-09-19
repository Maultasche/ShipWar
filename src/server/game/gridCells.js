/**
 * This module serves as the interface to grid cell functionality
 */

//Enumerates the cell types
let cellTypes = {
	water: 1,
	ship: 2
};

let gridCells = {
	cellTypes,
	//The water cell that can be reused whereever there is water 
	WATER: {
		name: "water",
		type: cellTypes.water
	}
};

export default gridCells;