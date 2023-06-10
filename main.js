const { GameController } = require("./src/game-contoller");
const { Game } = require("./src/game");
const { Participant } = require("./src/participant");
const { Players } = require("./src/players");
const { KeyBoardController } = require("./src/keyboard-controller");
const { GameRenderer } = require("./src/renderer");

const keymap = {
	1: ["move-entered", 0],
	2: ["move-entered", 1],
	3: ["move-entered", 2],
	4: ["move-entered", 3],
	5: ["move-entered", 4],
	6: ["move-entered", 5],
	7: ["move-entered", 6],
	8: ["move-entered", 7],
	9: ["move-entered", 8],
};

const main = () => {
	const participant1 = new Participant(process.argv[2], "\x1B[31mx\x1B[0m");
	const participant2 = new Participant(process.argv[3], "\x1B[34mo\x1B[0m");
	const players = new Players(participant1, participant2);
	const ticTacToe = new Game(players);
	const keyBoardController = new KeyBoardController(process.stdin, keymap);
	const gameRenderer = new GameRenderer();
	const ticTacToeController = new GameController(
		ticTacToe,
		keyBoardController,
		gameRenderer.render
	);
	ticTacToeController.start();
};

main();
