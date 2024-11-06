class Printburger {
	constructor(start, middle) {
		this.start = start;
		this.middle = middle;
	}

	createBurguer() {
		// 10 - 4 = 2 => " " " " then print + + + + next another " " " ";
		let burger = "";
		let space = " ";
		let print = "+";

		let aux = 0;
		for (let lu = 1; lu <= ((this.middle - this.start) / 2); lu++) {
			for (let iu = 1; iu <= this.middle; iu++) {
				if (iu <= (((this.middle - this.start) / 2) - aux) || iu > ((((this.middle - this.start) / 2) + this.start) + aux)) {
					burger += space;
				}
				else if (iu >= (this.start - aux))
					burger += print;
			}
			burger += "\n";
			aux++;
		}
		for (let ld = 0; ld <= ((this.middle - this.start) / 2); ld++) {
			for (let id = 1; id <= this.middle; id++) {
				if (id <= (((this.middle - this.start) / 2) - aux) || id > ((((this.middle - this.start) / 2) + this.start) + aux)) {
					burger += space;
				}
				else if (id >= (this.start - aux))
					burger += print;
			}
			burger += "\n";
			aux--;
		}
		return burger;
	}
}


function buttonIndex() {
	const data = new Printburger(4, 10);

	alert(data.createBurguer());
}
