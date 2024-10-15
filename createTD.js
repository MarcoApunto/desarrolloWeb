function createTD(texto){
	let nodoText = document.createTextNode(texto);
	let nodotd = document.createElement("td");
	nodotd.appendChild(nodoText);
	return nodotd;
}

document.body.appendChild(createTD("Hola"));