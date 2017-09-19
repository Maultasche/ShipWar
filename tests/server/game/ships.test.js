"use strict";

import _ from "lodash";
import ships from "../../src/game/ships";
import shipTypes from "../../src/game/shipTypes";

describe("creating player ships", () => {
	let playerShips = null;

	beforeEach(() => {
		playerShips = ships.createPlayerShips();
	});

	it("5 player ships are created", () => {
		expect(playerShips).toBeDefined();
		expect(playerShips).not.toBeNull();
		expect(playerShips.length).toBe(5);
	});

	it("the player ships contains a carrier", () => {
		expect(playerShips.findIndex(ship => ship.type === shipTypes.carrier)).not.toBe(-1);
	});

	it("the player ships contains a battleship", () => {
		expect(playerShips.findIndex(ship => ship.type === shipTypes.battleship)).not.toBe(-1);
	});

	it("the player ships contains a cruiser", () => {
		expect(playerShips.findIndex(ship => ship.type === shipTypes.cruiser)).not.toBe(-1);
	});

	it("the player ships contains a submarine", () => {
		expect(playerShips.findIndex(ship => ship.type === shipTypes.submarine)).not.toBe(-1);
	});

	it("the player ships contains a destroyer", () => {
		expect(playerShips.findIndex(ship => ship.type === shipTypes.destroyer)).not.toBe(-1);
	});

	it("the player ships contain the correct number of cells", () => {
		playerShips.forEach(ship => {
			expect(ship.cells).toBeDefined();
			expect(ship.cells).not.toBeNull();

			expect(ship.cells.length).toBe(ship.type.length);
		});	
	});

	it("the ship cells are all undamaged", () => {
		let shipCells = playerShips.reduce((cells, ship) => cells.concat(ship.cells), []);

		shipCells.forEach(cell => expect(cell.state).toBe(ships.cellState.UNDAMAGED));
	});

	it("none of the ships are destroyed", () => {
		playerShips.forEach(ship => expect(ship.isDestroyed).toBe(false));
	});
});