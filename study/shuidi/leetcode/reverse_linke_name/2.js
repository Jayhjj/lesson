function listNode(val) {
    this.val = val;
    this.next = null; //指向下一个结点
}

const reverseList = (head) => {
    if (head == null || head.next == null) {
        //退出条件
        return head; //头结点
    } else {
        let newHead = reverseList(head.next) //递归
        head.next.next = head; //反过来
        head.next = null; //把之前的next的干掉
        return newHead;
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