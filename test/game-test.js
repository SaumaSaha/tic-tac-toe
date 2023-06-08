const { describe, it, beforeEach } = require("node:test");
const { deepStrictEqual } = require("assert");
const { Participant } = require("../src/participant");
const { Game } = require("../src/game");

const createSpyFunction = () => {
	const fn = (...args) => {
		fn.callNumber = [...(fn.callNumber || []), { args }];
	};

	return fn;
};

let spyFunction;
let identity;

describe("Game", () => {
	beforeEach(() => {
		spyFunction = createSpyFunction();
		identity = (data) => data;
	});

	describe("playedMove", () => {
		it("should not update the board if the input is not in the lookup", () => {
			const participant1 = new Participant("Sauma", "❌");
			const participant2 = new Participant("Bittu", "🚫");
			// const players = new Players(participant1, participant2);
			const game = new Game([participant1, participant2]);
			game.playedMove("a");
			game.renderScreen(spyFunction, identity);

			let actual = spyFunction.callNumber[0].args[0];
			let expected = [
				["  ", "  ", "  "],
				["  ", "  ", "  "],
				["  ", "  ", "  "],
			];
			deepStrictEqual(actual, expected);
			actual = spyFunction.callNumber[1].args[0];
			expected = "Sauma's turn";
			deepStrictEqual(actual, expected);
		});

		it("should update the board with the player icon in the given position", () => {
			const participant1 = new Participant("Sauma", "❌");
			const participant2 = new Participant("Bittu", "🚫");
			// const players = new Players(participant1, participant2);
			const game = new Game([participant1, participant2]);
			game.playedMove("1");
			game.renderScreen(spyFunction, identity);

			let actual = spyFunction.callNumber[0].args[0];
			let expected = [
				["❌", "  ", "  "],
				["  ", "  ", "  "],
				["  ", "  ", "  "],
			];
			deepStrictEqual(actual, expected);
			actual = spyFunction.callNumber[1].args[0];
			expected = "Bittu's turn";
			deepStrictEqual(actual, expected);
		});
	});
});
