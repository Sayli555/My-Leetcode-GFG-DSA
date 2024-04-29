//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    if(arr[i] === -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_line = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n;j++) {
        arr[j] = input_line[j];
    }
    let obj = new Solution();
    obj.mergeSort(arr,0,n-1);
    printArray(arr,arr.length);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */

class Solution

{
    
    merge(arr, l, m, r)
    {
         // Your code here
         let left=[]
         let right=[]
         let s=0
         let e=0
         let k=l
         for(let i=l;i<=m;i++){
             left.push(arr[i])
         }
         for(let i=m+1;i<=r;i++){
             right.push(arr[i])
         }
         while(s<left.length && e< right.length){
             if(left[s]<right[e]){
                 arr[k]=left[s]
                 s++
             }
             else{
                 arr[k]=right[e]
                 e++
             }
             k++
         }
         while(s<left.length){
             arr[k]=left[s]
                 s++
                 k++
         }
          while(e<right.length){
             arr[k]=right[e]
                 e++
                 k++
         }
    }

    mergeSort(arr, l, r){
     //code here
     if(l>=r){
         return 
     }
     let mid=Math.floor((l+r)/2)
     this.mergeSort(arr,l,mid)
     this.mergeSort(arr,mid+1,r)
     this.merge(arr,l,mid,r)
     return arr
    }
}
