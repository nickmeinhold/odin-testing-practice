// Stub implementation to support TDD; update this to make tests pass
function capitalize(input) {
  input = input || "";
  if (input.length === 0) {
    return "";
  }
  return input[0].toUpperCase() + input.slice(1);
}

module.exports = { capitalize };
