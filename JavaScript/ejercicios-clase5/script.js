function countNumbers() {

	let cn = prompt("Introduzca un número a contar: ");
	let count = 0;
	while (cn != 0) {
		cn = (cn - (cn % 10 )) / 10;
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

function diffDays (dateOne, dateTwo) {

	const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	let [dayOne, monthOne] = dateOne;
	let [dayTwo, monthTwo] = dateTwo;
	let totalDays = 0;

	totalDays += month[monthOne - 1] - dayOne;

	for (let i = monthOne + 1; i < monthTwo; i++) {
		totalDays += month[i - 1];
	}
	totalDays += dayTwo;
	
	return totalDays;
}
console.log(diffDays([16, 8], [15, 12]));
console.log(diffDays([5, 7], [17, 8]));

// De mes en mes, hecho
// Por hacer, saltos de meses: 2 a mas
