const finishGameBtn = document.getElementById("finish-game");
const tryAgainBtn = document.getElementById("reload-game");
let interval;

const game = new BoxGame();

const startGame = () => {
	interval = window.setInterval(() => game.setColorBoxes(), 1000);
};

const finishGame = () => {
	const score = document.querySelector(".modal-body");
	score.textContent = game.score;
	clearInterval(interval);
};

finishGameBtn.addEventListener("click", finishGame);
tryAgainBtn.addEventListener("click", startGame);
