class Board {
	#length;
	#width;
	#board;

	constructor(length, width) {
		this.#length = length;
		this.#width = width;
		this.#board = new Array(this.#width)
			.fill("")
			.map(() => new Array(this.#length).fill(""));
	}

	render(renderer) {
		renderer(this.#board);
	}
}

exports.Board = Board;
