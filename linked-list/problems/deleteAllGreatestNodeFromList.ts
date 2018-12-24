import { SinglyLinkedList } from "../singly-linked-list/singly-linked-list";

export class DeleteAllGreatestNodeFromList {
    private list:SinglyLinkedList;

    constructor() {
        this.list = new SinglyLinkedList();
        let inputs : number[] = [10,2,4,7,20,6,9,11,3,1,13,17,19,20];
        for( let input of inputs){
            this.list.addLast(input);
        }
        this.list.printList();
    }
}

new DeleteAllGreatestNodeFromList();