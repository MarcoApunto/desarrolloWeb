function contentOne() {
	let idContent = document.getElementById("contenidos_1");
	let idLink = document.getElementById("enlace_1")

	if (idContent.style.display == "none") {
		idContent.removeAttribute("style", "display: none;");
		idContent.setAttribute("style", "display: inline;");
		idLink.innerHTML = "Ocultar contenidos";
	} else {
		idContent.setAttribute("style", "display: none;");
		idLink.innerHTML = "Mostrar contenidos";
	}
}

function contentTwo() {
	let idContent = document.getElementById("contenidos_2");
	let idLink = document.getElementById("enlace_2")

	if (idContent.style.display == "none") {
		idContent.removeAttribute("style", "display: none;");
		idContent.setAttribute("style", "display: inline;");
		idLink.innerHTML = "Ocultar contenidos";
	} else {
		idContent.setAttribute("style", "display: none;");
		idLink.innerHTML = "Mostrar contenidos";
	}
}

function contentThree() {
	let idContent = document.getElementById("contenidos_3");
	let idLink = document.getElementById("enlace_3")

	if (idContent.style.display == "none") {
		idContent.removeAttribute("style", "display: none;");
		idContent.setAttribute("style", "display: inline;");
		idLink.innerHTML = "Ocultar contenidos";
	} else {
		idContent.setAttribute("style", "display: none;");
		idLink.innerHTML = "Mostrar contenidos";
	}
}