const isAnagram = require("./validAnagram");

describe.each([
  { s: "rat", t: "car", expectedResult: false },
  { s: "anagram", t: "nagaram", expectedResult: true },
])("Anagram Testing", ({ s, t, expectedResult }) => {
  test("Is Anagram Testing", () => {
    expect(isAnagram(s, t)).toBe(expectedResult);
  });
});
