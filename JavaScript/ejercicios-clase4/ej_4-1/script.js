var n = parseInt(prompt("Inserte un número: "));
var n2 = parseInt(prompt("Inserte otro número: "));
var n3 = parseInt(prompt("Inserte un último número: "));

var minor = 0;
if (n < n2 && n < n3) {
	minor = n;
} else if (n2 < n && n2 < n3) {
	minor = n2;
} else {
	minor = n3;
}

alert(minor);
