/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode (val) {
    this.val = val;
    this.next= null;
}
var removeNthFromEnd = function(head, n) {
    let zeroNode = new ListNode(0);
    zeroNode.next = head;
    let first = head;
    let length = 0;
    while(first) {
        length++;
        first = first.next;
    }
    let num = length - n;
    first = zeroNode;
    for( let i = 0; i < num; i++) {
        first = first.next;
    }
    first.next = first.next.next;
    return zeroNode.next;
};

let firstNode = new ListNode(1);
let secondNode = firstNode.next = new ListNode(2);
let thirdNode = secondNode.next = new ListNode(3);
let forthNode = thirdNode.next = new ListNode(4);
let fifthNode = forthNode.next = new ListNode(5);
var list = removeNthFromEnd(firstNode, 3);

while(list) {
    console.log(list.val);
    list = list.next;
}


