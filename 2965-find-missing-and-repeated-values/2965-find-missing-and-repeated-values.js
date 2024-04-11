/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    grid=grid.flat().sort((a,b)=>a-b)
    let sum=0
    let repeat=0
    let sumind=0
    for(let i=0;i<grid.length;i++){
        if(grid[i]==grid[i+1]){
            repeat=grid[i]
        }
        sum+=grid[i]  
        sumind=sumind+i+1
    }
    let miss=sumind-sum+repeat
    return [repeat,miss]
};