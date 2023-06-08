const { Game } = require("./src/game");
const { Participant } = require("./src/participant");

const main = () => {
	const participant1 = new Participant(process.argv[2], "❌");
	const participant2 = new Participant(process.argv[3], "🚫");
	const ticTacToe = new Game([player1, player2]);
	ticTacToe.start();
};

main();
