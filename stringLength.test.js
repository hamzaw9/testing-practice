const stringLength = require("./stringLength");

test("hello length equal to 5", () => {
  expect(stringLength("hello")).toBe(5);
});

test("Empty string throws an error", () => {
  expect(() => {
    stringLength("");
  }).toThrow("String length must be between 1 and 10 characters");
});

test("String length gretaer than 10 throws an error", () => {
  expect(() => {
    stringLength("this string is long");
  }).toThrow("String length must be between 1 and 10 characters");
});
