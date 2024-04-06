// Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 
 

// Example 1:

// Input:
// N = 6
// arr[] = {3,0,0,2,0,4}
// Output:
// 10

class Solution {
    // Function to find the trapped water between the blocks.
    trappingWater(arr, n)
    {
        //your code here
        let l=0
        let r=n-1
        let lm=0
        let rm=0
        let tw=0
        while(l<r){
            if(arr[l]<arr[r]){
                if(arr[l]>lm){
                    lm=arr[l]
                }
                else{
                    tw+=lm-arr[l]
                }
                l++
            }
            else{
                if(arr[r]>rm){
                    rm=arr[r]
                }else{
                    tw+=rm-arr[r]
                }
                r--
            }
        }
        return tw
        
    }
}