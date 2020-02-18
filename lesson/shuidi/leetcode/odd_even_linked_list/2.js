function ListNode(val) {
    this.val = val;
    this.next = null;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

//1.原地，没有两个数组可以用了，O(n)
//2.哨兵结点

var oddEvenList = function(head) {
    if (!head || !head.next)
        return head;
    //哨兵结点 假
    const dummyHead1 = {
        //没有value
        next: head
    }
    return dummyHead1.next;
}
console.log(oddEvenList(n1));