// Given an ascending sorted rotated array arr of distinct integers of size n. The array is right-rotated k times. Find the value of k.

// Example 1:

// Input:
// n = 5
// arr[] = {5, 1, 2, 3, 4}
// Output: 1
// Explanation: The given array is 5 1 2 3 4. 
// The original sorted array is 1 2 3 4 5. 
// We can see that the array was rotated 
// 1 times to the right.

class Solution {
    findKRotation(arr,n) {
        // code here 
        for(let i=0;i<n;i++){
            if(arr[i]>arr[i+1]){
                return i+1
            }
        }
        return 0
    }
}