const { caesarCipher } = require("./caesarCipher");

describe("caesarCipher", () => {
  it("shifts lowercase letters preserving case", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  it("shifts uppercase letters preserving case", () => {
    expect(caesarCipher("XYZ", 2)).toBe("ZAB");
  });

  it("wraps around at end of alphabet", () => {
    expect(caesarCipher("z", 2)).toBe("b");
    expect(caesarCipher("Z", 2)).toBe("B");
  });

  it("leaves punctuation and spaces unchanged", () => {
    expect(caesarCipher("Hello, world!", 5)).toBe("Mjqqt, btwqi!");
  });

  it("handles large positive shifts (>26) by modulo 26", () => {
    expect(caesarCipher("abc", 29)).toBe("def");
  });

  it("handles negative shifts", () => {
    expect(caesarCipher("bcd", -1)).toBe("abc");
  });

  it("handles zero shift (no change)", () => {
    expect(caesarCipher("Stay the same.", 0)).toBe("Stay the same.");
  });
});
