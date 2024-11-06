const username = "Marco"
const password = "Ferreira"
var user = "";
var pass = "";

count = 2;
alert("Bienvenido! (Tienes 3 intentos)");
do {
	user = prompt("Username: \n(Pista: Marco)");
	pass = prompt("Password: \n(Pista: Ferreira)");
	if (username == user && password == pass) {
		alert("Correcto!");
		break;
	} else if (username != user) {
		alert("Username incorrecto");
	} else {
		alert("Password incorrecto");
	}
	if (count == 0) {
		alert("El sistema ha sido bloqueado por haber realizado 3 intentos fallidos");
		break;
	}
	alert("Quedan " + count + " intentos");
	count--;
} while (count < 3);