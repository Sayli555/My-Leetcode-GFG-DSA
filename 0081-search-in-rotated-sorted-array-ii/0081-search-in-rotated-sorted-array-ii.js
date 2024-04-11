/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l=0
    let h=nums.length-1
    
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2)
        
        if(nums[mid]==target){
            return true
        }
        if(nums[l]==nums[mid]&& l!=mid){
            l++
        }
        if(nums[h]==nums[mid]&&h!=mid){
            h--
        }
        else if(nums[l]<=nums[mid]){
            if(target>=nums[l] && target<nums[mid]){
                h=mid-1
            }
            else {
                l=mid+1
            }
        }
        else if(nums[mid]<=nums[h]){
            if(target>nums[mid] && target <=nums[h]){
                l=mid+1
            }else{
                h=mid-1
            }
        }
    }
    return false
};