
//Me traigo mi db firestore
import { getTasks, insertTask, deleteTask, updateTask } from "./utils.js";
//console.log(db);
//Extraigo todos los documentos de tasks y creo tarjetas con ellos
await getTasks();


//Obtenemos el form y capturamos el submit
const form = document.getElementById("task-form");
form.addEventListener("submit", e => {
	e.preventDefault();
	const task = {
		title: form["task-title"].value,
		description: form["task-description"].value
	}

	insertTask(task);
})

const buttonsCardD = document.getElementsByName("delete");
buttonsCardD.forEach(element => {
	element.addEventListener("click", () => {
		var divDelete = element.parentNode.parentNode;
		document.body.removeChild(divDelete);
		//console.log("Estoy borrando la tarea: "+element.id);
		deleteTask(element.id);
	})
});

const updateBtn = document.getElementsByName("update")
console.log(updateBtn)
updateBtn.addEventListener("submit", e => {
	
	updateTask();
})
