// Implement the partition() and quickSort() functions to sort the array.

// Example 1:

// Input: 
// N = 5 
// arr[] = { 4, 1, 3, 9, 7}
// Output:
// 1 3 4 7 9

class Solution
{
    partition(arr, low, high){
        // Your code here
        let x=arr[high]
  let i=low-1
  for(let j=low;j<high;j++){
    if(arr[j]<=x){
      i++
      [arr[i],arr[j]]=[arr[j],arr[i]]
    }
  }
   [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
  return i+1
    }
    
    quickSort(arr, low, high){
        //code here
        if(low<high){
    let q=this.partition(arr,low,high)
    this.quickSort(arr,low,q-1)
    this.quickSort(arr,q+1,high)
    return arr
  }
        
    }
    
}