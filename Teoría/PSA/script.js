// Contenido de las "páginas"
const pages = {
	home: {
		title: 'Bienvenido a la página de Inicio',
		content: 'Este es el contenido de inicio.',
		button: 'Incrementar contador'
	},
	about: {
		title: 'Acerca de nosotros',
		content: 'Esta es la página sobre nosotros.',
		button: 'Mostrar mensaje'
	},
	contact: {
		title: 'Contacto',
		content: 'Puedes contactarnos en contacto@ejemplo.com.',
		button: 'Enviar'
	}
};

function navigate(page) {
	const contentDiv = document.getElementById('content');

	while (contentDiv.firstChild) {
		contentDiv.removeChild(contentDiv.firstChild);
	}

	const messageArea = document.getElementById('messageArea');
	while (messageArea.firstChild) {
		messageArea.removeChild(messageArea.firstChild);
	}

	const pageContent = pages[page];

	if (pageContent) {
		const tH1 = document.createElement('h1');
		tH1.textContent = pageContent.title;
		contentDiv.appendChild(tH1);

		const description = document.createElement('p');
		description.textContent = pageContent.content;
		contentDiv.appendChild(description);

		if (page === 'home') {
			initHomePage();
		} else if (page === 'about') {
			initAboutPage();
		} else if (page === 'contact') {
			initContactPage();
		}
	} else {
		const errorMessage = document.createElement('h1');
		errorMessage.textContent = '404';
		contentDiv.appendChild(errorMessage);

		const errorDescription = document.createElement('p');
		errorDescription.textContent = 'La página no existe.';
		contentDiv.appendChild(errorDescription);
	}
}

function initHomePage() {
	let counter = 0;

	const counterDisplay = document.createElement('p');
	counterDisplay.textContent = `Contador: ${counter}`;
	document.getElementById('content').appendChild(counterDisplay);

	const button = document.createElement('button');
	button.textContent = 'Incrementar contador';
	document.getElementById('content').appendChild(button);

	button.onclick = function () {
		counter++;
		counterDisplay.textContent = `Contador: ${counter}`;
	};
}

function initAboutPage() {
	const button = document.createElement('button');
	button.textContent = 'Mostrar mensaje';
	document.getElementById('content').appendChild(button);

	button.onclick = function () {
		//showMessage('¡Gracias por visitar la página de Acerca de!');
		let pMessage = document.getElementById('messageArea');
		pMessage.setAttribute('style', 'display: block; margin-top: 20px; font-size: 18px; color: green;');
		pMessage.textContent = '¡Gracias por visitar la página de Acerca de!';
	};
}

function initContactPage() {
	const emailContainer = document.createElement('div');
	emailContainer.style.display = 'flex';
	const nameInput = document.createElement('input');
	nameInput.type = 'text';
	nameInput.placeholder = 'Tu nombre';
	emailContainer.appendChild(nameInput);

	const emailInput = document.createElement('input');
	emailInput.type = 'email';
	emailInput.placeholder = 'Tu email';
	emailContainer.appendChild(emailInput);

	const sendButton = document.createElement('button');
	sendButton.textContent = 'Enviar';
	sendButton.type = 'button';
	sendButton.id = 'sendButton';

	emailContainer.appendChild(sendButton);

	sendButton.addEventListener('click', function () {
		alert(`Formulario enviado por ${nameInput.value} con email: ${emailInput.value}`);
	});

	document.getElementById('content').appendChild(emailContainer);
}

function showMessage(message) {
	const messageArea = document.getElementById('messageArea');

	while (messageArea.firstChild) {
		messageArea.removeChild(messageArea.firstChild);
	}

	const messageNode = document.createElement('p');
	messageNode.textContent = message;
	messageArea.appendChild(messageNode);

	messageArea.style.display = 'block';
}

navigate('home');
