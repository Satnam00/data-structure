import {DoublyLinkedList} from "./doubly-linked-list";

let list = new DoublyLinkedList();
list.addFirst(10);
list.addFirst(30);
list.addFirst(20);
list.addFirst(80);
list.displayList();
// LIST :  80 20 30 10

list.addLast(90);
list.addLast(43);
list.displayList();
// LIST :  80 20 30 10 90 43

list.addAtPosition(46,2);
list.addAtPosition(87,5);
list.addAtPosition(5,7);
list.displayList();
// LIST :  80 46 20 30 87 10 5 90 43

list.deleteFirst();
list.displayList();
// LIST :  46 20 30 87 10 5 90 43

list.deleteLast();
list.displayList();
// LIST :  46 20 30 87 10 5 90

list.deleteAtPosition(4);
list.displayList();
// 46 20 30 10 5 90

list.updateAtPosition(96 , 3);
list.updateAtPosition(16 , 5);
list.displayList();
list.updateAtPosition(96 , 9);
// LIST :  46 20 96 10 16 90
// INVALID POSITION

console.log('LIST SIZE : ' , list.getSize());
// LIST SIZE :  6