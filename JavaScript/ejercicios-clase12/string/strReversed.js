function strReversed() {
	const str = new String(prompt("Intrduzca una palabra: "));
	const strRev = str.split(' ').reverse().join(' ');

	console.log(strRev);
}

strReversed();
