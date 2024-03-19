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

    const numIndices ={}
    for (let i = 0; i < nums.length; i++) {
        const findIndex = target - nums[i];
        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[findIndex], i];
        }
         numIndices[nums[i]]=i
    }
    return null;
};

// Explaination:
// findIndex => target-nums[i]  means (nums[i] + findIndex == target) 
// -- const findIndex = target - nums[i] ==> nums[i] present in array , remamining value store in findIndex
// -- we have to find findIndex this value in array 
// -- if present then we have nums[i] and object present value , if we do sum then (sum === target)
// -- if not then we store this num[i] value in object to check next time