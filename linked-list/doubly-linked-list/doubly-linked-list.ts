import { NodeStructure } from './node-structure';

export class DoublyLinkedList {
    private start : NodeStructure;
    private size : number = 0;

    addFirst (data: number) {
        let temp = new NodeStructure();
        temp.data = data;

        if(this.start == null){
            this.start = temp;
        }else{
            temp.next = this.start;
            this.start.prev = temp;
            this.start = temp;
        }
        this.size++;
    }

    addLast (data: number) {
        let newNode = new NodeStructure();
        newNode.data = data;

        let temp = this.start;
        if(this.start == null) {
            this.start = newNode;
        }else {
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.prev = temp;
        }
        this.size++;
    }

    addAtPosition ( data: number , index: number) {

        let newNode = new NodeStructure();
        newNode.data = data;
        if(this.start == null) {
            this.start = newNode;
        }else if (index == 1){
            this.addFirst(data);
        }else if (index == this.size + 1) {
            this.addLast(data);
        }else if (index > 1 && index < this.size + 1) {
            let temp = new NodeStructure();
            let successor = temp;
            temp = this.start;
            let counter = 1;
            while ( counter < index ) {
                successor = temp;
                temp = temp.next;
                counter++;
            }
            newNode.prev = successor;
            newNode.next = temp;
            temp.prev = newNode;
            successor.next = newNode;
            this.size++;
        }
    }

    displayList() {
        let temp = new NodeStructure();
        temp = this.start;
        if(this.start == null) {
            console.log("THE LIST IS EMPTY !!");
        } else {
            let listData = "";
            while( temp !== null){
                listData += " " + temp.data;
                temp = temp.next;
            }
            console.log('LIST : '+listData);
        }
    }

    getSize() : number {
        return this.size;
    }
}

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