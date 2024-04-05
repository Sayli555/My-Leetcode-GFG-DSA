/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let s=0
    let e=nums.length-1
    while(s<=e){
        let mid= Math.floor(s+(e-s)/2)
        if(target==nums[mid]){
            return mid
        }
        if(nums[mid]<target){
            s=mid+1
        }
        else{
            e=mid-1
        }
    }
    return -1
};