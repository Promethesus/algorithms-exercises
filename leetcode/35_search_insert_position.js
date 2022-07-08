// Input: nums = [1, 3, 5, 6], target = 5;
// Expected Output: 2

// Input: nums = [1,3,5,6], target = 2
// Expected Output: 1

function searchInsert(nums, target) {
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid - 1] && target < nums[mid]) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));

// Need to solve for edge case where target is equal to the start or end index of array
console.log(searchInsert([1, 3, 5, 6], 7));
