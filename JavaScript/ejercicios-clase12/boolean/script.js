/*
PROTOTYPE:

let arrayUser = [2, 5, 7, 9, 1, 5];

let ret1 = new Boolean(arrayUser[0] > arrayUser[2]);
let ret2 = new Boolean(arrayUser[1] < arrayUser[3]);
let ret3 = new Boolean(arrayUser[4] == arrayUser[5]);

console.log(ret1);
console.log(ret2);
console.log(ret3);
*/

function dataNumbers() {
	let numbers = [];
	let ordinal = ["1º", "2º", "3º", "4º", "5º", "6º"];

	alert("Introducirás 6 números a continuación.")
	for(let i= 0; i < 6; i++) {
		numbers[i] = prompt("Inserte el " + ordinal[i] + " número")
	}

	alert(numbers[0] + " > " + numbers[2] + " es: " + Boolean(numbers[0] > numbers[2]));
	alert(numbers[1] + " < " + numbers[3] + " es: " + Boolean(numbers[1] < numbers[3]));
	alert(numbers[4] + " > " + numbers[5] + " es: " + Boolean(numbers[4] == numbers[5]));
}

dataNumbers();