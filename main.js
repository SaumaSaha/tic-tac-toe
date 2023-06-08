const { Game } = require("./src/game");
const { Player } = require("./src/player");

const main = () => {
	const player1 = new Player(process.argv[2], "❌");
	const player2 = new Player(process.argv[3], "🚫");
	const ticTacToe = new Game(player1, player2);
	ticTacToe.start();
};

main();
