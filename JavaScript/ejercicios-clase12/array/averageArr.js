/*
3. Solicita al usuario un array de máximo 10 números reales y calcula su media.
*/

function averageArr() {
	let arrReq = [];
	let ordSignal = "º";

	let maxInput = parseFloat(prompt("Cuántos números quieres poner? (Puedes poner decimales con el separador '.'. Min. 2 y Máx. 10): "));
	if (maxInput < 2 || isNaN(maxInput) || maxInput > 10) {
		alert("Dije números, mínimo 2 y máximo 10 😡");
		return;
	}
	for (let i = 0; i < maxInput; i++) {
		arrReq[i] = parseFloat(prompt("Inserte el " + (i + 1) + ordSignal + " número: "));
		if (isNaN(arrReq[i]))
			arrReq[i] = 0;
	}
	console.log(arrReq);
	let arrTotal = arrReq.reduce((n1, n2) => {
		return n1 + n2;
	});

	alert("La media de los números que me has facilitado es: " + parseFloat((arrTotal / maxInput).toFixed(2)));
}

averageArr();