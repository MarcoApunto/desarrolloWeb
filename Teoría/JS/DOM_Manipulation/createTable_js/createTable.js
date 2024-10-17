function createTd(texto) {
	let nodoText = document.createTextNode(texto);
	let nodotd = document.createElement("td");
	nodotd.style.border = "1px solid red";
	nodotd.appendChild(nodoText);
	return nodotd;
}

function createTr(datosTd) {
	let nodoTr = document.createElement("tr");
	for (let i = 0; i < datosTd.length; i++) {
		nodoTr.appendChild(createTd(datosTd[i]));
	}
	return nodoTr;
}

function createTable(datosTr) {
	let nodoTable = document.createElement("table");
	nodoTable.style.borderCollapse = "collapse";
	for (let i = 0; i < datosTr.length; i++) {
		nodoTable.appendChild(createTr(datosTr[i]));
	}
	return nodoTable;
}

const datosTr = [
					["Gofres Belgas", "Gofres Belgas con fresas", "Gofres Belgas con frutas del bosque", "Tostada Francesa", "Desayuno de la casa"], 
					["5.95", "7.95", "8.95", "4.50", "6.95"],
					["Dos de nuestros famosos Gofres belgas con abundante sirope", "Ligeros gofres belgas cubiertos de fresas y nata montada", "Ligeros gofres belgas cubiertos con frutas del bosque y nata montada", "Dos gruesas rebanadas de nuestro pan francés casero", "Dos huevos, bacon o salchicha, tostada y patatas fritas"],
					["650", "900", "900", "600", "950"]
				];

document.body.appendChild(createTable(datosTr));