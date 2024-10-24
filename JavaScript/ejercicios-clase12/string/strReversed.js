function strReversed() {
	const str = new String(prompt("Intrduzca una palabra: "));
	const strSplited = str.split(" ");

	alert(strSplited.reverse());
}

strReversed();
