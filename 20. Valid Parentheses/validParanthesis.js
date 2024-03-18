console.clear();
const test = require("../test");

var isValid = function (s) {
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") {
      if (arr[i + 1] == ")") return true;
    }

    if (arr[i] == "[") {
      if (arr[i + 1] == "]") return true;
    }

    if (arr[i] == "{") {
      if (arr[i + 1] == "}") return true;
    }
  }
  return false;
};

test(isValid("()"), true);
test(isValid("[)"), false);
test(isValid("}[]()"), true);
test(isValid("([)]"), false);
test(isValid("{[]}"), true);
