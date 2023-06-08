class Board {
	#length;
	#width;
	#board;
	#initialChar;

	constructor(length, width, initialChar) {
		this.#length = length;
		this.#width = width;
		this.#initialChar = initialChar;
		this.#board = new Array(this.#width)
			.fill("")
			.map(() => new Array(this.#length).fill(this.#initialChar));
	}

	#isPositionVacant(row, column) {
		return this.#board[row][column] === this.#initialChar;
	}

	change(column, row, character) {
		if (this.#isPositionVacant(row, column)) {
			this.#board[row][column] = character;
			return true;
		}

		return false;
	}

	render(renderer, styler) {
		renderer(styler(this.#board));
	}
}

exports.Board = Board;
