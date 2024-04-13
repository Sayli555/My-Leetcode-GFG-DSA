/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l=0
    let r=height.length-1
    let lm=0
    let rm=0
    let tw=0
    while(l<r){
        if(height[l]<height[r]){
            if(lm<height[l]){
                lm=height[l]
            }
            else{
                tw+=lm-height[l]
            }
            l++
        }
        else{
            if(rm<height[r]){
                rm=height[r]
            }
            else{
                tw+=rm-height[r]
            }
            r--
        }
    }
    return tw
};