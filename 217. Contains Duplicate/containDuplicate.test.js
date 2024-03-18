function contain_duplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] == arr[i]) {
        return true;
      }
    }
  }
  return false;
}

describe.each([
  { arr: [1, 2, 3, 1], excepted: true },
  { arr: [1, 6, 3, 3], excepted: true },
  { arr: [1, 21, 43, 11], excepted: false },
  { arr: [321, 21, 43, 11], excepted: false },
  { arr: [21, 22, 23, 21], excepted: true },
])("Contain Duplicate Number in Array", ({ arr, excepted }) => {
  test(`Expected to be ${expect}`, () => {
    expect(contain_duplicate(arr)).toBe(excepted);
  });
});
