function countNumbers() {

	let cn = prompt("Introduzca un número a contar: ");
	let count = 0;
	while (cn != 0) {
		cn = Math.floor(cn / 10);
		count++;
	}
	alert("El número tiene " + count + " dígitos.");
}

function undln () {

	let n = prompt("Introduzca una cantidad de _ quieres: ")
	let ret = "";
	while (n != 0) {
		ret += "_ ";
		n -= 1;
	}
	alert(ret);
}

function sequence() {

	let seq = "";
	for (let i = 0; i < 12; i++){
		if (i % 3 == 0) {
			seq += "*";
		} else if (i % 3 == 1) {
			seq += "+";
		} else {
			seq += "_";
		}
	}
	alert(seq);
}

function tree() {
	alert("*\n**\n***\n****\n*****");
}