/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern or multiple pointers pattern.

Examples:
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 
 */

// Method using frequency counter to find duplicates
function areThereDuplicates() {
  let collection = {};

  for (const arg in arguments) {
    collection[arguments[arg].toString()] =
      ++collection[arguments[arg].toString()] || 1;
  }

  return Object.keys(collection).some((key) => collection[key] > 1);
}

// Method using multiple pointers to find duplicates
function areThereDuplicates2(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2("a", "b", "c", "a")); // true
