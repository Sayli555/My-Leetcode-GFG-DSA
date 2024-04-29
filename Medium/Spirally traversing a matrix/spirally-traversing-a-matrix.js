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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let matrix = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(m);
            for(let j=0;j<m;j++)
            {
                a[j] =parseInt(input_line[i*m+j]);
            }
            matrix[i] = a;
        }
        
        let obj = new Solution();
        let ans = obj.spirallyTraverse(matrix, n, m);
        let s = "";
        for(let i = 0 ; i < ans.length ;i++)
        {
            s+=ans[i];
            s+=" ";   
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[][]} matrix
 * @param {number} r
 * @param {number} c
 * @returns {number[]}
*/
class Solution 
{
    //Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(matrix, r, c)
    {
        // code here
let t=0
let l=0
let j=c-1
let b=r-1
let n=c*r
let count=0
let bag=[]
while(count<n){
  for(let i=l;i<=j && (count<n);i++){
    bag.push(matrix[t][i])
    count++
  }
  t++
  for(let i=t;i<=b && (count<n);i++){
    bag.push(matrix[i][j])
    count++
  }
  j--
  for(let i=j;i>=l && (count<n);i--){
    bag.push(matrix[b][i])
    count++
  }
  b--
  for(let i=b;i>=t && (count<n);i--){
    bag.push(matrix[i][l])
    count++
  }
  l++
}
return bag
    }
}