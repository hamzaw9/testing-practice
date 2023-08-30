const Calculator = require("./calculator");

describe("Calculator", () => {
  const calculator = new Calculator();

  describe("Addition", () => {
    it("should correctly add two +ve numbers", () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    it("should correctly add one +ve and one -ve number", () => {
      expect(calculator.add(3, -5)).toBe(-2);
    });

    it("should correct add two -ve numbers", () => {
      expect(calculator.add(-7, -2)).toBe(-9);
    });
  });

  describe("Subtraction", () => {
    it("should correctly subtract two +ve numbers", () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it("should correctly subtract one +ve and one -ve number", () => {
      expect(calculator.subtract(3, -5)).toBe(8);
    });

    it("should correct subtract two -ve numbers", () => {
      expect(calculator.subtract(-7, -2)).toBe(-5);
    });
  });

  describe("Multiplication", () => {
    it("should correctly multiply two +ve numbers", () => {
      expect(calculator.multiply(5, 3)).toBe(15);
    });

    it("should correctly multiply one +ve and one -ve number", () => {
      expect(calculator.multiply(3, -5)).toBe(-15);
    });

    it("should correct multiply two -ve numbers", () => {
      expect(calculator.multiply(-7, -2)).toBe(14);
    });
  });

  describe("Division", () => {
    it("should correctly divide two +ve numbers", () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    it("should correctly divide one +ve and one -ve number", () => {
      expect(calculator.divide(-12, 3)).toBe(-4);
    });

    it("should correct divide two -ve numbers", () => {
      expect(calculator.divide(-16, -4)).toBe(4);
    });
  });
});
