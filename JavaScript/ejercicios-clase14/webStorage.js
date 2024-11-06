//- Botón para borrar todos los contactos guardados en Local Storage
function delAllLocalStrg() {
	let usersData = JSON.parse(localStorage.getItem("users"));

	if (!usersData) {
		alert("NO HAY DATOS QUE BORRAR")
	} else {
		localStorage.clear();
		alert("TODOS LOS DATOS HAN SIDO BORRADOS");
	}
}

// - Botón para borrar un contacto en concreto de Local Storage, buscando por email
function clearUser() {
	let usersData = JSON.parse(localStorage.getItem("users"));

	if (!usersData)
		alert("NO HAY DATOS QUE BORRAR")
	else {
		let emailFinder = prompt("¿Que usuario quieres borrar? (Inserte e-mail).\nRecuerde que en el momento que aceptes, la acción es inexorable. ❌");

		usersData.forEach((elem, i) => {
			if (elem["email"] == emailFinder) {
				console.log(i);
				alert("Se va a proceder la eliminación del usuario " + JSON.stringify(elem["name"]) + " con el email asociado " + JSON.stringify(elem["email"]) + ". 🗑️");
				usersData.splice(i, 1);
				localStorage.setItem("users", JSON.stringify(usersData));
			}
		});
	}
}

// Will put a title <h3>
function titleH3(father, title) {
	let titleH3 = document.createElement("h3");
	titleH3.textContent = title;

	father.appendChild(titleH3);
}

// - Mostrar los datos de los contactos guardados usando herramientas de DOM
function showUsers() {
	event.preventDefault()
	//Get the items of the Local Storage (JSON.parse)
	let usersData = JSON.parse(localStorage.getItem("users"));
	//- Now we have an object for iterate
	if (!usersData) {
		alert("NO HAY DATOS GUARDADOS");
	} else {
		//Iterate the object and add the data (id.value = nameForm.value, emailForm.value and messageForm.value) to a <p> 
		usersData.forEach((elem, i) => {
			let divMain = document.createElement("div");

			let pName = document.createElement("p");
			pName.textContent = "Nombre: " + JSON.stringify(elem["name"]);

			let pEmail = document.createElement("p");
			pEmail.textContent = "Email: " + JSON.stringify(elem["email"]);

			let pMessage = document.createElement("p");
			pMessage.textContent = "Message: " + JSON.stringify(elem["message"]);

			titleH3(divMain, "User " + (i + 1));
			divMain.appendChild(pName);
			divMain.appendChild(pEmail);
			divMain.appendChild(pMessage);

			document.body.appendChild(divMain);
		});
	}
}

// - Guardar en Local Storage los datos de contacto enviados de cada usuario +  uso de `JSON.parse()` y `JSON.stringify()` para guardar muchos datos usando la misma clave
function localStrg() {
	let formUser = {
		name: document.getElementById("nameForm").value,
		email: document.getElementById("emailForm").value,
		message: document.getElementById("messageForm").value,
	}

	let users = localStorage.getItem("users");
	if (users) {
		users = JSON.parse(users);
	} else {
		users = [];
	}

	users.push(formUser);
	localStorage.setItem("users", JSON.stringify(users));
}

// Put <br /> how many times we like with the parameter manylb
function lineBreak(form, manylb) {

	for (let i = 0; i < manylb; i++) {
		let lb = document.createElement("br");
		form.appendChild(lb)
	}
}

//  Crear un formulario de contacto con los siguientes campos:  Nombre, Email, Mensaje
function createForm() {
	let form = document.createElement("form");

	let lblName = document.createElement("label");
	lblName.setAttribute("for", "nameForm");
	lblName.textContent = "Nombre: ";

	let lblEmail = document.createElement("label");
	lblEmail.setAttribute("for", "emailForm");
	lblEmail.textContent = "Email: ";

	let lblMsg = document.createElement("label");
	lblMsg.setAttribute("for", "messageForm");
	lblMsg.textContent = "Mensaje: ";

	let iptName = document.createElement("input");
	iptName.type = "text";
	iptName.name = "nombre";
	iptName.id = "nameForm";

	let iptEmail = document.createElement("input");
	iptEmail.type = "text";
	iptEmail.name = "e-mail";
	iptEmail.id = "emailForm";

	let txtMsg = document.createElement("textarea");
	txtMsg.cols = "30";
	txtMsg.rows = "7";
	txtMsg.id = "messageForm";

	let iptSend = document.createElement("input");
	iptSend.type = "submit";
	iptSend.id = "btnSubmit";
	iptSend.value = "Guardar Datos";
	iptSend.setAttribute("onclick", "localStrg();");

	let btnShowUsers = document.createElement("button");
	btnShowUsers.setAttribute("onclick", "showUsers();");
	btnShowUsers.textContent = "Mostrar Usuarios";

	let btnClearUser = document.createElement("button");
	btnClearUser.setAttribute("onclick", "clearUser();");
	btnClearUser.textContent = "Borrar Usuario (vía email)";

	let btnClearAll = document.createElement("button");
	btnClearAll.setAttribute("onclick", "delAllLocalStrg();");
	btnClearAll.textContent = "Eliminar Todos los Datos Guardados";

	titleH3(form, "Manejo de Local Storage");
	form.appendChild(lblName);
	lineBreak(form, 1);
	form.appendChild(iptName);
	lineBreak(form, 2);
	form.appendChild(lblEmail);
	lineBreak(form, 1);
	form.appendChild(iptEmail);
	lineBreak(form, 2);
	form.appendChild(lblMsg);
	lineBreak(form, 1);
	form.appendChild(txtMsg);
	lineBreak(form, 2);
	form.appendChild(iptSend)
	lineBreak(form, 2);
	form.appendChild(btnShowUsers);
	lineBreak(form, 2);
	form.appendChild(btnClearUser);
	lineBreak(form, 2);
	form.appendChild(btnClearAll);

	document.body.appendChild(form);
}

createForm();
