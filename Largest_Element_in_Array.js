
// Given an array A[] of size n. The task is to find the largest element in it.
// Example 1:
// Input:
// n = 5
// A[] = {1, 8, 7, 56, 90}
// Output:
// 90
// Explanation:
// The largest element of given array is 90.


//User function Template for javascript

class Solution {
    largest(arr, n) {
        // write your code here
        let max=0
        let i=0
        while(i<n){
            if(max<arr[i]){
                max=arr[i]
            }
            i++
        }
        return max
    }
}
//  or



//User function Template for javascript

class Solution {
    largest(arr, n) {
        // write your code here
        var max = 0
        for(var i=0;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i]
            }
        }
        return max
    }
    
}
