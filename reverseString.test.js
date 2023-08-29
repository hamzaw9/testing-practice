const reverseString = require("./reverseString");

test("Reverses a string correctly", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Reverse string with space", () => {
  expect(reverseString("John Wick")).toBe("kicW nhoJ");
});

test("Empty string throws an error", () => {
  expect(() => {
    reverseString("");
  }).toThrow("String should not be empty");
});
