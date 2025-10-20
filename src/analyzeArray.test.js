const { analyzeArray } = require('./analyzeArray');

describe('analyzeArray', () => {
  it('returns average, min, max, and length for a typical array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it('handles negative numbers', () => {
    expect(analyzeArray([-5, -2, -10])).toEqual({
      average: -17 / 3,
      min: -10,
      max: -2,
      length: 3,
    });
  });

  it('handles floats', () => {
    expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
      average: 7.5 / 3,
      min: 1.5,
      max: 3.5,
      length: 3,
    });
  });

  it('handles an empty array', () => {
    expect(analyzeArray([])).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0,
    });
  });

  it('throws for non-array input', () => {
    expect(() => analyzeArray(null)).toThrow();
    expect(() => analyzeArray('not array')).toThrow();
  });

  it('ignores non-number elements by throwing (strict mode)', () => {
    expect(() => analyzeArray([1, '2', 3])).toThrow();
  });
});
