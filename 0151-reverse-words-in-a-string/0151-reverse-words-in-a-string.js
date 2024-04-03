/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.trim().split(/\s+/)
let bag=[]
for(let i=s.length-1;i>=0;i--){
  bag.push(s[i])
}
return bag.join(" ")
};