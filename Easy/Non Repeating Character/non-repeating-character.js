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
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let obj = new Solution();
        let ans = obj.nonrepeatingCharacter(s);
        if(ans=='$')
        ans='-1';
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
*/
class Solution 
{
    //Function to find the first non-repeating character in a string.
    nonrepeatingCharacter(s)
    {
        // code here
        let obj={}
        for(let i=0;i<s.length;i++){
            if(obj[s[i]]==undefined){
                obj[s[i]]=1
            }
            else{
                obj[s[i]]++
            }
        }
        
        for(let key in obj){
            if(obj[key]<2){
                return key
            }
        }
        return -1
    }
}