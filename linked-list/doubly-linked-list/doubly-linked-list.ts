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
        }else {
            console.log('INVALID POSITION');
        }
    }

    deleteFirst() : void {
        let temp = new NodeStructure();
        temp = this.start;

        if( this.start === null ) {
            console.log('THE LIST IS ALREADY EMPTY !!');
        }else {
            this.start = temp.next;
            temp = null;
            this.size--;
        }
    }

    deleteLast(): void {
        if(this.start == null) {
            console.log('THE LIST IS ALREADY EMPTY !!');
        }else {
            let temp = new NodeStructure();
            temp = this.start;
            let successor = temp;

            while (temp.next != null){
                successor = temp;
                temp = temp.next;
            }
            successor.next = null;
            temp = null;
            this.size--;
        }
    }

    deleteAtPosition(index: number) {
        if (this.start == null) {
            console.log('THE LIST IS ALREADY EMPTY !!');
        }else if(index == 1){
                this.deleteFirst();
        } else if (index == this.size){
            this.deleteLast();
        }else if( index > 1 && index < this.size){
            let counter = 1;
            let temp = new NodeStructure();
            temp = this.start;
            while( counter < index ){
                temp = temp.next;
                counter++;
            }
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            temp = null;
            this.size--;
        }
        else{
            console.log('INVALID POSITION');
        }
    }

    updateAtPosition(data: number, index: number) {
        if(this.start == null){
            console.log('THE LIST IS ALREADY EMPTY !!');
        }else if(index >= 1 && index <= this.size){
            let temp = new NodeStructure();
            temp = this.start;
            let counter = 1;
            while( counter < index){
                temp = temp.next;
                counter++;
            }
            temp.data = data;
        } else {
            console.log('INVALID POSITION');
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