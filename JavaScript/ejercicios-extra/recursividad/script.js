/*
	Haz una función que obtenga el maximo numero de un array
*/
function maxNumber(arr, i = 0) {
	if (arr[i])
		return arr[i];
	else {
		if (arr[i] > maxNumber(arr, i + 1)) {
			let max = arr[i];
			return max;
		}
	}
}

const arr = [2, 41, 7, 9,];
console.log(maxNumber(arr));

/*
function maxArr(arr, pos, max) {
	if (pos == arr.length) {
		return max;
	} else {
		if (max < arr[pos]) {
			console.log("arr: " + arr);
			console.log("pos: " + pos);
			console.log("max: " + max);
			console.log("arr[pos]: " + arr[pos]);
			return maxArr(arr, pos+1, arr[pos]);
		} else {
			console.log("arr: " + arr);
			console.log("pos: " + pos);
			console.log("max: " + max);
			console.log("arr[pos]: " + arr[pos]);
			return maxArr(arr, pos + 1, max);
		}
	}
}

let a = [7, 3, 8, 9]
console.log(maxArr(a, 0, -Infinity));

}*/