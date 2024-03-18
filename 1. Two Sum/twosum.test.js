const { twoSum, twoSumMethod2 } = require("./twosum");

describe.each([
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
])("Two Sum Adding", ({ nums, target, expected }) => {
  test("Two Sum", () => {
    expect(twoSumMethod2(nums, target)).toEqual(expected);
  });
});
