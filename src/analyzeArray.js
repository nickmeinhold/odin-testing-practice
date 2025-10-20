// Stub implementation to support TDD; update this to make tests pass
function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const numbers = arr.filter((item) => typeof item === "number");
  if (numbers.length === 0) {
    throw new Error("Array must contain at least one number");
  }

  const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
    average,
    min,
    max,
    length: Array.isArray(arr) ? arr.length : 0,
  };
}

module.exports = { analyzeArray };
