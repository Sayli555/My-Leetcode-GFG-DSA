/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let obj={}
    for(let i=0;i<nums.length;i++){
        let currentNum=nums[i]
        
        if(obj[currentNum]!=undefined){
                return currentNum
        }
        obj[currentNum]=1
    }
    return -1
};