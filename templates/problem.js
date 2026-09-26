/**
 * Session:
 * Problem:
 * Pattern:
 *
 * Restate:
 * Examples:
 * Straightforward approach and cost:
 * Better idea:
 * Time:
 * Space:
 */

function solve(/* inputs */) {
  // your solution
}

function assertEqual(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) {
    console.error(`FAIL ${label}\n  expected ${e}\n  got      ${a}`);
    process.exitCode = 1;
    return;
  }
  console.log(`ok   ${label}`);
}

// assertEqual(solve(input), expected, "label");
