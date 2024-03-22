// Given a number N. Count the number of digits in N which evenly divide N.

// Note :- Evenly divides means whether N is divisible by a digit i.e. leaves a remainder 0 when divided.
 

// Example 1:

// Input:
// N = 12
// Output:
// 2
// Explanation:
// 1, 2 both divide 12 evenly

class Solution {
    //Function to check whether the number evenly divides N.
    evenlyDivides(N)
    {
        //your code here
        let count=0
        let str=N.toString().split("").map(Number)
        for(let i=0;i<str.length;i++){
            if(str[i]!=0 && N%str[i]==0){
                count++
            }
        }
        return count
    }
}