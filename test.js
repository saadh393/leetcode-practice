const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Underscore = "\x1b[4m";
const Blink = "\x1b[5m";
const Reverse = "\x1b[7m";
const Hidden = "\x1b[8m";

const FgBlack = "\x1b[30m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";
const FgCyan = "\x1b[36m";
const FgWhite = "\x1b[37m";

const BgBlack = "\x1b[40m";
const BgRed = "\x1b[41m";
const BgGreen = "\x1b[42m";
const BgYellow = "\x1b[43m";
const BgBlue = "\x1b[44m";
const BgMagenta = "\x1b[45m";
const BgCyan = "\x1b[46m";
const BgWhite = "\x1b[47m";

function test(value, expected) {
  if (value == undefined) {
    console.log(BgRed, { error: "Missing target Value" }, Reset);
    return { error: "Missing target Value" };
  }

  if (expected == undefined) {
    console.log(BgRed, { error: "Missing Excepted Value" }, Reset);
    return { error: "Missing Excepted Value" };
  }
  const result = { output: value, expected, pass: value == expected };
  console.log(BgGreen, " OUTPUT   ", Reset, "\t", result.output);
  console.log(BgYellow, " EXPECTED ", Reset, "\t", result.expected);

  result.pass
    ? console.log(BgCyan, " RESULT   ", Reset, "\t", result.pass)
    : console.log(BgRed, " RESULT   ", Reset, "\t", result.pass);

  console.log(Reset);
  return result;
}

module.exports = test;
