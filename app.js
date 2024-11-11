import "./styles.css";
const { generateText, createElement, isNonEmptyString, isNonEmptyNumber } = require("./opg/util");
const { add } = require("./opg/calculate");
const { fetchData, fetchDataCatchError } = require("./opg/fetchData");

const initApp = () => {
	// Initializes the app, registers the button click listener
	const newUserButton = document.querySelector("#btnAddUser");
	newUserButton.addEventListener("click", addUser);
	// console.log(add(`e3`, 4));

	// fetchData("/api/users");
	fetchDataCatchError("/api/users");
};

const addUser = () => {
	// Fetches the user input, creates a new HTML element based on it
	// and appends the element to the DOM
	const newUserNameInput = document.querySelector("input#name");
	const newUserAgeInput = document.querySelector("input#age");

	if (!isNonEmptyString(newUserNameInput.value) || !isNonEmptyNumber(newUserAgeInput.value)) {
		return;
	}

	const userList = document.querySelector(".user-list");
	const outputText = generateText(newUserNameInput.value, newUserAgeInput.value);
	const element = createElement("li", outputText, "user-item");
	userList.appendChild(element);
};

// Start the app!
initApp();
