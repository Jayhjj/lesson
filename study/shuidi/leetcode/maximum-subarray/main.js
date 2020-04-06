// o(n3) -> o(n2)
function maxSubArray(nums){
    let thisnum,i,j,maxsum = -Number.MAX_VALUE
    for(let i = 0;i<nums.length;i++){
        thisnum = 0;
        for(let j = i;j<nums.length;j++){
            // 少一次循环
            thisnum += nums[j];
            if(thisnum>maxsum){
                maxsum = thisnum;
            }
        }
    }
    return maxsum;
}
console.log(maxSubArray([1,1,-3,4,-1,2,1,-5,4]));