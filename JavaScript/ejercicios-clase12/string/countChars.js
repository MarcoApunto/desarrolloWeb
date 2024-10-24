function countChars() {
	const str = new String(prompt("Intrduzca una palabra: "));
	const strSplited = str.split(" ");
	let aux = 0;

	for (let i = 0; i < strSplited.length; i++) {
		if (strSplited[i].length == 2){
		}
		else {
			for (let j = 0; j < strSplited[i].length; j++) {
				if (strSplited[i][j] == 'a')
					aux++;
			}
		}
	}
	console.log(strSplited);
	alert("En las palabras impares he contado " + aux + " letras a.")
}

countChars();
