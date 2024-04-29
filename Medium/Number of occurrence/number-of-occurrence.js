//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let [n,x] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.count(arr,n,x);
        console.log(res);
    
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number}
*/

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