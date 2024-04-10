/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
let l=0
let h=nums.length-1
let ans=-1
while(l<=h){
    let mid=Math.floor(l+(h-l)/2)
    if(nums[mid]==target){
        ans = mid
        break
    }
    else if(nums[l]<=nums[mid]){
        if(target>=nums[l] && target<nums[mid]){
            h=mid-1
        }else{
            l=mid+1
        }
    }
    else if(nums[mid]<=nums[h]){
        if(target>nums[mid] && target<=nums[h]){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
   
}
 return ans
};