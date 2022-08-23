/* 
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their orders changing.

Examples:
    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time complexity: O(n+m)
Space Complexity: O(1)
*/

// Method to solve problem using multiple pointers
function isSubsequence(child, parent) {
  if (parent.length < child.length) {
    return false;
  }

  let childPointer = 0;
  for (let parentPointer = 0; parentPointer < parent.length; parentPointer++) {
    if (parent[parentPointer] === child[childPointer]) {
      childPointer++;
    }

    if (childPointer === child.length) return true;
  }

  return false;
}

// Method to solve problem using recursion
function isSubsequence2(child, parent) {
  if (child.length === 0) return true;
  if (parent.length === 0) return false;
  if (child[0] === parent[0])
    return isSubsequence2(child.slice(1), parent.slice(1));
  return isSubsequence2(child, parent.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence2("hello", "hello world")); // true
console.log(isSubsequence2("sing", "sting")); // true
console.log(isSubsequence2("abc", "abracadabra")); // true
console.log(isSubsequence2("abc", "acb")); // false (order matters)
