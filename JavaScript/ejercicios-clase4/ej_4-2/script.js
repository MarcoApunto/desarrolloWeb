var phrase = prompt("Dime una frase: ");
var c = prompt("Dime una letra: ");

var trigger = 0;
var count = 0;
while (trigger <= (phrase.length - 1)) {
	if (c == phrase[trigger])
		count++;
	trigger++;
}

alert("La letra " + c + " aparece " + count + " veces.");