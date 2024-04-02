/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let finddiff=0
 let i=0
  let j=1
  let max_profit=0
  while(j<prices.length){
    if(prices[i]<prices[j]){
      let profit=prices[j]-prices[i]
      max_profit=Math.max(max_profit,profit)
    }else{
      i=j
    }
    j++
  }
  
  return max_profit
};