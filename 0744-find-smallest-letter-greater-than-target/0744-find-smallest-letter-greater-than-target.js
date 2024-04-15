/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let l=0
    let h=letters.length-1
    let ans=letters[0]
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2)
        if(letters[mid]==target){
           l= mid+1 
        }
      if(letters[mid]>target){
        ans=letters[mid]
        h=mid-1
      }
      if(letters[mid]<target){
        l=mid+1
      }
    }
    return ans
};