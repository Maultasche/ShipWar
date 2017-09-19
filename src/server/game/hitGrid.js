/**
 * This module serves as the interface to the hit grid logic
 */


/**
 * Creates and initializes a hit grid
 *
 * The ship grid will be initialized only with null values, which
 * means that no hits or misses have been recorded. A hit corresponds
 * to a true value and a miss corresponds to a false value
 * 
 * @param  {number} width  The ship grid width
 * @param  {number} height The ship grid height
 * @return {Object} A new ship grid
 */
function createInitialHitGrid(width, height) {
	let arraySize = width * height;

	let hitGrid = Array(arraySize).fill(null);

	return hitGrid;
}

let hitGridFunctions = {
	createInitialHitGrid
};

export default hitGridFunctions;