/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let k = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            k = i;
            break;
        }
    }
    if (k === -1) {
        reverse(nums, 0, nums.length - 1);
        return;
    }
    let l = -1;
    for (let i = nums.length - 1; i > k; i--) {
        if (nums[i] > nums[k]) {
            l = i;
            break;
        }
    }
    [nums[k], nums[l]] = [nums[l], nums[k]];
    reverse(nums, k + 1, nums.length - 1);
    return nums
};

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}