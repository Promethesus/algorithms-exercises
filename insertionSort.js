let array = [2, 34, 3, 1, 5, 7, 8, 3, 5, 67, 534, 145, 234]


function insertionSort(nums) {
    for (let current = 0; current < nums.length; current++) {
        let numberToInsert = nums[current];

        for (let previous = current - 1; nums[previous] >= 0 && nums[previous] > numberToInsert; previous--) {
            nums[previous + 1] = nums[previous]
            nums[previous] = numberToInsert;
        }
    }
    return nums
}

console.log(insertionSort(array))