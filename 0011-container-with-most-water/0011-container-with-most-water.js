/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0;
    let r=height.length-1
   let area=0
   while(l<r){
    let findArea=Math.min(height[l],height[r]) * (r-l)
    area=Math.max(area,findArea)
    if(height[l]<height[r]){
        l++
    }else{
        r--
    }
   }
   return area
};