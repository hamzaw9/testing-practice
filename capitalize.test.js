const capitalize = require("./capitalize");

describe("Capitalize String", () => {
  it("Should correctly capitalize string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("", () => {
    expect(() => {
      capitalize(2);
    }).toThrow("Integers are not allowed!");
  });
});
