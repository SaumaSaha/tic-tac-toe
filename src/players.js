const winningPositions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

class Players {
	#players;
	#currentPlayer;
	#currentPlayerIndex;

	constructor(...particpants) {
		this.#players = particpants;
		this.#currentPlayer = particpants[0];
		this.#currentPlayerIndex = 0;
	}

	changeTurn() {
		this.#currentPlayerIndex =
			(this.#currentPlayerIndex + 1) % this.#players.length;
		this.#currentPlayer = this.#players[this.#currentPlayerIndex];
	}

	currentPlayer() {
		return this.#currentPlayer.name();
	}

	registerMove(move) {
		this.#currentPlayer.movePlayed(move);
	}

	totalMovesPlayed() {
		return Object.fromEntries(
			this.#players.flatMap((player) => player.playedMoves())
		);
	}

	hasWon() {
		return winningPositions.some((winningPosition) =>
			this.#currentPlayer.hasPlayed(winningPosition)
		);
	}
}

exports.Players = Players;
