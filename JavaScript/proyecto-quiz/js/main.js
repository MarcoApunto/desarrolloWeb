const pages = {
	home: {
		title: '¡QUIZ DICES!',
		content: 'ESTA ES LA PÁGINA PRINCIPAL',
	},
	question: {
		title: '¡NO VA MÁS!',
		content: 'ESTA ES LA PÁGINA DEL JUEGO PRINCIPAL',
	},
	results: {
		title: 'PUNTUACIÓN',
		content: 'ESTÁ PÁGINA ES LA QUE TE MOSTRARÁ LO MALO QUE ERES',
	}
};

function goTo(section) {
	let idSection = document.getElementById('psa-page');

	while(idSection.firstChild) {
		idSection.removeChild(idSection.firstChild);
	}

	let actualPage = pages[section];

	if (actualPage) {
		let divContent = document.createElement('div')

		let titleH1 = document.createElement('h1');
		titleH1.textContent = actualPage.title;

		let pContent = document.createElement('p');
		pContent.textContent = actualPage.content;

		divContent.appendChild(titleH1);
		divContent.appendChild(pContent);
		idSection.appendChild(divContent);

		if (section == 'home') {
			divContent.classList.add('home');
			homePage();
		}
		else if (section == 'question') {
			divContent.classList.add('question');
			questionPage();
		}
		else if (section == 'results') {
			divContent.classList.add('results');
			resultsPage();
		}
	} else {
		alert('Error 404: La página no existe.')
	}
}

function homePage() {
	let divQuestion = document.createElement('div')

	let pQuestion = document.createElement('p');
	pQuestion.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	divQuestion.appendChild(pQuestion)
	document.getElementsByClassName('home')[0].appendChild(divQuestion);
}

function questionPage() {
	let divQuestion = document.createElement('div')

	let pQuestion = document.createElement('p');
	pQuestion.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	divQuestion.appendChild(pQuestion)
	document.getElementsByClassName('question')[0].appendChild(divQuestion);
}

function resultsPage() {
	let divQuestion = document.createElement('div')

	let pQuestion = document.createElement('p');
	pQuestion.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	divQuestion.appendChild(pQuestion)
	document.getElementsByClassName('results')[0].appendChild(divQuestion);
}

goTo('home');