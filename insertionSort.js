let array = [2, 34, 3, 1, 5, 7, 8, 3, 5, 67, 534, 145, 234]


function insertionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let numberToInsert = nums[i];

        for (let j = i - 1; nums[j] >= 0 && nums[j] > numberToInsert; j--) {
            nums[j + 1] = nums[j]
            nums[j] = numberToInsert
        }
    }
    return nums
}

console.log(insertionSort(array))