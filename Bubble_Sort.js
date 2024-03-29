// Given an Integer N and a list arr. Sort the array using bubble sort algorithm.
// Example 1:

// Input: 
// N = 5
// arr[] = {4, 1, 3, 9, 7}
// Output: 
// 1 3 4 7 9

class Solution
{
   //Function to sort the array using bubble sort algorithm.
   bubbleSort(arr,n){
    //code here
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr
   }
    
}

TC=> O(n^2) ==> we have iterate array 2 times 
Sc=> o(1) ==> we are not using any exstra space