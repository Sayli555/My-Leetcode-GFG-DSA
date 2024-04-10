/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l=0
    let h=nums.length-1
    let ans=-1
    if(nums.length==0){
        return [-1,-1]
    }
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2)
        if(nums[mid]==target){
            ans=mid
            h=mid-1
        }
        else if(nums[mid]>target){
            h=mid-1
        }
        else{
            l=mid+1
        }
    }
      let l1=0
    let h1=nums.length-1
    let ans1=-1
    while(l1<=h1){
        let mid=Math.floor(l1+(h1-l1)/2)
        if(nums[mid]==target){
            ans1=mid
            l1=mid+1
        }
        else if(nums[mid]>target){
            h1=mid-1
        }
        else{
            l1=mid+1
        }
    }
    return [ans,ans1]
    
};