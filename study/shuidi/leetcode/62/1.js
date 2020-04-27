// var lastRemaining = function(n, m) {
//     var last = 0;
//     for (var i = 2; i <= n; i++) {
//         last = (m + last) % i;
//     }
//     return last;
// };
// var arr = lastRemaining(10, 17);
// console.log(arr);
var length = 10;

function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};

obj.method(fn, 1, 2);
// console.log(fn);