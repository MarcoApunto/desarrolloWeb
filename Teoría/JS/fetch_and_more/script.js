/*
	Training
		fetch: send the promise like as a param
		innerHTML: how powerful is, rendering a lot of 'text' directly to the HTML Doc
		eventListener: getting the value and using it for render a other data from the promise fulfilled
*/

const div = document.getElementById('main')

const getApi = fetch('https://ghibliapi.vercel.app/films')

getApi.then(res => res.json())
	.then(data => {
		div.innerHTML = doBody(data);
		getDescription(data);
	});

function doBody(movie) {
	let title = movie.map(elem => `<option value=${elem.id}>${elem.title}</option>`).join('');

	return `
			<select id='movies'>
				<option disabled selected>Choose a movie</option>
				${title}
			</select>
			<div id='description'></div>
			`
}

function getDescription(data) {
	let getMovies = document.getElementById('movies');
	let getDescription = document.getElementById('description')

	getMovies.addEventListener('change', (event) => {
		// Get the attribute of the element select => value as event
		let selectedOption = event.target.value;
		let selectedMovie;

		for (let i = 0; i < data.length; i++) {
			if (data[i].id == selectedOption) {
				selectedMovie = data[i];
				break;
			}
		}

		if (getDescription.firstChild)
			getDescription.removeChild(getDescription.firstChild)

		if (selectedMovie) {
			getDescription.innerHTML = 
			'<h2>'
			+ selectedMovie.original_title_romanised 
			+ ' <br />(' 
			+ selectedMovie.original_title
			+ ' )</h2>'
			+ '<p>'
			+ selectedMovie.description
			+ '</p>'
			+ `<img src="${selectedMovie.movie_banner}">`
		}
	})
}


