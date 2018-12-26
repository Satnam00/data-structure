import {SinglyLinkedList} from "./singly-linked-list";


//1. add nodes in first position
let list = new SinglyLinkedList();
list.addFirst(10);
list.addFirst("abc");
list.addFirst(20);
list.printList();
// output :
// List:  20 abc 10


//2. add nodes in last position
list.addLast(90);
list.addFirst("a");
list.printList();
// List:  a 20 abc 10 90


//3. add node at specific index
list.addAtPosition(100,6);
list.printList();
list.addAtPosition(9,6);
list.printList();
list.addAtPosition(30,1);
list.printList();
// List:  a 20 abc 10 90 100
// List:  a 20 abc 10 90 9 100
// List:  30 a 20 abc 10 90 9 100


//4. remove first node
list.removeFirstNode();
list.printList();
// List:  a 20 abc 10 90 9 100


//5. remove last node
list.removeLastNode();
list.printList();
// List:  a 20 abc 10 90 9


//6. remove node at specific position
list.removeAtPosition(6);
list.printList();
list.addFirst(36);
list.addLast(56);
list.printList();
list.removeAtPosition(1);
list.printList();
list.addLast(89);
list.removeAtPosition(3);
list.printList();
// List:  a 20 abc 10 90
// List:  36 a 20 abc 10 90 56
// List:  a 20 abc 10 90 56
// List:  a 20 10 90 56 89


//7. update node at specific position
list.updateAtPosition(24,3);
list.printList();
// List:  a 20 24 90 56 89