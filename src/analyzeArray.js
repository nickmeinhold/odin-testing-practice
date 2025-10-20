// Implementation aligned with tests:
// - Non-array input: throw
// - Empty array: return { average: NaN, min: Infinity, max: -Infinity, length: 0 }
// - Mixed types: throw if any element is not a finite number
// - Otherwise compute average, min, max, and length
function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const length = arr.length;
  if (length === 0) {
    return { average: NaN, min: Infinity, max: -Infinity, length: 0 };
  }

  const allNumbers = arr.every(
    (n) => typeof n === "number" && Number.isFinite(n)
  );
  if (!allNumbers) {
    throw new Error("Array must contain only numbers");
  }

  const sum = arr.reduce((acc, n) => acc + n, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { average, min, max, length };
}

module.exports = { analyzeArray };
