/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
let ans =validPalindrom(s)
return ans
};

function validPalindrom(s){
    let l=0
    let r=s.length-1
    while(l<r){
        if(s[l]!=s[r]){
            return isPalidron(s,l+1,r) || isPalidron(s,l,r-1)
        }
        l++
        r--

    }
    return true
}

function isPalidron(s,l,r){

while(l<r){
    if(s[l]!=s[r]){
        return false
    }
    l++
    r--
}
return true
}