// Given an array arr[], its starting position l and its ending position r. Sort the array using merge sort algorithm.
// Example 1:

// Input:
// N = 5
// arr[] = {4 1 3 9 7}
// Output:
// 1 3 4 7 9

class Solution

{
    
    merge(arr, l, m, r)
    {
         // Your code here
         let left=[]
         let right=[]
         let s=0
         let e=0
         let k=l
         for(let i=l;i<=m;i++){
             left.push(arr[i])
         }
         for(let i=m+1;i<=r;i++){
             right.push(arr[i])
         }
         while(s<left.length && e< right.length){
             if(left[s]<right[e]){
                 arr[k]=left[s]
                 s++
             }
             else{
                 arr[k]=right[e]
                 e++
             }
             k++
         }
         while(s<left.length){
             arr[k]=left[s]
                 s++
                 k++
         }
          while(e<right.length){
             arr[k]=right[e]
                 e++
                 k++
         }
    }

    mergeSort(arr, l, r){
     //code here
     if(l>=r){
         return 
     }
     let mid=Math.floor((l+r)/2)
     this.mergeSort(arr,l,mid)
     this.mergeSort(arr,mid+1,r)
     this.merge(arr,l,mid,r)
     return arr
    }
}