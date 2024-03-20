/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const numIndices = {};

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // Calculate the complement needed to reach the target
        const complement = target - num;
        
        // Check if the complement exists in the map
        if (numIndices.hasOwnProperty(complement)) {
            // If complement exists, return the indices of the current number and its complement
            return [numIndices[complement], i];
        }
        
        // If complement doesn't exist, store the index of the current number in the map
        numIndices[num]=i;
    }

    // If no solution is found, return null or handle it according to your requirement
    return null;
};