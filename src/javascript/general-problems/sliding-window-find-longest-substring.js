/* 
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

Examples:
    findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6

Constraints:
Time Complexity - O(n)
*/

export function findLongestSubstring(string) {
  if (!string?.length) {
    return 0;
  }

  let longest = 0;
  let start = 0;
  let index = 0;
  let seen = {};

  while (index < string.length) {
    const char = string[index];
    if (seen[char] || seen[char] === 0) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, index - (start === 0 ? -1 : start));

    seen[char] = index;
    index++;
  }

  return longest;

  //   let longest = 0;
  //   let seen = {};
  //   let start = 0;

  //   for (let i = 0; i < string.length; i++) {
  //     let char = string[i];

  //     if (seen[char]) {
  //       start = Math.max(start, seen[char]);
  //     }

  //     longest = Math.max(longest, i - start + 1);
  //     seen[char] = i + 1;
  //   }

  //   return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
