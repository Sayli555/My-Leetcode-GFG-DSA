/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let store=null
    for(let i=nums.length-1;i>=0;i--){
        if(store==nums[i]){
            nums.splice(i,1)
        }
        store=nums[i]
    }
    return nums.length
};