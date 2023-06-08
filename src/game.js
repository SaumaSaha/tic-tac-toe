const { Board } = require("./board");

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
	#noOfTurns;

	constructor(players) {
		this.#players = players;
		this.#board = new Board(3, 3, "  ");
		this.#noOfTurns = 0;
	}

	#updateBoard(x, y) {
		const playerIcon = this.#players.turn.icon;
		const validMove = this.#board.change(x, y, playerIcon);

		if (!validMove) {
			console.log("Not a valid Move");
			return;
		}
		this.#players.changeTurn();
		this.#noOfTurns++;
	}

	#hideCursor() {
		process.stdout.write("\u001B[?25l");
	}

	areTurnsOver() {
		return this.#noOfTurns === 9;
	}

	renderScreen(renderer, styler) {
		console.clear();
		this.#hideCursor();
		this.#board.render(renderer, styler);
		renderer(`${this.#players.turn.name}'s turn`);
	}

	playedMove(number) {
		if (number in boardNumberLookup) {
			this.#updateBoard(...boardNumberLookup[number]);
		}
	}
}

exports.Game = Game;
