// PARTE I - ITERACIONES ⚔️ PAIR PROGRAMMING ⚔️

/*
	ARRAYS
	1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío

	2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

	3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

	4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
*/

let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayNumerosPares = [0, 2, 4, 6, 8];

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'd']];

/*
	FUNCIONES
	5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

	6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

	7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]

	8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces

	9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
*/

function suma(n1, n2) {
	return n1 + n2;
}

function power(base, exp) {
	let ret = 1;

	if (base == 0)
		return 1;
	for (let i = 1; i <= base; i++)
		ret *= exp;

	return ret;
}

function split(str) {
	let arr = [""];
	let count = 0;
	//Para un amplio margen, no solo contar espacios
	const delim = [' ', ',', '.', ';', ':', '!', '?'];

	for (let i = 0; i < str.length; i++) {
		if (!delim.includes(str[i])) {
			arr[count] += str[i];
		}
		else {
			//Al haber varios delimitadores seguidos, hace una
			//comprobación previa, por si ha habido dos o mas delimitadores 
			//seguidos, y evitar un error de creación de un nuevo espacio de arreglo
			if (arr[count] != "") {
				count++;
				arr[count] = "";
			}
		}
	}
	return arr;
}

function repetirString(str, rep) {
	let ret = "";

	for (let i = 0; i < rep; i++) {
		ret += str;
		if (i != rep - 1)
			ret += " ";
	}
	return ret;
}

function esPrimo(number) {
	let ret = 0;

	if (number == 0 || number == 1)
		return (number + " no es un numero primo.");
	for (let i = 2; i <= number / 2; i++) {
		if (number % i == 0)
			ret = 1;
	}
	if (ret == 0)
		return (number + " es un numero primo.")
	else
		return (number + " no es un numero primo.")

}

/*
	MEZCLANDO ARRAYS Y FUNCIONES
	10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor

	11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares

	12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

	13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array

	14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
*/

function ordenarArray(arr) {
	let aux = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				aux = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = aux;
			}
		}
	}
	return arr;
}

function obtenerPares(arr) {
	let retArr = [];
	let aux = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 == 0) {
			retArr[aux] = arr[i];
			aux++;
		}
	}
	return retArr;
}

//Supongo que es "convertir" el array numerico en una cadena de texto
function pintarArray(arr){
	let arrString = "[";

	for(let i = 0; i < arr.length; i++){
		arrString += arr[i];
		if (i < arr.length - 1)
			arrString += ", "
	}
	arrString += "]";
	return arrString;
}

//POR REALIZAR DE MANERA CORRECTA
function arrayMapi(arr, fct) {
	return fct(arr);
}

// Añado .includes para no hacer uso de objetos
function eliminarDuplicados(arr) {
	let retArr = [];
	let aux = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		// Añado .includes para no hacer uso de una variable de objetos
		// que serviría de trigger booleano para verificar si x número
		// está duplicado en el array.
		if (!retArr.includes(arr[i])){
			retArr[aux] = arr[i];
			aux++
		}
	}
	return retArr;
}

// PARTE II - ITERACIONES 🏰 PROYECTO 🏰

/*
	ARRAYS
	15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

	16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

	17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

	18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
*/

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

let holaMundo = ["Hola", "Mundo"];

let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

let arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]];

/*
	FUNCIONES
	19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación

	20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division

	21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

	22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
*/

// BONUS FUNCION RESTA
function resta(n1, n2) {
	return n1 - n2;
}

function multiplicacion(n1, n2) {
	return n1 * n2;
}

function division(n1, n2) {
	return n1 / n2;
}

function esPar(number) {

	if (number % 2 == 0)
		return true;
	else
		return false;
}

/*
	MEZCLANDO ARRAY Y FUNCIONES
	23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

	24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

	25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

	26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

*/

function ordenarArray2(arr) {
	let aux = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] < arr[j + 1]) {
				aux = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = aux;
			}
		}
	}
	return arr;
}

function obtenerImpares(arr) {
	let retArr = [];
	let aux = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 == 0) {
		} else {
			retArr[aux] = arr[i];
			aux++;
		}
	}
	return retArr;
}

function sumarArray(arr) {
	let arrSum = 0;

	for (let i = 0; i < arr.length; i++){
		arrSum += arr[i];
	}
	return arrSum;
}

function multiplicarArray(arr) {
	let arrMult = 1;

	for (let i = 0; i < arr.length; i++){
		arrMult *= arr[i];
	}
	return arrMult;
}

const arrParam = [2, 3, 5];
console.log(multiplicarArray(arrParam));
