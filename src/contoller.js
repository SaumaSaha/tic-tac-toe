const { table } = require("table");

class Controller {
	#game;
	constructor(game) {
		this.#game = game;
	}

	#setInputEnvironment() {
		process.stdin.setEncoding("utf-8");
		process.stdin.setRawMode(true);
	}

	#play() {
		process.stdin.on("data", (data) => {
			this.#game.playedMove(data.trim());
			this.#game.renderScreen(console.log, table);
			if (this.#game.areTurnsOver()) {
				process.stdin.destroy();
				console.log("Game Draw");
				return;
			}
		});
	}

	start() {
		this.#setInputEnvironment();
		this.#game.renderScreen(console.log, table);
		this.#play();
	}
}

exports.Controller = Controller;
