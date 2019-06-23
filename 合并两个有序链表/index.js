/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode (val) {
    this.val = val;
    this.next= null;
}
var mergeTwoLists = function(l1, l2) {
    let resultNode = new ListNode(-1);
    let pre = resultNode;
    while(l1 != null && l2 != null) {
        if(l1.val > l2.val) {
            pre.next = l2;
            l2 = l2.next;
        } else if(l1.val < l2.val || l1.val == l2.val) {
            pre.next = l1;
            l1 = l1.next;
        }
        pre = pre.next;
    }
    pre.next = l1 == null ? l2 : l1;
    return resultNode.next;
};


let firstNode = new ListNode(1);
let secondNode = firstNode.next = new ListNode(2);
let thirdNode = secondNode.next = new ListNode(4);

let firstNode1 = new ListNode(1);
let secondNode1 = firstNode1.next = new ListNode(3);
let thirdNode1 = secondNode1.next = new ListNode(4);
var list = mergeTwoLists(firstNode, firstNode1);

