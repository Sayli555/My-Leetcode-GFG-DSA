/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sym=["I","V","X","L","C","D","M"];
    let num=[1,5,10,50,100,500,1000]
    let bag=[]
    let sum=0
    for(let i=0;i<s.length;i++){
        bag[0]=s[i]
        bag[1]=s[i+1]
        if(bag.join("")=="IV"){
            sum+=4;
            i++
            bag=[]
        }
        else if(bag.join("")=="IX"){
            sum+=9;
            i++
            bag=[]
        }
        else if(bag.join("")=="XL"){
            sum+=40
            i++
            bag=[]
        }
        else if(bag.join("")=="XC"){
            sum+=90
            i++
            bag=[]
        }
         else if(bag.join("")=="CD"){
            sum+=400
            i++
            bag=[]
        }
         else if(bag.join("")=="CM"){
            sum+=900
            i++
            bag=[]
        }else{
            for(let j=0;j<sym.length;j++){
                if(sym[j]==s[i]){
                    sum+=num[j]
                }
            }
        }
    }
    return sum
}