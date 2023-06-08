const { Board } = require("./board");
const { table } = require("table");

const boardNumberLookup = {
	1: [0, 0],
	2: [1, 0],
	3: [2, 0],
	4: [0, 1],
	5: [1, 1],
	6: [2, 1],
	7: [0, 2],
	8: [1, 2],
	9: [2, 2],
};

class Game {
	#players;
	#board;
	#playerTurn;
	#noOfTurns;

	constructor(players) {
		this.#players = players;
		this.#board = new Board(3, 3, "  ");
		this.#playerTurn = 0;
		this.#noOfTurns = 0;
	}

	#updateBoard(x, y) {
		const playerIcon = this.#players[this.#playerTurn % 2].icon;
		const validMove = this.#board.change(x, y, playerIcon);

		if (validMove) {
			this.#playerTurn++;
			this.#noOfTurns++;
		}
	}

	#hideCursor() {
		process.stdout.write("\u001B[?25l");
	}

	renderScreen(renderer, styler) {
		console.clear();
		this.#hideCursor();
		this.#board.render(renderer, styler);
		renderer(`${this.#players[this.#playerTurn % 2].name}'s turn`);
	}

	playedMove(number) {
		if (number in boardNumberLookup) {
			this.#updateBoard(...boardNumberLookup[number]);
		}
	}
}

exports.Game = Game;
