let arr=[1,2,8,10,11,12,19]
let x=15
function ceilinSortedArray(arr,x){
 let l=0
  let h=arr.length-1
  let ans=-1
  while(l<=h){
     let mid=Math.floor(l+(h-l)/2)
    if(arr[mid]==x){
      return mid
    }
    if(arr[mid]>x){
      ans=mid
      h=mid-1
    }
    if(arr[mid]<x){
      l=mid+1
    }
  }
  return ans
}
console.log(ceilinSortedArray(arr,x))