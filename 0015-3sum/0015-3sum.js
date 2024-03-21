/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort(function(a, b){return a - b});
  if(nums == null || nums.length < 3){
    return []
  }
  const result = new Map();
  for(let i=0;i<nums.length-2;i++){
    let start=i+1
    let end=nums.length-1
    let count=0
    while(start<end){
      let sum=nums[i]+nums[start]+nums[end]
      if(sum==0){
         result.set(`${nums[i]},${nums[start]},${nums[end]}`, [nums[i], nums[start], nums[end]]);
        start++
        end--
      }
      else if(sum<0){
        start++
      }
      else{
        end--
      }
    }
  }
 return Array.from(result.values())
};