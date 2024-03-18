/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// @example 1
//  Input: s = "anagram", t = "nagaram"
//  Output: true

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function (s, t) {
  let new_s = s.split("").sort().join("");
  let new_t = t.split("").sort().join("");
  return new_s === new_t ? true : false;
};

module.exports = isAnagram;
