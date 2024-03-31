/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let s=0
    let e=nums.length-1
   mergeSort(nums,s,e) 
    return nums
};
function mergeSort(arr,s,e){
  if(s>=e){
    return
  }
  let mid=Math.floor((s+e)/2)
  mergeSort(arr,s,mid)
  mergeSort(arr,mid+1,e)
  merge(arr,s,mid,e)
}

function merge(arr,s,m,e){
  let left=[]
  let right=[]
  let k=s
  let l=0
  let r=0
  for(let i=s;i<=m;i++){
 left.push(arr[i])
  }
  for(let i=m+1;i<=e;i++){
    right.push(arr[i])
  }

  while(l<left.length &&r<right.length){
    if(left[l]<right[r]){
      arr[k]=left[l]
      l++
    }
    else{
      arr[k]=right[r]
      r++
    }
    k++
  }
  while(l<left.length){
    arr[k]=left[l]
    k++
    l++
  }
  while(r<right.length){
    arr[k]=right[r]
    k++
    r++
  }
}


TC= O(nlog(n))
SC= O(n)