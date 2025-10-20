const { capitalize } = require("./capitalize");

describe("capitalize", () => {
  it("capitalizes the first character of a lowercase word", () => {
    expect(capitalize("odin")).toBe("Odin");
  });

  it("leaves already-capitalized first letter and rest unchanged", () => {
    expect(capitalize("Odin")).toBe("Odin");
  });

  it("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("only changes the first character and leaves the rest as-is", () => {
    expect(capitalize("oDIN")).toBe("ODIN");
  });
});
