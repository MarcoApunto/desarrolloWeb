function countNumbers (cn) {

	let count = 0;
	while (cn != 0) {
		cn = Math.floor(cn / 10);
		count++;
	}

	return count;
}

console.log(countNumbers(12345));

function undln (n) {

	let ret = "";
	while (n != 0) {
		ret += "_ "
		n -= 1;
	}
	return ret;
}

console.log(undln(7));

function sequence() {

	let seq = "";
	for (let i = 0; i < 12; i++){
		if (i % 3 == 0) {
			seq += "*";
		} else if (i % 3 == 1) {
			seq += "+";
		} else {
			seq += "_";
		}
	}
	return seq;
}

console.log(sequence());

function tree() {
	return "*\n**\n***\n****\n*****";
}

console.log(tree());