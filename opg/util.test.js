const { generateText } = require("./util");

describe("Test", () => {
	test("validate user text", () => {
		// name, age
		expect(generateText(66, 3)).toBe("66 (3 years old)");
	});
});
