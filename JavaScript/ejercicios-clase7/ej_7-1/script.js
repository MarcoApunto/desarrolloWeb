function countLinks() {
	let links = document.getElementsByTagName("a");
	let ret = 0;
	for (let i = 0; i < links.length; i++) {
		ret++;
	}
	alert("Hay " + ret + " enlaces");
}

function stlLink() {
	let links = document.getElementsByTagName("a");
	if (links.length < 2) {
		alert("No hay enlaces suficientes.");
		return;
	}
	let count = 0;
	while (count < links.length) {
		count++;
	}
	alert(links[count - 1].href);
}

function countHref() {
	let links = document.getElementsByTagName("a");
	let count = 0;
	for (let i = 0; i < links.length; i++) {
		if (links[i].href == "http://prueba/") {
			count++;
		}
	}
	alert("Hay " + count + " enlaces que llevan a http://prueba");
}

function pLinks() {
	let p = document.getElementsByTagName("p");
	let pTres = "";
	let a = 0;
	if (p.length >= 3) {
		pTres = p[2];
		a = pTres.getElementsByTagName("a");
		alert("Hay " + a.length + " enlaces en el 3er párrafo");
	} else {
		alert("No hay suficientes enlances.")
	}
}
