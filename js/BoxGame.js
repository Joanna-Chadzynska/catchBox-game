class BoxGame {
	constructor(score = 0, positions = []) {
		this.score = score;
		this.boxes = [...document.querySelectorAll(".game-box div")];
		this.boxes.forEach((box) =>
			box.addEventListener("click", (e) => {
				e.target.classList.remove("good-clicked");
				e.target.classList.remove("bad-clicked");
				this.checkBoxClass(e.target);
			})
		);
		this.totalPoints = document.getElementById("total-points");
		this.positions = positions;
		this.color = this.getRandomColor();
		this.divsNumber = this.randomDivsNumber();
	}

	displayScore() {
		this.totalPoints.textContent = this.score;
	}

	randomDivNr() {
		return Math.floor(Math.random() * 9);
	}

	randomColor() {
		return Math.floor(Math.random() * 2);
	}

	randomDivsNumber() {
		return Math.floor(Math.random() * 3) + 1;
	}

	getRandomColor() {
		const cardsColor = ["red", "green"];
		this.color = cardsColor[this.randomColor()];
		return this.color;
	}

	drawBox() {
		for (let i = 0; i < this.divsNumber; i++) {
			if (this.divsNumber === 1) {
				this.positions[i] = this.randomDivNr();
			} else if (this.divsNumber === 2) {
				this.positions[i] = this.randomDivNr();
			} else if (this.divsNumber === 3) {
				this.positions[i] = this.randomDivNr();
			}
		}
	}

	setColorBoxes() {
		this.drawBox();
		this.boxes.forEach((box, index) => {
			box.classList.remove(this.getRandomColor());
			box.classList.remove("good-clicked");
			box.classList.remove("bad-clicked");
			if (this.positions.includes(index)) {
				box.classList.add(this.color);
			} else {
				box.classList.remove(this.getRandomColor());
			}
		});
	}

	checkBoxClass(target) {
		if (target.classList.contains("green")) {
			target.classList.add("good-clicked");
			this.score += 1;
		} else if (target.classList.contains("red")) {
			target.classList.add("bad-clicked");
			this.score -= 1;
		} else {
			this.score;
		}

		this.displayScore();
	}
}
