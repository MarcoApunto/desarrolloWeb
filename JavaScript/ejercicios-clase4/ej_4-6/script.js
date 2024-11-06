const arr = ["pepe", "moises", "aaron", "jimena", "hugo", "bea", "zugamendi"];
alert("Valor original: " + arr);
const arrComp = [...arr];
arrComp.sort;

let aux = "";
for (let i = 0; i <= arr.length - 1; i++) {
	for (let j = 0; j < arr.length - 1; j++) {
		if (arr[j] > arr[j+1]) {
			aux = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = aux;
		}
	}
}

alert("ORDENADO ALFABETICAMENTE: \n" + arr + "\nSOLUCION CON .sort(): \n" + arrComp.sort());