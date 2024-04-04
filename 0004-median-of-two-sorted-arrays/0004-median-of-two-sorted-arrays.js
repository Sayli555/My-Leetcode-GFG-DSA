/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i=0;
let j=0;
let k=0;
let ans=[]
while(i<nums1.length && j< nums2.length){
  if(nums1[i]<nums2[j]){
    ans[k++]=nums1[i++]
  }
  else {
    ans[k++]=nums2[j++]
  }
}
while(i<nums1.length){
  ans[k++]=nums1[i++]
}
while(j<nums2.length){
   ans[k++]=nums2[j++]
}
if(ans.length<=1){
  return ans[0].toFixed(5)
}

let mid=Math.floor(ans.length/2)
let findMid=0
if(ans.length%2==0){
  findMid= (ans[mid-1]+ans[mid])/2
}
else {
  findMid=ans[mid]
}
return findMid.toFixed(5)
};