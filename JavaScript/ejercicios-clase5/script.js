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

function monthCount (monthComplete) {
	return month[monthComplete - 1];
}

function diffDays (dateOne, dateTwo) {

	let [dayOne, montOne] = dateOne;
	let [dayTwo, montTwo] = dateTwo;
}

/*
function diffDays (dateOne, dateTwo) {

	const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	let [dayOne, montOne] = dateOne;
	let [dayTwo, montTwo] = dateTwo;

	let daysMontOne = 0;
	let daysMontTwo = 0;
	for (let i = 0; i < (month[montOne - 1] - dayOne); i++) {
		daysMontOne++;
	}
	for (let j = 0; j < (month[montTwo - 1] + (dayTwo - month[montTwo - 1])); j++) {
		daysMontTwo++;
	}

	let daysTotal = daysMontOne + daysMontTwo;

	//console.log(mont[montOne - 1] - dayOne);
	//console.log(mont[montTwo - 1] + (dayTwo - mont[montTwo - 1]));
	
	return daysTotal;
}

console.log(diffDays([20, 7], [30, 8]));

// De mes en mes, hecho
// Por hacer, saltos de meses: 2 a mas
*/