// Row with max 1s
// MediumAccuracy: 33.09%Submissions: 238K+Points: 4
// Given a boolean 2D array of n x m dimensions, consisting of only 1's and 0's, where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.

// Example 1:

// Input: 
// N = 4 , M = 4
// Arr[][] = {{0, 1, 1, 1},
//            {0, 0, 1, 1},
//            {1, 1, 1, 1},
//            {0, 0, 0, 0}}
// Output: 2
// Explanation: Row 2 contains 4 1's (0-based
// indexing).

class Solution {
    
    rowWithMax1s(arr, n, m){
        // code here
        let max=0
let ans=-1
for(let i=0;i<n;i++){
  let count=0
  for(let j=0;j<m;j++){
    if(arr[i][j]==1){
      count++
    }
  }
  if(max<count){
      max=count
    ans=i
  }
}
return ans
    }
}