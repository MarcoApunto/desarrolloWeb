/*
2. Crea un array a partir de las siguientes instrucciones: 
- El tamaño es solicitado al usuario
- Elemento1: 1
- Elemento2: 1
- ElementoN: ElementoN-1 + ElementoN-2
*/


function arrMethodFibonacci() {
	let arrFib = [1, 1];


	let maxInput = parseInt(prompt("Cuántos números fibonacci quieres poner? (Min. 2): "));
	if (maxInput < 2 || isNaN(maxInput)) {
		alert("Dije números, mínimo 2 😡");
		return;
	}

	arrFib = Array.from({ length: maxInput }).reduce((preValue, nextValue, i) =>
		preValue.concat(i > 1 ? preValue[i - 1] + preValue[i - 2] : i == 0 ? 1 : i), []);
	alert(arrFib);
}

arrMethodFibonacci();