export class NodeStructure {
    constructor(data){
        this.data = data;
    }
    data : number;
    left : NodeStructure = null;
    right : NodeStructure = null;
};