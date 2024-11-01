function validateEmail(email) {
	const isString = typeof email === "string";
	const includeSnabelA = email.includes("@");
	const includeDot = email.includes(".");
	console.log(isString, includeSnabelA, includeDot);
	return isString && includeSnabelA && includeDot;
}
module.exports = { validateEmail };
