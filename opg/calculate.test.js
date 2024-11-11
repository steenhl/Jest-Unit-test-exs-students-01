const { add, minus, multiple, divade, parseFloatIsNumber } = require("./calculate");

describe("simple math", () => {
	test("add", () => {
		expect(add(2, 5)).toBe(7);
	});
	test("add throw error", () => {
		expect(() => add(NaN, 3)).toThrow("No");
	});
});
