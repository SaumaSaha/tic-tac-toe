const { table } = require("table");

class GameController {
	#game;
	#inputController;
	#renderer;
	constructor(game, inputController, renderer) {
		this.#game = game;
		this.#inputController = inputController;
		this.#renderer = renderer;
	}

	start() {
		this.#inputController.on("move-entered", (move) => {
			this.#game.movePlayed(move);
			const status = this.#game.status();
			if (status.isGameOver) {
				this.#inputController.stop();
			}
			this.#renderer(status, console.log, table);
		});

		this.#inputController.on("invalid-move", () => {
			const status = this.#game.status();
			status.validMove = false;
			this.#renderer(status, console.log, table);
		});

		this.#inputController.start();
	}
}

exports.GameController = GameController;
