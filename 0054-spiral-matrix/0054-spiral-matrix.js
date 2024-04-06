/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
          // code here
let t=0
let l=0
let j=matrix[0].length-1
let b=matrix.length-1
let n=(matrix[0].length)*(matrix.length)
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
};