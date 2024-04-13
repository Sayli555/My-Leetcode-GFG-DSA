/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0
    let h=nums.length-1
    if(nums[l]<=nums[h]){
        return nums[0]
    }
  while(l<=h){
    let mid=Math.floor(l+(h-l)/2)
    if(nums[mid]<nums[mid-1]){
        return nums[mid]
    }
    else if(nums[mid]>nums[mid+1]){
        return nums[mid+1]
    }
    else if(nums[l]<=nums[mid]){
        l=mid+1
    }else{
        h=mid-1
    }
  }
  return -1
};