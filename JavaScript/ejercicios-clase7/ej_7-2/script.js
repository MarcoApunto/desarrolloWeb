/*
Completar la función muestra de JavaScript para que realice lo siguiente:

	Ocultar el enlace Seguir leyendo.
	Mostrar el texto incluido dentro del span

/* 
} */
function switchMore() {
	let hidden = document.getElementById("adicional");
	let more = document.getElementById("enlace1");
	let less = document.getElementById("enlace2");
	more.setAttribute("class", "visible");
	less.setAttribute("onclick", "switchLess()");

	if (more.classList.contains("visible")) {
		more.classList.remove("visible");
		more.classList.add("oculto");
		hidden.classList.remove("oculto");
		hidden.classList.add("visible");
		less.classList.remove("oculto");
		less.classList.add("visible");
	} else {
		more.classList.remove("oculto");
		hidden.classList.remove("visible");
		hidden.classList.add("oculto");
		less.classList.remove("visible");
		less.classList.add("oculto");
	}
}

function switchLess() {
	let hidden = document.getElementById("adicional");
	let more = document.getElementById("enlace1");
	let less = document.getElementById("enlace2");

	if (less.classList.contains("visible")) {
		less.classList.remove("visible");
		less.classList.add("oculto");
		hidden.classList.remove("visible");
		hidden.classList.add("oculto");
		more.classList.remove("oculto");
		more.classList.add("visible");
	} else {
		less.classList.remove("oculto");
		hidden.classList.remove("oculto");
		hidden.classList.add("visible");
		more.classList.remove("visible");
		more.classList.add("oculto");
	}
}

