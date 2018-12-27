import {NodeStructure} from "./node-structure";
import {BinarySearchTree} from "../binary-search-tree/binary-search-tree";

export class BalancedBinarySearchTree {

    constructor() {
    }

    buildTree(root : NodeStructure ) : NodeStructure {
        let nodes : NodeStructure[]= [];

        this.storedInBSTNodes (root,nodes);
        let length = nodes.length;
        return this.buildBalancedTree (nodes, 0, length-1);
    }

    storedInBSTNodes(root: NodeStructure, nodes: NodeStructure[]) {
        if(root == null)
            return;

        this.storedInBSTNodes(root.left,nodes);
        nodes.push(root);
        this.storedInBSTNodes(root.right,nodes);
    }

    private buildBalancedTree(nodes: NodeStructure[], start: number, end: number) {

        if( start > end )
            return;

        let midIndex = Math.floor((start + end) / 2);

        let root = nodes[midIndex];
        root.left = this.buildBalancedTree(nodes,start,midIndex-1);
        root.right = this.buildBalancedTree(nodes,midIndex+1, end);

        return root;
    }
}
