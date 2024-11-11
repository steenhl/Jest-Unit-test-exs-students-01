function parseFloatIsNumber(a) {
	const numA = parseFloat(a);
	return Number.isNaN(numA);
}

function add(a, b) {
	if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
		const numA = parseFloat(a);
		const numB = parseFloat(b);
		return numA + numB;
	} else {
		throw new Error("Not a number");
	}
}
function minus(a, b) {
	if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
		const numA = parseFloat(a);
		const numB = parseFloat(b);
		return numA - numB;
	} else {
		throw new Error("NOt a number");
	}
	//return a - b;
}
function multiple(a, b) {
	return a * b;
}
function divade(a, b) {
	return a / b;
}

module.exports = { add, minus, multiple, divade, parseFloatIsNumber };
