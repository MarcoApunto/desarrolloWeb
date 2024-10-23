// 234,27€

let caja = [[500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
			[  1,   0,   0,  0,  2,  1, 5, 5, 10,  2,   1,   0,    0,    2,    0]];

let pago = [[500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
			[  0,   0,   0,  1,  0,  0, 0, 0, 0,   0,   0,   0,    0,    0,    0]];

let importe = 27.46;

function total(efectivo) {
	let resultado = 0
	for (let i = 0; i < efectivo[0].length; i++) {
		resultado += efectivo[0][i] * efectivo[1][i]
	}
	resultado = parseFloat(resultado.toFixed(2));
	efectivo[0].push(resultado);
	return efectivo;

}

function buscar(efectivo, cambio) {
	let pos = 0;

	while (efectivo[0][pos] >= cambio) {
		pos++;
	}
	return pos - 1;
}

pago = total(pago);
caja = total(caja);
// alert(pago[0][pago[0].length-1]);

//Si el importe es igual que el pago
if (importe - pago[0][pago[0].length - 1] == 0) { //Importe justo
	alert("Importe justo");
} else {
	//Si el pago es mayor que la caja
	if (pago[0][pago[0].length - 1] - importe > caja[0][caja[0].length - 1]) {
		alert("No hay cambio disponible");
	} else {
		//Si el cliente ha dado de menos
		if (pago[0][pago[0].length - 1] < importe) {
			console.log("Señor! Falta dinero.")
		} else {
			let cambio = pago[0][pago[0].length - 1] - importe;
			console.log("A devolver: " + cambio);

			let retBuscar = buscar(caja, cambio);
			// map() aplica slice() a cada elemento de caja, el array original.
			// Por así decirlo, transforma los datos para que no tengan relación
			// y poder manipular la copia sin tener cambios en el original.
			let auxArr = caja.map(auxArr => auxArr.slice());

			for (let i = retBuscar; i < caja[1].length; i++) {
				while (auxArr[1][i] > 0 && cambio >= auxArr[0][i]) {
					console.log("En la caja hay " + auxArr[1][i] + " billete de " + auxArr[0][i] + "€");
					cambio = parseFloat((cambio - auxArr[0][i]).toFixed(2));
					auxArr[1][i] -= 1;
					console.log("Todavía hay " + auxArr[1][i] + " billete de " + auxArr[0][i] + "€");
				}
			}
			if (cambio === 0) {
				console.log("Cambio realizado");
			} else {
				console.log("No ha habido suficiente efectivo para completar el cambio");
			}
		}
	}
}