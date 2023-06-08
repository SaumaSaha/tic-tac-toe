const { describe, it, beforeEach } = require("node:test");
const { deepStrictEqual } = require("assert");
const { Board } = require("../src/board");

const createSpyFunction = () => {
	const fn = (...args) => {
		fn.callNumber = [...(fn.callNumber || []), { args }];
	};

	return fn;
};

let spyFunction;
let identity;

describe("Board", () => {
	beforeEach(() => {
		spyFunction = createSpyFunction();
		identity = (data) => data;
	});
	describe("render", () => {
		it("should call the renderer with and empty array if length and breadth is 0", () => {
			const board = new Board(0, 0, "");
			board.render(spyFunction, identity);
			const actual = spyFunction.callNumber[0].args[0];
			const expected = [];
			deepStrictEqual(actual, expected);
		});

		it("should call the renderer with a 1 x 1 board grid if length and breadth is 1", () => {
			const board = new Board(1, 1, "");
			board.render(spyFunction, identity);
			const actual = spyFunction.callNumber[0].args[0];
			const expected = [[""]];
			deepStrictEqual(actual, expected);
		});

		it("should call the renderer with the board grid", () => {
			const board = new Board(3, 3, "");
			board.render(spyFunction, identity);
			const actual = spyFunction.callNumber[0].args[0];
			const expected = [
				["", "", ""],
				["", "", ""],
				["", "", ""],
			];
			deepStrictEqual(actual, expected);
		});
	});

	describe("change", () => {
		it("should change the element of the given position in the board with the given element", () => {
			const board = new Board(3, 3, "");
			const hasChanged = board.change(0, 0, "❌");
			board.render(spyFunction, identity);
			const actual = spyFunction.callNumber[0].args[0];
			const expected = [
				["❌", "", ""],
				["", "", ""],
				["", "", ""],
			];
			deepStrictEqual(actual, expected);
			deepStrictEqual(hasChanged, true);
		});

		it("should change not change the element if the position is already filled", () => {
			const board = new Board(3, 3, "");
			let hasChanged = board.change(0, 0, "❌");
			hasChanged = board.change(0, 0, "🚫");
			board.render(spyFunction, identity);
			const actual = spyFunction.callNumber[0].args[0];
			const expected = [
				["❌", "", ""],
				["", "", ""],
				["", "", ""],
			];
			deepStrictEqual(actual, expected);
			deepStrictEqual(hasChanged, false);
		});
	});
});
