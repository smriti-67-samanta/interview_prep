function maxProfit(arr){
     let minPrice   = Infinity;
     let maxProfit  = 0;

     for(let ele of arr){
        if(ele<minPrice){
            minPrice=ele
        }
        else if(ele-minPrice>maxProfit){
            maxProfit = ele-minPrice
        }
     }

     return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 (buy at 1, sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1]));     // 0 (prices only go down, no profit)