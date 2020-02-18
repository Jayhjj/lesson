function ListNode(val) {
    this.val = val;
    this.next = null;
}
var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);
var n4 = new ListNode(4);
var n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(n1);
var reverseKGroup = function(head, k) {
        if (!head || k == 1) {
            return head;
        }
        var dummy = { //哨兵结点
                next: head
            }
            //reverse
        var start = dummy; //初始化时为dummy，动态,之后会变成每一个小组的的开始结点

        var end = head; //初始化?k相关 这个小组的第一个节点
        var count = 0; //计数
        while (end != null) { //一次遍历
            count++;
            if (count % k == 0) { //整除 要翻转 得到小组

            } else {
                end = end.next
            } //更新end的值
        }
        return dummy.next;
    }
    //start,end 是需要reverse的
    //一次翻转
var reverse = function(start, end) {

}
console.log(reverseKGroup(n1, 2));