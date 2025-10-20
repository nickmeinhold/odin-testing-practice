const { calculator } = require("./calculator");

describe("calculator", () => {
  describe("add", () => {
    it("adds two positive numbers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it("adds negative and positive numbers", () => {
      expect(calculator.add(-2, 3)).toBe(1);
    });
  });

  describe("subtract", () => {
    it("subtracts two numbers", () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    it("subtracts resulting in negative", () => {
      expect(calculator.subtract(2, 5)).toBe(-3);
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers", () => {
      expect(calculator.multiply(4, 3)).toBe(12);
    });

    it("multiplies by zero", () => {
      expect(calculator.multiply(4, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    it("divides two numbers", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it("divides resulting in floating point", () => {
      expect(calculator.divide(3, 2)).toBe(1.5);
    });

    it("throws on divide by zero", () => {
      expect(() => calculator.divide(1, 0)).toThrow();
    });
  });
});
