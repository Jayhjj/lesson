function listNode(val) {
    this.val = val;
    this.next = null; //指向下一个结点
}
// 下个结点 后继结点
// 当前结点 除了头结点会有前驱结点
var reverseList = function(head) {
    if (!head || !head.next) return head //空链表或者只有一个结点
    let cur = head; //当前结点
    let pre = null; //前驱结点
    while (cur) { //遍历
        const next = cur.next; //后继结点
        cur.next = pre; //反过来 将当前结点的指针指向前一个结点
        //如果cur是前结点
        pre = cur; //前驱结点变成当前结点
        cur = next; //后继结点变成当前结点
    }
}
const n1 = new listNode(1);
const n2 = new listNode(2);
const n3 = new listNode(3);
const n4 = new listNode(4);
const n5 = new listNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
//console.log(n1);