function createDog(url) {
	let divContent = document.createElement("div");
	let img = document.createElement('img');
	img.src = url;

	divContent.appendChild(img)
	document.body.appendChild(divContent);
}

function getDog() {

	fetch('https://dog.ceo/api/breeds/image/random')
		.then(res => res.json())
		.then(json => {
			console.log(json.message);
			createDog(json.message);
		});
	//console.log(result1);
}

function showDog() {
	let btnShowDog = document.createElement("button");
	btnShowDog.setAttribute("onclick", "getDog();");
	btnShowDog.textContent = "Crear Perro";

	document.body.appendChild(btnShowDog);

}

showDog();

// Mirar bien json.message