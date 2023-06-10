class Participant {
	#name;
	#icon;
	#movesPlayed;

	constructor(name, icon) {
		this.#name = name;
		this.#icon = icon;
		this.#movesPlayed = new Set();
	}

	name() {
		return this.#name;
	}

	movePlayed(number) {
		this.#movesPlayed.add(number);
	}

	playedMoves() {
		return [...this.#movesPlayed].map((move) => [move, this.#icon]);
	}

	hasPlayed(moves) {
		return moves.every((move) => {
			return this.#movesPlayed.has(move);
		});
	}
}

exports.Participant = Participant;
