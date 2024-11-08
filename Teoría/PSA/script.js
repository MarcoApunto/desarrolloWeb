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

// Función de navegación
function navigate(page) {
	const contentDiv = document.getElementById('content');

	// Limpiar el contenido del div antes de insertar nuevo contenido
	while (contentDiv.firstChild) {
		contentDiv.removeChild(contentDiv.firstChild);
	}

	// Limpiar el área de mensajes antes de cargar nuevo contenido
	const messageArea = document.getElementById('messageArea');
	while (messageArea.firstChild) {
		messageArea.removeChild(messageArea.firstChild);
	}

	const pageContent = pages[page];

	if (pageContent) {
		// Crear elementos DOM para la página
		const title = document.createElement('h1');
		title.textContent = pageContent.title;
		contentDiv.appendChild(title);

		const description = document.createElement('p');
		description.textContent = pageContent.content;
		contentDiv.appendChild(description);

		// Llamar a la función específica para cada página
		if (page === 'home') {
			initHomePage();
		} else if (page === 'about') {
			initAboutPage();
		} else if (page === 'contact') {
			initContactPage(); // Sólo se maneja un único botón "Enviar"
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

// Funciones específicas de cada página
function initHomePage() {
	let counter = 0;

	// Crear un párrafo para el contador
	const counterDisplay = document.createElement('p');
	counterDisplay.textContent = `Contador: ${counter}`;
	document.getElementById('content').appendChild(counterDisplay);

	// Evento para incrementar el contador
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

	// Evento para mostrar el mensaje en la página de "Acerca de"
	button.onclick = function () {
		showMessage('¡Gracias por visitar la página de Acerca de!');
	};
}

function initContactPage() {
	// Crear un contenedor para el nombre y correo
	const emailContainer = document.createElement('div');
	emailContainer.style.display = 'flex'; // Usamos flex para alinearlos en fila

	// Crear campos para nombre y correo
	const nameInput = document.createElement('input');
	nameInput.type = 'text';
	nameInput.placeholder = 'Tu nombre';
	emailContainer.appendChild(nameInput);

	const emailInput = document.createElement('input');
	emailInput.type = 'email';
	emailInput.placeholder = 'Tu email';
	emailContainer.appendChild(emailInput);

	// Crear el botón "Enviar"
	const sendButton = document.createElement('button');
	sendButton.textContent = 'Enviar';
	sendButton.type = 'button'; // Es un botón de tipo "button" para evitar enviar un formulario automáticamente
	sendButton.id = 'sendButton'; // Asignamos un id al botón

	// Añadir el botón de "Enviar"
	emailContainer.appendChild(sendButton);

	// Evento de clic para el botón "Enviar"
	sendButton.addEventListener('click', function () {
		alert(`Formulario enviado por ${nameInput.value} con email: ${emailInput.value}`);
	});

	// Añadir el contenedor al contenido
	document.getElementById('content').appendChild(emailContainer);
}

// Función para mostrar el mensaje en el área de contenido
function showMessage(message) {
	const messageArea = document.getElementById('messageArea');

	// Limpiar el área de mensajes antes de agregar uno nuevo
	while (messageArea.firstChild) {
		messageArea.removeChild(messageArea.firstChild);
	}

	// Crear el nuevo mensaje
	const messageNode = document.createElement('p');
	messageNode.textContent = message;
	messageArea.appendChild(messageNode);

	// Aseguramos que el área de mensajes se muestre
	messageArea.style.display = 'block';
}

// Al cargar la página, se muestra el contenido de la página de inicio
navigate('home');
