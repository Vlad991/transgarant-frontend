export function swap(arr) {
	if (!arr.length) {
		return arr;
	}

	if (Array.isArray(arr[0])) {
		return arr.map(item => [item[1], item[0]]);
	} else {
		return [arr[1], arr[0]];
	}
}