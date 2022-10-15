const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function add(node, list) {
    if (node.next === null) {
        node.next = list;
        return;
    }

    add(node.next, list);
}
function removeKFromList(l, k) {
    if (l === null)
        return null;

    let res = null;

    while (l !== null) {
        if (l.value !== k) {
            const prevNode = new ListNode(l.value);

            if (res === null)
                res = prevNode;
            else {
                add(res, prevNode);
            }            
        }

        l = l.next;
    }


    return res;
}

module.exports = {
  removeKFromList
};
