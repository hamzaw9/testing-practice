const reverseString = require("./reverseString");

describe("reverseString function", () => {
  it("should reverse a string correctly", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("should reverse a string with spaces", () => {
    expect(reverseString("John Wick")).toBe("kciW nhoJ");
  });

  it("should throw an error for an empty string", () => {
    expect(() => {
      reverseString("");
    }).toThrow("String should not be empty");
  });
});
