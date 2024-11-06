/*
PROTOTYPE:

let numbers = [2, 5, 7, 9, 1, 5];

let ret1 = new Boolean(numbers[0] > numbers[2]);
let ret2 = new Boolean(numbers[1] < numbers[3]);
let ret3 = new Boolean(numbers[4] == numbers[5]);

console.log(ret1);
console.log(ret2);
console.log(ret3);
*/

function dataNumbers() {
	let numbers = [];
	let ordinal = ["1º", "2º", "3º", "4º", "5º", "6º"];

	alert("Introducirás 6 números a continuación.")
	for (let i = 0; i < 6; i++) {
		numbers[i] = parseInt(prompt("Inserte el " + ordinal[i] + " número"));
	}
	//                             9            7
	let ret1 = new Boolean(numbers[0] > numbers[2]);
	//                             2            6
	let ret2 = new Boolean(numbers[1] < numbers[3]);
	//                             4             4
	let ret3 = new Boolean(numbers[4] == numbers[5]);
	if (ret1 && ret2 && ret3)
		console.log(numbers[0] + " > " + numbers[2] + ", " + numbers[1] + " < " + numbers[3] + " y " + numbers[4] + " = " + numbers[5] + " cumplen la regla");
	else
		console.log(numbers[0] + " > " + numbers[2]+ ", " + numbers[1] + " < " + numbers[3] + " y " + numbers[4] + " = " + numbers[5] + " no cumplen la regla")
}

dataNumbers();