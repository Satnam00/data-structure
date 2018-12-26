import {CircularLinkedList} from "./circular-linked-list";

let list = new CircularLinkedList();
list.addFirst(20);
list.addFirst(10);
list.addFirst(40);
list.displayList();
// LIST IS :  40 10 20


list.addLast(23);
list.addLast(56);
list.displayList();
// LIST IS :  40 10 20 23 56


list.addAtPosition(37 , 5);
list.addAtPosition(7 , 4);
list.addAtPosition(9 , 1);
list.displayList();
// LIST IS :  9 40 10 20 7 23 37 56


list.deleteFirst();
list.displayList();
// LIST IS :  40 10 20 7 23 37 56


list.deleteLast();
list.displayList();
// LIST IS :  40 10 20 7 23 37