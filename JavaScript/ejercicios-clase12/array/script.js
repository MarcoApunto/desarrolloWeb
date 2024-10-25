/*
DATO ESTABLECIDO:
["aslkdja", 4, 6], ["asofja", "gfoijoi", 64], [353, 64, "alksfjhaf"]
*/

function showRowEvenColOdd() {

	alert("Introduzca a continuación 9 datos, sean númericos o palabras.")
	const arrUser = new Array(
		[prompt("Introduzca el 1º: "), prompt("Introduzca el 2º: "), prompt("Introduzca el 3º: ")],
		[prompt("Introduzca el 4º: "), prompt("Introduzca el 5º: "), prompt("Introduzca el 6º: ")],
		[prompt("Introduzca el 7º: "), prompt("Introduzca el 8º: "), prompt("Introduzca el 9º: ")]
	);

	arrUser.forEach((path, i) => {
		path.forEach((elem, j) => {
			if (i % 2 == 0 && j % 2 != 0) {
				alert(elem);
			}
		});
	});
}

showRowEvenColOdd();