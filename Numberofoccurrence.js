// Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr.

// Example 1:

// Input:
// N = 7, X = 2
// Arr[] = {1, 1, 2, 2, 2, 2, 3}
// Output: 4
// Explanation: 2 occurs 4 times in the
// given array.

class Solution {
    
    count(arr,n,x){
        //code here
        let first=this.firstocc(arr,n,x)
        let last=this.lastOcc(arr,n,x)
        if(first !== -1 && last !== -1){
            return last-first+1
        }
        else{
            return 0
        }
    }
    firstocc(arr,n,x){
        let l=0
        let h=n-1
        let ans=-1
        while(l<=h){
            let mid=Math.floor(l+(h-l)/2)
            if(arr[mid]==x){
                ans=mid
                h=mid-1
            }
            else if(arr[mid]<x){
                l=mid+1
            }
            else{
                h=mid-1
            }
        }
        return ans
    }
     lastOcc(arr,n,x){
        let l=0
        let h=n-1
        let ans=-1
        while(l<=h){
            let mid=Math.floor(l+(h-l)/2)
            if(arr[mid]==x){
                ans=mid
                l=mid+1
            }
            else if(arr[mid]<x){
                l=mid+1
            }
            else{
                h=mid-1
            }
        }
        return ans
    }
}