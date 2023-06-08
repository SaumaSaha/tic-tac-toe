const { table } = require("table");

class Board {
	#length;
	#width;
	#board;

	constructor(length, width) {
		this.#length = length;
		this.#width = width;
		this.#board = new Array(this.#width)
			.fill("")
			.map(() => new Array(this.#length).fill("  "));
	}

	change(column, row, character) {
		if (this.#board[row][column] === "  ") {
			this.#board[row][column] = character;
			return true;
		}

		return false;
	}

	render(renderer) {
		renderer(table(this.#board));
	}
}

exports.Board = Board;
