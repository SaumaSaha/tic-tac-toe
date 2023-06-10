const { EventEmitter } = require("events");

class KeyBoardController extends EventEmitter {
	#stdin;
	#keymap;
	constructor(stdin, keymap) {
		super();
		this.#stdin = stdin;
		this.#keymap = keymap;
	}

	#setInputEnvironment() {
		this.#stdin.setRawMode(true);
		this.#stdin.setEncoding("utf-8");
	}

	start() {
		this.#setInputEnvironment();
		this.#stdin.on("data", (data) => {
			if (this.#keymap[data] === undefined) {
				this.emit("invalid-move");
				return;
			}

			const [event, eventData] = this.#keymap[data];
			this.emit(event, eventData);
		});
	}

	stop() {
		this.#stdin.destroy();
	}
}

exports.KeyBoardController = KeyBoardController;
