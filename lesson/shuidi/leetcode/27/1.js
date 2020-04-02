// var nums = [];
// var removeElement = function(nums, val) {
//     let n = 0;
//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] != val) {
//             nums[n] = nums[i];
//             n++;
//         }

//     }
//     console.log(nums);
//     return n
// };
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    return nums.length;
};


var arr = removeElement([3, 3, 2, 2], 3);
console.log(arr);