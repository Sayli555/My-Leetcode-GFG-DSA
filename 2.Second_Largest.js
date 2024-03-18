// Given an array Arr of size N, print the second largest distinct element from an array. If the second largest element doesn't exist then return -1.

// Example 2:

// Input: 
// N = 6
// Arr[] = {12, 35, 1, 10, 34, 1}
// Output: 34
// Explanation: The largest element of the 
// array is 35 and the second largest element
// is 34.

class Solution{
    print2largest(arr,n){
   let fMax=-1
  let sMax=-1
  for(let i=0;i<n;i++){
      if(fMax<arr[i]){
        sMax=fMax
        fMax=arr[i]
      }
    else{
      if(fMax>arr[i] && sMax<arr[i]){
        sMax=arr[i]
      }
    }
  }
  return sMax
    }
}
