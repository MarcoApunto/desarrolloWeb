/*function delLastDiv() {
	let dogContainer = document.getElementById("dog-container")
	let divCount = dogContainer.getElementsByTagName("div").length
	console.log(divCount)
	if (divCount >= 20) {
		console.log("ya hay 20 perros");
		dogContainer.getElementsByTagName("div")[divCount - 2].remove();
	}

} */

function delPrevImg() {

	let btnContainer = document.getElementById("btn-container")
	if (btnContainer && btnContainer.getElementsByTagName("img").length > 1)
		btnContainer.getElementsByTagName("img")[0].remove()
}

function createDog(url) {
	let dogContainer = document.getElementById("dog-container")
	let divCount = dogContainer.getElementsByTagName("div").length
	console.log(divCount)

	if (divCount < 21) {
		let divContent = document.createElement("div");

		let img = document.createElement('img');
		img.src = url;
	
		divContent.appendChild(img)
		document.getElementById("dog-container").appendChild(divContent);
	} else {
		dogContainer.getElementsByTagName("div")[divCount - 1].remove();
		alert("Has superado 20 creaciones.")
	}


}

function getDog() {
	let imgFirst = document.createElement("img");

	fetch('https://dog.ceo/api/breeds/image/random')
		.then(res => res.json())
		.then(json => {
			console.log(json.message);

			imgFirst.src = json.message;
			document.getElementById("btn-container").appendChild(imgFirst);

			delPrevImg();

			createDog(json.message);
		});
	//console.log(result1);
}

getDog();
