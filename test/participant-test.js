const { deepStrictEqual } = require("assert");
const { describe, it } = require("node:test");
const { Participant } = require("../src/participant");

describe("Participant", () => {
	describe("name", () => {
		it("should give the name of the player", () => {
			const player1 = new Participant("Sauma");
			const actual = player1.name;
			const expected = "Sauma";
			deepStrictEqual(actual, expected);
		});
	});

	describe("icon", () => {
		it("should give the player icon", () => {
			const player1 = new Participant("Sauma", "😄");
			const actual = player1.icon;
			const expected = "😄";
			deepStrictEqual(actual, expected);
		});
	});
});
