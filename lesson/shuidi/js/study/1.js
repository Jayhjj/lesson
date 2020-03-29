function getMax(arr) {
    var max = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max
}
var re = getMax([4, 5, 6, 7, 8])
console.log(re);

function fn() {
    console.log(arguments);
}
fn(1, 2, 4);

function reverse(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}
var x = reverse([1, 2, 3, 4, 5]);
console.log(x);