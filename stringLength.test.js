const stringLength = require("./stringLength");

describe("stringLength function", () => {
  it("should return length 5 for 'hello'", () => {
    expect(stringLength("hello")).toBe(5);
  });

  it("should throw an error for an empty string", () => {
    expect(() => {
      stringLength("");
    }).toThrow("String length must be between 1 and 10 characters");
  });

  it("should throw an error for a string with length greater than 10", () => {
    expect(() => {
      stringLength("this string is long");
    }).toThrow("String length must be between 1 and 10 characters");
  });
});
