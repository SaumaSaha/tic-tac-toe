const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");
const { Participant } = require("../src/participant");
const { Players } = require("../src/players");

describe("Players", () => {
	describe("playerTurn", () => {
		it("should give the participant who's turn is now", () => {
			const participant1 = new Participant("sauma", "😄");
			const participant2 = new Participant("bittu", "😃");
			const players = new Players(participant1, participant2);
			const actual = [players.turn.name, players.turn.icon];
			const expected = ["sauma", "😄"];
			deepStrictEqual(actual, expected);
		});
	});

	describe("changeTurn", () => {
		it("should change the turn to who's turn is next", () => {
			const participant1 = new Participant("sauma", "😄");
			const participant2 = new Participant("bittu", "😃");
			const players = new Players(participant1, participant2);
			players.changeTurn();
			const actual = [players.turn.name, players.turn.icon];
			const expected = ["bittu", "😃"];
			deepStrictEqual(actual, expected);
		});
	});
});
