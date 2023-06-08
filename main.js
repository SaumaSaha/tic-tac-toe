const { Controller } = require("./src/contoller");
const { Game } = require("./src/game");
const { Participant } = require("./src/participant");
const { Players } = require("./src/players");

const main = () => {
	const participant1 = new Participant(process.argv[2], "❌");
	const participant2 = new Participant(process.argv[3], "🚫");
	const players = new Players(participant1, participant2);
	const ticTacToe = new Game(players);
	const ticTacToeController = new Controller(ticTacToe);
	ticTacToeController.start();
};

main();
