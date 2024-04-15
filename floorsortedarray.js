// Given a sorted array arr[] of size N without duplicates, and given a value x. Floor of x is defined as the largest element K in arr[] such that K is smaller than or equal to x. Find the index of K(0-based indexing).

// Example 1:

// Input:
// N = 7, x = 0 
// arr[] = {1,2,8,10,11,12,19}
// Output: -1
// Explanation: No element less 
// than 0 is found. So output 
// is "-1".
class Solution {
    
    findFloor(arr, n, x)
    {
        //your code here
        let l=0
        let h=n-1
        let ans=-1
        while(l<=h){
            let mid=Math.floor(l+(h-l)/2)
            if(arr[mid]>x){
                h=mid-1
            }
            if(arr[mid]==x){
                return mid
            }
            if(arr[mid]<x){
                ans=mid
                l=mid+1
            }
        }
        return ans
    }
}