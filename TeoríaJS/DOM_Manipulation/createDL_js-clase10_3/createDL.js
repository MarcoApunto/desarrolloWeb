function createNodeList(type, text) {
	let nodeText = document.createTextNode(text);
	let node;
	if (type == "dt")
		node = document.createElement("dt");
	else
		node = document.createElement("dd");
	node.appendChild(nodeText);
	return node;
}

function createList(data) {
	let nodeDl = document.createElement("dl");
	for (let i = 0; i < data.length; i++) {
		nodeDl.appendChild(createNodeList("dt", data[i][0]));
		nodeDl.appendChild(createNodeList("dd", data[i][1]));
	}
	return nodeDl;
}
const dataList = [
	["Casa", "Lugar para vivir"],
	["Arbol", "Planta que da sombra"],
	["Café", "Líquido para no dormir"],
];

document.body.appendChild(createList(dataList));