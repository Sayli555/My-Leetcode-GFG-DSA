// Given two sorted arrays arr1 and arr2 of size N and M respectively and an element K. The task is to find the element that would be at the kth position of the final sorted array.
 

// Example 1:

// Input:
// arr1[] = {2, 3, 6, 7, 9}
// arr2[] = {1, 4, 8, 10}
// k = 5
// Output:
// 6
// Explanation:
// The final sorted array would be -
// 1, 2, 3, 4, 6, 7, 8, 9, 10
// The 5th element of this array is 6.
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
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let inputAr = readLine().split(" ").map((x)=>parseInt(x));
    
    let n = inputAr[0];
    let m = inputAr[1];
    let k = inputAr[2];
    let A = new Array(n);
    let B = new Array(m);
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    for(let i = 0;i<n;i++)
      A[i] = input_ar1[i];
    let input_ar2 = readLine().split(" ").map((x) => parseInt(x));
    for(let i = 0;i<m;i++)
      B[i] = input_ar2[i];
  
    let obj = new Solution();
    let res = obj.kthElement(A,B,n,m,k);
    
    console.log(res);

  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
 */

class Solution {
    kthElement(A,B,n,m,k){ 
        //code here
         let s=0
         let e=0
         let c=0
        let arr=[]
         while(s<A.length && e< B.length){
             if(A[s]<B[e]){
                 arr[c]=A[s]
                 s++
             }
             else{
                 arr[c]=B[e]
                 e++
             }
             c++
         }
         while(s<A.length){
             arr[c]=A[s]
                 s++
                 c++
         }
          while(e<B.length){
             arr[c]=B[e]
                 e++
                 c++
         }
         return arr[k-1]
    }
}