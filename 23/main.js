/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return arrayToLinkedList(lists.map(list => linkedListToArray(list)).flat().sort((a, b) => a - b));
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next
}

function linkedListToArray(l) {
  let result = [];
  while (l !== null) {
    result.push(l.val);
    l = l.next;
  }
  return result;
}

function arrayToLinkedList(array) {
  if (array.length === 0) return null;
  let current;
  let head = new ListNode(array[0], null);
  current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = new ListNode(array[i], null);
    current = current.next;
  }
  return head;
}


// TEST SUITE

// TEST 1

function test1() {
  let list1 = arrayToLinkedList([1, 4, 5]);
  let list2 = arrayToLinkedList([1, 3, 4]);
  let list3 = arrayToLinkedList([2, 6]);
  let lists = [list1, list2, list3];
  let actual = JSON.stringify(linkedListToArray(mergeKLists(lists)));
  let expected = JSON.stringify([1, 1, 2, 3, 4, 4, 5, 6]);
  if (actual === expected) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test1());

// TEST 2

function test2() {
  let list1 = arrayToLinkedList([1]);
  let lists = [list1];
  let actual = JSON.stringify(linkedListToArray(mergeKLists(lists)));
  let expected = JSON.stringify([1]);
  if (actual === expected) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test2());

// TEST 3

function test3() {
  let list1 = arrayToLinkedList([]);
  let list2 = arrayToLinkedList([-1, 5, 11]);
  let list3 = arrayToLinkedList([]);
  let list4 = arrayToLinkedList([6, 10]);
  let lists = [list1, list2, list3, list4];
  let actual = JSON.stringify(linkedListToArray(mergeKLists(lists)));
  let expected = JSON.stringify([-1,5,6,10,11]);
  if (actual === expected) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test3());