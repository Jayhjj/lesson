function foo() {
    console.log(this.a);
}
let obj = {
    a: 1,
    foo
}
foo();

foo.call()
foo.apply()
foo.bind()

function Bar() {
    //thid
    this.a = 123;
}
//new 的时候 ，this 指向 bar
const bar = new Bar();
