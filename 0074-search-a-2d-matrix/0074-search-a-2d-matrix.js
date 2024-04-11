/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let r=matrix.length
    let c=matrix[0].length
    let i=0
    let j=r*c-1
    while(i<=j){
        let mid=Math.floor(i+(j-i)/2)
        let matmid=matrix[Math.floor(mid/c)][mid%c]
        if(target==matmid){
            return true
        }
        else if(target>matmid){
            i=mid+1
        }
        else{
            j=mid-1
        }
    }
    return false

};