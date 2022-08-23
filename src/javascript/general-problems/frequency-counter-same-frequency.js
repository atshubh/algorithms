/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(n)
Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(argument1, argument2) {
  const stringArg1 = argument1.toString();
  const stringArg2 = argument2.toString();
  const frequencyCounter = {};

  if (stringArg1.length !== stringArg2.length) {
    return false;
  }

  for (const char of stringArg1) {
    frequencyCounter[char] = ++frequencyCounter[char] || 1;
  }

  for (const char of stringArg2) {
    if (!frequencyCounter[char]) {
      return false;
    }

    frequencyCounter[char]--;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
