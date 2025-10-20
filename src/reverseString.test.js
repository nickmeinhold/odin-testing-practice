const { reverseString } = require('./reverseString');

describe('reverseString', () => {
  it('reverses a simple word', () => {
    expect(reverseString('odin')).toBe('nido');
  });

  it('works with an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('handles single character', () => {
    expect(reverseString('A')).toBe('A');
  });

  it('reverses strings with spaces and punctuation', () => {
    expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH');
  });
});
