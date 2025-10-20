// Stub implementation to support TDD; update this to make tests pass
function reverseString(input) {
  input = input || "";
  return input.split("").reverse().join("");
}

module.exports = { reverseString };
