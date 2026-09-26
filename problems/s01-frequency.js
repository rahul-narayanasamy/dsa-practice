/**
 * Session: S01
 * Problem: frequency, pair sum, pair sum with a set
 * Pattern: cost of a nested loop vs a set
 *
 * Restate:
 *   frequency counts characters.
 *   hasPairSum reports whether two different indexes add to target.
 * Examples:
 *   frequency("aab") -> { a: 2, b: 1 }
 *   hasPairSum([1, 2, 4], 6) -> true
 * Straightforward approach and cost:
 * Better idea:
 * Time:
 * Space:
 */

function frequency(text) {
  // Return a plain object of character counts.
}

function hasPairSum(nums, target) {
  // Two loops. True when two different indexes add to target.
}

function hasPairSumFast(nums, target) {
  // Same answers as hasPairSum, one loop.
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

assertEqual(frequency("aab"), { a: 2, b: 1 }, "aab");
assertEqual(frequency(""), {}, "empty string");
assertEqual(hasPairSum([1, 2, 4], 6), true, "2+4");
assertEqual(hasPairSum([1, 2, 4], 8), false, "no pair");
assertEqual(hasPairSum([], 0), false, "empty array");
assertEqual(hasPairSum([3], 6), false, "one element");
assertEqual(hasPairSum([3, 3], 6), true, "same value twice");
assertEqual(hasPairSumFast([1, 2, 4], 6), true, "fast 2+4");
assertEqual(hasPairSumFast([1, 2, 4], 8), false, "fast no pair");
assertEqual(hasPairSumFast([], 0), false, "fast empty");
assertEqual(hasPairSumFast([3], 6), false, "fast one element");
assertEqual(hasPairSumFast([3, 3], 6), true, "fast same value twice");

// After the tests pass, write two sentences here:
// - How the step count of hasPairSum grows as the array length n grows.
// - How hasPairSumFast grows, and what extra memory it uses.
