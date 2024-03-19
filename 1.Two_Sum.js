// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {

    let i=0;
    let j=i+1
    while(i<j){
     let sum=nums[i]+nums[j]
     if(sum==target){
         return [i,j]
     }
     else if(j==nums.length){
         i++
         j=i+1
     }
     else{
         j++
     }
    }
 };


//  or 
var twoSum = function(nums, target) {

    const numIndices = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // Calculate the complement needed to reach the target
        const complement = target - num;
        
        // Check if the complement exists in the map
        if (numIndices.has(complement)) {
            // If complement exists, return the indices of the current number and its complement
            return [numIndices.get(complement), i];
        }
        
        // If complement doesn't exist, store the index of the current number in the map
        numIndices.set(num, i);
    }

    // If no solution is found, return null or handle it according to your requirement
    return null;
};