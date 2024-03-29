// The task is to complete the insert() function which is used to implement Insertion Sort.
// Example 1:

// Input:
// N = 5
// arr[] = { 4, 1, 3, 9, 7}
// Output:
// 1 3 4 7 9

class Solution
{
  insert(arr,i){
     // code here such that insertionSort() sorts arr[]
     
  }

   //Function to sort the array using insertion sort algorithm.
  insertionSort(arr,n){
   //code here
  for(let i=1;i<n;i++){
      let key=arr[i]
      let j=i-1
      while(j>=0 && key<arr[j]){
          arr[j+1]=arr[j]
          j--
      }
      arr[j+1]=key
  }
  return arr
  }
}

// Time Complexity: O(n^2)
// Space Complexity: O(1) it only take constant ammount of exstr space f variable counter and store variable

// Notes->
// 1)in this we start element travaers fro 1st element
// 2)we store that element 
// 3) then we go reverse to check element which is greater than store element
// 4) if its there then we give position to that elemnt 
// 5) after compliting while loop we came outside
// 6) locate right position to key 