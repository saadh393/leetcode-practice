/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

var twoSum = function (nums, target) {
  if (nums.length === 2) {
    return [0, 1];
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// Actual
const twoSumMethod2 = (nums, target) => {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashMap[diff] != undefined) {
      return [hashMap[diff], i];
    }

    hashMap[nums[i]] = i;
  }
};
console.log(twoSumMethod2([2, 7, 11, 15], 9));
console.log(twoSumMethod2([3, 2, 4], 6));
console.log(twoSumMethod2([3, 3], 6));

module.exports = {
  twoSum,
};
