class Players {
	#players;
	#playersTurn = 0;

	constructor(...particpants) {
		this.#players = particpants;
		this.#playersTurn = 0;
	}

	get turn() {
		return this.#players[this.#playersTurn];
	}

	changeTurn() {
		this.#playersTurn = (this.#playersTurn + 1) % this.#players.length;
	}
}

exports.Players = Players;
