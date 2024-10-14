const la = 'a';
const lb = 'b';
const lc = 'c';

var data = prompt("Inserte la letra a, b o c: ");
if (data == la) {
	alert("Se ha insertado la letra a: " + 7);
} else if (data == lb) {
	alert("Se ha insertado la letra b: " + 9);
} else if (data == lc) {
	alert("Se ha insertado la letra c: " + 101);
} else {
	alert("No se ha insertado ningún carácter indicado.");
}

// Hacerlo con switch!!!