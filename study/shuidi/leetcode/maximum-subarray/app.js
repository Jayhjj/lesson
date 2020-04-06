// o(n2) -> o(n)
function maxSubArray(nums){
    var max = -Number.MAX_VALUE;
    var sum = 0;
    for(let num of nums){
       
        if(sum<0){
            // 加了和跟没加一样
            sum = 0;
        } //加到了什么？让我们从下一个开始 什么情况会放弃之前加的值，不管最大子和是多少，他都是一次for循环
        sum += num;
        max =Math.max(max,sum);
        
    }
    return max;
}
console.log(maxSubArray([1,1,-3,4,-1,2,1,-5,4]));