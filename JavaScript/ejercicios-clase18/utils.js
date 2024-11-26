// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBksyxxjy3l0Fh0qxrEkWiMIATyNN26weQ",
	authDomain: "ej-18-form.firebaseapp.com",
	databaseURL: "https://ej-18-form-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "ej-18-form",
	storageBucket: "ej-18-form.firebasestorage.app",
	messagingSenderId: "368282230342",
	appId: "1:368282230342:web:7a7720c2287fcebbbe7447"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getTasks() {
	const querySnapshot = await getDocs(collection(db, "tasks"));
	querySnapshot.forEach((doc) => {
		createCard(doc.id, doc.data());
	});
}

function createCard(id, task) {
	const principalDiv = document.createElement('div');
	principalDiv.setAttribute("class", "card bg-light mb-3");
	principalDiv.style = "max-width: 20rem;";
	principalDiv.setAttribute("name", id);

	const headerDiv = document.createElement('div');
	const contentDiv = document.createTextNode("Id: " + id);
	headerDiv.setAttribute("class", "card-header");
	headerDiv.appendChild(contentDiv);
	principalDiv.appendChild(headerDiv);

	const bodyDiv = document.createElement('div');
	const pTitle = document.createElement("p");
	const pTitleText = document.createTextNode("Title: " + task.title);
	const hr = document.createElement('hr');
	const pDesc = document.createElement("p");
	const pDescText = document.createTextNode("Description: " + task.description);

	pTitle.appendChild(pTitleText);
	bodyDiv.appendChild(pTitle);
	bodyDiv.appendChild(hr);
	pDesc.appendChild(pDescText);
	bodyDiv.appendChild(pDesc);
	bodyDiv.appendChild(hr);

	const input = document.createElement("input");
	input.type = "button";
	input.value = "Borrar Tarea";
	input.setAttribute("name", "delete");
	input.setAttribute("id", id);
	bodyDiv.appendChild(input);

	principalDiv.appendChild(bodyDiv);
	document.body.appendChild(principalDiv);
	const br = document.createElement("br");
	document.body.appendChild(br);
}

function generateRandomIdTask(num) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < num; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export async function insertTask(task) {
	await setDoc(doc(db, "tasks", generateRandomIdTask(20)), task);
	alert("Insertada la tarea: " + task.title);
}

export async function deleteTask(id) {
	await deleteDoc(doc(db, "tasks", id));
	alert("Borrada la tarea: " + id);
}