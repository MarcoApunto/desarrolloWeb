function chauchat(cargador) {

	let count = 0;
	for (let i = 1; i <= cargador; i++){
		if (Math.random() * 100 > 80)
			console.log("Illo, me he quedao pillá!");
		else {
			if (count == 3) { 
				console.log("\n");
				count = 0;
			}
			else {
				console.log("pium!");
				count += 1;
			}
		}
	}
}

let cargador = 7;
chauchat(cargador);

// Duda en el caso de hacer 3 disparos, activar el atasco y hacer el salto de línea. Si ha de hacer el salto de línea o no después del atasco.