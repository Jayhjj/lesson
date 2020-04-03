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
    this.a = 123;
}
const bar = new Bar();