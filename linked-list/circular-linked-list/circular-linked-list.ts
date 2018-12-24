import { NodeStructure } from "./node-structure";

export class CircularLinkedList {
    private start: NodeStructure;
    private size: number = 0;

    addLast (data : number) : void {
        let newNode = new NodeStructure();
        newNode.data = data;
        if(this.start == null) {
            newNode.next = newNode.prev = newNode;
            this.start = newNode;
        }else {
            let temp = this.start;
            while( temp.next != this.start){
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next = newNode;
            this.start.prev = newNode;
        }
        this.size++;
    }

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
// LIST IS :  20 10 40

list.addLast(23);
list.addLast(56);
list.displayList();
// LIST IS :  40 10 20 23 56

