function generateText(name, age) {
	// Returns output text
	return `${name} (${age} years old)`;
}
function createElement(type, text, className) {
	// Creates a new HTML element and returns it
	const newElement = document.createElement(type);
	newElement.classList.add(className);
	newElement.textContent = text;
	return newElement;
}

function isNonEmptyString(value) {
	return typeof value === "string" && value.trim().length > 1;
}

function isNonEmptyNumber(value) {
	return typeof Number(value) === "number" && 0 + value.trim().length > 0;
}

module.exports = { isNonEmptyString, isNonEmptyNumber, generateText, createElement };
