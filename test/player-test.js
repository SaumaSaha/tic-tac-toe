const { deepStrictEqual } = require("assert");
const { describe, it } = require("node:test");
const { Player } = require("../src/player");

describe("Player", () => {
	describe("name", () => {
		it("should give the name of the player", () => {
			const player1 = new Player("Sauma");
			const actual = player1.name;
			const expected = "Sauma";
			deepStrictEqual(actual, expected);
		});
	});

	describe("icon", () => {
		it("should give the player icon", () => {
			const player1 = new Player("Sauma", "😄");
			const actual = player1.icon;
			const expected = "😄";
			deepStrictEqual(actual, expected);
		});
	});
});
