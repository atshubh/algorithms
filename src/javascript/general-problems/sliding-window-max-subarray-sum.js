/* 
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.

Sample Input:
    maxSubarraySum([100,200,300,400], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null

Constraints:
Time complexity: O(n)
Space complexity: O(1)
*/

function maxSubarraySum(arr, len) {
  if (arr.length < len) {
    return null;
  }

  let result = 0;
  for (let index = 0; index < len; index++) {
    result += arr[index];
  }

  let end = len;
  let index = 1;
  let window = result;
  while (end < arr.length) {
    window += arr[end] - arr[index - 1];
    if (window > result) {
      result = window;
    }

    index++;
    end++;
  }

  return result;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
