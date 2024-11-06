/*
DATO ESTABLECIDO:
["aslkdja", 4, 6], ["asofja", "gfoijoi", 64], [353, 64, "alksfjhaf"]
*/

function showRowEvenColOdd() {

	const arrReq = [[1, "Hola", 3], [4, 4, 4], [5, "Adios", 5]];

	arrReq.forEach((path, i) => {
		path.forEach((elem, j) => {
			if (i % 2 == 0 && j % 2 != 0 && typeof(elem) == "string") {
				alert(elem);
			}
		});
	});
}

showRowEvenColOdd();