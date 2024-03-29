// Given an unsorted array of size N, use selection sort to sort arr[] in increasing order.
// Example 1:
// Input:
// N = 5
// arr[] = {4, 1, 3, 9, 7}
// Output:
// 1 3 4 7 9

class Solution
{
  select(arr,i){
     // code here such that selectionSort() sorts arr[]
    //  let ans=this.selectionSort(arr,i)
    //  return ans
     
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
   //code here
   for(let i=0;i<n;i++){
       let minIndex=i
       for(let j=i+1;j<n;j++){
           if(arr[minIndex]>arr[j]){
               minIndex=j
           }
       }
       if(minIndex!=i){
           let temp=arr[minIndex]
           arr[minIndex]=arr[i]
           arr[i]=temp
       }
      
   }
    return arr
  }
    
}


// TC=> O(n^2)
// SC=> O(1)  ==> use only one variable to store index value , it works constant, no any exstra space 