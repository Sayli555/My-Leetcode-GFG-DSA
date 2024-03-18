// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example :

// Input: nums = [2,2,1]
// Output: 1


var singleNumber = function(nums) {
    let ans=0
    for(let i=0;i<nums.length;i++){
       ans=ans ^ nums[i]
    }
    return ans
};

// or

var singleNumber = function(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]==undefined){
            obj[nums[i]]=1
        }
        else{
            obj[nums[i]]++
        }
    }
    for(key in obj){
        if(obj[key]==1){
            return key
        }
    }
    return -1
};