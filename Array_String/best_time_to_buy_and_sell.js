
let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function(prices) {
    let left = 0; // buy
    let right = 1; // sell
    let maxProfitObtain = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left]
                maxProfitObtain = Math.max(maxProfitObtain, profit)
        } else {
            left = right
        }
        right++
    }

    return maxProfitObtain;

}

maxProfit(prices);