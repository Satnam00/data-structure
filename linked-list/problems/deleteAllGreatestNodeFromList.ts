import { SinglyLinkedList } from "../singly-linked-list/singly-linked-list";

// problem : delete all greatest number nodes from list based on user node inputs.
// ex: List : 2 7 4 3 5 1 3 6 -> input: 4 -> output: 2 3 1 3

export class DeleteAllGreatestNodeFromList {
    private list:SinglyLinkedList;

    constructor(data : number) {
        this.list = new SinglyLinkedList();
        let inputs : number[] = [10,2,4,7,20,6,9,11,3,1,13,17,19,20];
        for( let input of inputs) {
            this.list.addLast(input);
        }
        this.list.printList();
        console.log('size : '+ this.list.getSizeOfList());
        this.deleteAllGreatestValues(data);
        this.list.printList();
    }

    private deleteAllGreatestValues(data: number) {
        let temp = this.list.getStartNode();
        while( temp.data > data ) {
            this.list.removeFirstNode();
            temp = this.list.getStartNode();
            if(this.list.getSizeOfList() == 0 )
                break;
        }

        let successor = temp;
        while( temp != null ) {
            if( temp.data > data ) {
                successor.next = temp.next;
                temp = successor.next;
                this.list.decreaseByOneSizeOfList();
            }else {
                successor = temp;
                temp = temp.next;
            }
        }
    }

    getList() : SinglyLinkedList {
        return this.list;
    }
}

console.log('size : ', new DeleteAllGreatestNodeFromList(9).getList().getSizeOfList());
// List:  10 2 4 7 20 6 9 11 3 1 13 17 19 20
// size : 14
// List:  2 4 7 6 9 3 1
// size :  7
