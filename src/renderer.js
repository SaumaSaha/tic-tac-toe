class GameRenderer {
	render({ moves, endState, currentPlayer, validMove }, renderer, styler) {
		const grid = [];
		let message = `${currentPlayer}'s turn`;
		for (let i = 0; i < 9; i += 3) {
			grid.push([i, i + 1, i + 2].map((index) => moves[index] || " "));
		}
		if (endState === "draw") message = `Game Draw!!!`;
		if (endState === "win") message = `${currentPlayer} WON!!!`;
		if (!validMove) message += "\nInvalid Move!!!";
    
		console.clear();
		renderer(styler(grid));
		renderer(message);
	}
}

exports.GameRenderer = GameRenderer;
