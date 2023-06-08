class Player {
	#name;
	#icon;

	constructor(name, icon) {
		this.#name = name;
		this.#icon = icon;
	}

	get name() {
		return this.#name;
	}

	get icon() {
		return this.#icon;
	}

	changeName(name) {
		this.#name = name;
	}
}

exports.Player = Player;
