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
	#playerTurn;
	#noOfTurns;

	constructor(...players) {
		this.#players = players;
		this.#board = new Board(3, 3);
		this.#playerTurn = 0;
		this.#noOfTurns = 0;
	}

	updateBoard(number) {
		if (number in boardNumberLookup) {
			const playerIcon = this.#players[this.#playerTurn % 2].icon;
			const validMove = this.#board.change(
				...boardNumberLookup[number],
				playerIcon
			);

			if (validMove) {
				this.#playerTurn++;
				this.#noOfTurns++;
			}
		}

		this.renderBoard();
	}

	hideCursor() {
		process.stdout.write("\u001B[?25l");
	}

	renderBoard() {
		console.clear();
		this.hideCursor();
		this.#board.render(console.log);
		console.log(`${this.#players[this.#playerTurn % 2].name}'s turn`);
	}

	play() {
		process.stdin.on("data", (data) => {
			this.updateBoard(data.trim());
			if (this.#noOfTurns === 9) {
				console.log("Game Over");
				process.stdin.destroy();
				return;
			}
		});
	}

	start() {
		process.stdin.setEncoding("utf-8");
		process.stdin.setRawMode(true);
		this.renderBoard();
		this.play();
	}
}

exports.Game = Game;
