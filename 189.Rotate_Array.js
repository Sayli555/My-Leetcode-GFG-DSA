// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

var rotate = function(nums, k) {

    k=k%nums.length
    swap(nums,0,nums.length-1)
    swap(nums,0,k-1)
    swap(nums,k,nums.length-1)
    return nums
    };
    
    function swap(arr,start,end){
    
    while(start<end){
    [arr[start],arr[end]]=[arr[end],arr[start]]
    start++
    end--
    }
    }


    // Note:
    // 1) rotate all array first (0 to arr.length-1)
    //     -rotate all array means last element come first
    // 2) then rotate only (0 to k-1) means inside rotation only
    //     -rotate elements that rotate in first swap 
    // 3) then rotate only (k to arr.length-1) inide rotation onlay
    //     -rotate element => after second swap