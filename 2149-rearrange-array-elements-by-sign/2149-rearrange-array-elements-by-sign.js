/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    
    let bag1=[]
    let bag2=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=0){
            bag1.push(nums[i])
        }else{
            bag2.push(nums[i])
        }
    }
    let ans=[]
    for(let i=0;i<bag1.length;i++){
        ans.push(bag1[i])
        ans.push(bag2[i])
    }
    return ans
};