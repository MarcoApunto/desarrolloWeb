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
	["Red Telefónica Conmutada (RTC)", "La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem."],
	["Red Digital de Servicios Integrados (RDSI)", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI."],
	["Línea de Abonado Digital Asimétrica (ADSL)", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL."],
	["Fibra Óptica", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."]
];

document.body.appendChild(createList(dataList));