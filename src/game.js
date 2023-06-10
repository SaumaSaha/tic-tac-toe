class Game {
	#players;
	#noOfTurns;
	#isGameOver;
	#endState;
	#validMove;

	constructor(players) {
		this.#players = players;
		this.#noOfTurns = 0;
		this.#endState = null;
		this.#isGameOver = null;
		this.#validMove = true;
	}

	#areTurnsOver() {
		return this.#noOfTurns === 9;
	}

	status() {
		return {
			moves: this.#players.totalMovesPlayed(),
			isGameOver: this.#isGameOver,
			validMove: this.#validMove,
			currentPlayer: this.#players.currentPlayer(),
			endState: this.#endState,
		};
	}

	movePlayed(move) {
		if (move in this.#players.totalMovesPlayed()) {
			this.#validMove = false;
			return;
		}

		this.#players.registerMove(move);
		this.#validMove = true;
		this.#noOfTurns++;

		if (this.#areTurnsOver()) {
			this.#isGameOver = true;
			this.#endState = "draw";
			return;
		}

		if (this.#players.hasWon()) {
			this.#isGameOver = true;
			this.#endState = "win";
			return;
		}

		this.#players.changeTurn();
	}
}

exports.Game = Game;
