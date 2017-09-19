"use strict";

import _ from "lodash";
import shipTypes from "../../src/game/shipTypes";

describe("verifying ship types", () => {
	test("there are five ship types", () => {
		expect(_.keys(shipTypes).length).toBe(5);
	});

	test("there is a carrier ship type", () => {
		expect(shipTypes.carrier).not.toBe(undefined);
	});

	test("carrier ship type has a length of 5", () => {
		expect(shipTypes.carrier.length).toBe(5);
	});	

	test("there is a battleship ship type", () => {
		expect(shipTypes.battleship).not.toBe(undefined);
	});

	test("battleship ship type has a length of 4", () => {
		expect(shipTypes.battleship.length).toBe(4);
	});

	test("there is a cruiser ship type", () => {
		expect(shipTypes.cruiser).not.toBe(undefined);
	});

	test("cruiser ship type has a length of 3", () => {
		expect(shipTypes.cruiser.length).toBe(3);
	});

	test("there is a submarine ship type", () => {
		expect(shipTypes.submarine).not.toBe(undefined);
	});

	test("submarine ship type has a length of 3", () => {
		expect(shipTypes.submarine.length).toBe(3);
	});

	test("there is a destroyer ship type", () => {
		expect(shipTypes.destroyer).not.toBe(undefined);
	});

	test("destroyer ship type has a length of 2", () => {
		expect(shipTypes.destroyer.length).toBe(2);
	});	
});