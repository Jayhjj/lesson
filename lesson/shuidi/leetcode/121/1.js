var maxProfit = function(prices) {
    var max = 0
        // var x = number[0];
    for (var i = 0; i < prices.length - 1; i++) {
        for (var j = i + 1; j < prices.length; j++) {
            var x = prices[j] - prices[i];
            if (x > max) {
                max = x;
            }
        }
    }
    return max
};
var arr = maxProfit([7, 1, 5, 3, 6, 4])
console.log(arr);