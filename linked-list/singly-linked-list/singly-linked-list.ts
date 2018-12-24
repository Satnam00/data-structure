import { NodeStructure } from './node-structure'

export class SinglyLinkedList {

    private start : NodeStructure = null;
    private size : number = 0;

    addFirst (data : any) : void {
        let temp = new NodeStructure();
        temp.data = data;
        if(this.start == null) {
            this.start = temp;
        }else{
            temp.next = this.start;
            this.start = temp;
        }
        this.size++;
    }

    addLast (data: any) : void {
        let newNode = new NodeStructure();
        newNode.data = data;
        if(this.start == null){
            this.start = newNode;
        }else{
            let temp = this.start;
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.size++;
    }

    /*Consider first node element index as 1 while inserting*/
    addAtPosition (data: any, index : number) : void {
        let newNode = new NodeStructure();
        newNode.data = data;
        if(index == 1){
            this.addFirst(data);
        }else if(index == this.size+1){
            this.addLast(data);
        }
        else if(index > 1 && index < this.size+1){
            let temp = this.start , counter = 1;
            while(counter < index - 1){
                temp = temp.next;
                counter++;
            }
            newNode.next = temp.next;
            temp.next = newNode;
            this.size++;
        }else{
            console.log('INVALID POSITION');
        }
    }

    removeFirstNode() : void {
        if(this.start == null) {
            console.log('ALREADY LIST IS EMPTY !!');
        }else {
            let temp = this.start.next;
            this.start.next = null;
            this.start = temp;
            this.size--;
        }
    }

    removeLastNode() : void {
        if(this.start == null) {
            console.log('ALREADY LIST IS EMPTY !!');
        }else if( this.start.next == null){
            this.removeFirstNode();
        } else {
            let temp = this.start;
            let successor = temp;
            while(temp.next != null){
                successor = temp;
                temp = temp.next;
            }
            successor.next = null;
            this.size--;
        }
    }

    /*Consider first node element index as 1 while removing*/
    removeAtPosition(index: number) : void {
        if(this.start == null){
            console.log('ALREADY LIST IS EMPTY !!');
        }else if(index == 1){
            this.removeFirstNode();
        }else if( index == this.size ) {
            this.removeLastNode();
        }else if( index > 1 && index < this.size ){
            let counter = 1;
            let temp = this.start;
            let successor = temp;
            while(counter < index ) {
                successor = temp;
                temp = temp.next;
                counter++;
            }
            successor.next = temp.next;
            temp.next = null;
            this.size--;
        }else{
            console.log('INVALID POSITION');
        }
    }

    updateAtPosition (data: any, index : number) {
        if(this.start == null){
            console.log('THE LIST IS EMPTY !!');
        }else if( index >= 1 && index <= this.size ){
            let counter = 1, temp = this.start;
            while (counter < index){
                temp = temp.next;
                counter++;
            }
            temp.data = data;
        }else {
            console.log('INVALID POSITION');
        }
    }

    printList() : void {
      if(this.start == null){
        console.log('THE LIST IS EMPTY !!');
      }else{
        let temp = this.start;
        let listData = "";
        while(temp != null){
            listData += ' ' + temp.data;
            temp = temp.next;
        }
        console.log('List: ' + listData);
      }
    }

    deleteAll() : void {
        if(this.start == null){
            console.log("THE LIST IS ALREADY EMPTY");
        }else{
            this.start = null;
            this.size = 0;
            console.log("ALL DELETED");
        }
    }

    getSizeOfList() : number {
        return this.size;
    }

}
