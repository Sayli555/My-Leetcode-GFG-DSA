/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]==undefined){
            obj[nums[i]]=1
        }
        else{
             obj[nums[i]]++
        }
    }
    let max=0
    let ans;
    for(key in obj){
        if(max<obj[key]){
            max=obj[key]
           ans =key
        }
    }
    return ans
};