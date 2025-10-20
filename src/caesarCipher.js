// Stub implementation to support TDD; update this to make tests pass
function caesarCipher(input, shift) {
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let code = input.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      // Uppercase letters
      let newCode = ((((code - 65 + shift) % 26) + 26) % 26) + 65;
      char = String.fromCharCode(newCode);
    } else if (code >= 97 && code <= 122) {
      // Lowercase letters
      let newCode = ((((code - 97 + shift) % 26) + 26) % 26) + 97;
      char = String.fromCharCode(newCode);
    }
    input = input.slice(0, i) + char + input.slice(i + 1);
  }
  return input;
}

module.exports = { caesarCipher };
