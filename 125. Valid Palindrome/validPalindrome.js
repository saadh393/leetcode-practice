/**
 * @param {string} s
 * @return {boolean}
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 */

let reverseString = (str) => {
  return str.split("").reverse().join("");
};

var isPalindrome = function (s) {
  if (s == " ") return true;
  let str = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
  // return str === reverseString(str) ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
console.log(isPalindrome("ab2a"));
