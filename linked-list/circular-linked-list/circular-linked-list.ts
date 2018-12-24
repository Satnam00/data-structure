import { NodeStructure } from "./node-structure";

export class CircularLinkedList {
    private start: NodeStructure;
    private size: number = 0;

    addFirst (data : number) : void {
        let newNode = new NodeStructure();
        newNode.data = data;

        if(this.start == null){
            newNode.next = newNode.prev = newNode;
            this.start = newNode;
        }else{
            let temp = this.start;
            newNode.prev = temp.prev;
            temp.prev.next = newNode;
            temp.prev = newNode;
            newNode.next = temp;
            this.start = newNode;
        }
        this.size++;
    }

    addLast (data : number) : void {
        let newNode = new NodeStructure();
        newNode.data = data;
        if(this.start == null) {
            newNode.next = newNode.prev = newNode;
            this.start = newNode;
        }else {
            let temp = this.start;
            newNode.next = temp;
            newNode.prev = temp.prev;
            temp.prev = newNode;
            newNode.prev.next = newNode;
        }
        this.size++;
    }

    addAtPosition (data : number, index: number) {

        let newNode = new NodeStructure();
        newNode.data = data;
        if(this.start == null) {
            newNode.next = newNode.prev = newNode;
            this.start = newNode;
        }else if(index == 1) {
            this.addFirst(data);
        }else if (index == this.size+1) {
            this.addLast(data);
        }else if(index > 1 && index <= this.size) {
            let counter = 1;
            let temp = this.start;

            // traversing start from (HEAD)
            if( index < this.size/2 ) {
                while (counter < index){
                    temp = temp.next;
                    counter++;
                }
            }
            // traversing start from (TAIL)
            else {
                let counter = this.size;
                while ( counter >= index) {
                    temp = temp.prev;
                    counter--;
                }
            }
            newNode.prev = temp.prev;
            newNode.next = temp;
            temp.prev = newNode;
            newNode.prev.next = newNode;
            this.size++;
        }else{
            console.log('INVALID POSITION');
        }
    }

    deleteFirst() : void {
        if(this.start == null){
            console.log('THE LIST IS ALREADY EMPTY');
        } else if (this.start.next == this.start){
            this.start = null;
        }
        else {
            let temp = this.start;
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            this.start = temp.next;
            temp = null;
        }
    }

    deleteLast() : void {
        if(this.start == null) {
            console.log('THE LIST IS ALREADY EMPTY');
        } else if(this.start.next == this.start){
            this.start = null;
        }
        else {
           let lastNode = this.start.prev;
           lastNode.prev.next = lastNode.next;
           lastNode.next.prev = lastNode.prev;
           lastNode = null;
        }
    }

    displayList () : void {
        if(this.start == null) {
            console.log('THE LIST IS EMPTY !!');
        }else{
            let temp = new NodeStructure();
            temp = this.start;
            let listData = "";

            do {
                listData += " " + temp.data;
                temp = temp.next;
            } while (temp != this.start)

            console.log('LIST IS :',listData);
        }
    }
}

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