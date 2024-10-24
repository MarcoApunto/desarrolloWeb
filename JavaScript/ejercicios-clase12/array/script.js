/*
[prompt("Introduzca el 1º: "), prompt("Introduzca el 2º: "), prompt("Introduzca el 3º: ")],
							  [prompt("Introduzca el 4º: "), prompt("Introduzca el 5º: "), prompt("Introduzca el 6º: ")],
							  [prompt("Introduzca el 7º: "), prompt("Introduzca el 8º: "), prompt("Introduzca el 9º: ")]

*/

function showRowEvenColOdd() {

	// alert("Introduzca 9 datos, sean númericos o palabras, a continuación.")
	const arrUser = new Array(["aslkdja", 4, 6], ["asofja", "gfoijoi", 64], [353, 64, "alksfjhaf"]);

	const mapArr = arrUser.map(e => e.length - 1 % 3 == 0)
	console.log(mapArr);
}

showRowEvenColOdd();