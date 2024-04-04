// Given a matrix of size r*c. Traverse the matrix in spiral form.

// Example 1:

// Input:
// r = 4, c = 4
// matrix[][] = {{1, 2, 3, 4},
//            {5, 6, 7, 8},
//            {9, 10, 11, 12},
//            {13, 14, 15,16}}
// Output: 
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

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