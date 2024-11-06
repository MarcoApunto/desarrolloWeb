function chauchat(cargador) {

	// 80% que el arma se atasque. Si ocurre eso, no habrá tiros.
	if (Math.random() * 100 <= 80) {
		console.log("Illo, me he quedao pillá!");
		return ;
	}

	let count = 0;
	for (let i = 1; i <= cargador; i++) {
		if (count == 3) {
			console.log("");
			count = 0;
			i--;
		}
		else {
			console.log("pium!");
			count += 1;
		}
	}
}

let cargador = 7;
chauchat(cargador);

// Por hacer un método con arrays... algún día.
