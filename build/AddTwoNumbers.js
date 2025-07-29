/**
 * Definition for singly-linked list.
 */
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function addTwoNumbers(l1, l2) {
    let sumNode = new ListNode(0);
    let currentNode = null;
    let remember = 0;
    while (l1 || l2 || remember !== 0) {
        if (currentNode === null) {
            currentNode = new ListNode(0);
        }
        else {
            currentNode.next = new ListNode(remember);
            currentNode = currentNode.next;
        }
        if (l1 !== null) {
            currentNode.val += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            currentNode.val += l2.val;
            l2 = l2.next;
        }
        if (currentNode.val >= 10) {
            remember = 1;
            currentNode.val -= 10;
        }
        else {
            remember = 0;
        }
        if (sumNode.next === null) {
            sumNode.next = currentNode;
        }
    }
    return sumNode.next === null ? sumNode : sumNode.next;
}
