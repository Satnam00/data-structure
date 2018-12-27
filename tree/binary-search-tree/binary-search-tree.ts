import {NodeStructure} from "./node-structure";

export class BinarySearchTree {
    private root:NodeStructure;

    insert(root: NodeStructure, data: number) : NodeStructure{

        if(root == null){
            return new NodeStructure(data);
        }

        if(data < root.data)
            root.left = this.insert(root.left, data);
        else if (data > root.data)
            root.right = this.insert(root.right, data);
        else
            console.log('DUPLICATE VALUE IS NOT ALLOWED');

        return root;
    }

    inorder(root: NodeStructure){
        if(root == null)
            return;
        else {
            this.inorder(root.left);
            console.log(' ' + root.data);
            this.inorder(root.right);
        }
    }

    postorder(root: NodeStructure){
        if(root == null)
            return;
        else {
            this.inorder(root.left);
            this.inorder(root.right);
            console.log(' ' + root.data);
        }
    }

    preorder(root: NodeStructure){
        if(root == null)
            return;
        else {
            console.log(' ' + root.data);
            this.inorder(root.left);
            this.inorder(root.right);
        }
    }

    addChild(data: number){
        if(this.root == null){
            this.root = this.insert(this.root, data);
        }
        else{
            this.insert(this.root, data);
        }
    }

    getRoot() : NodeStructure{
        return this.root;
    }

}

let bst = new BinarySearchTree();
bst.addChild(8);
bst.addChild(3);
bst.addChild(5);
bst.addChild(82);
bst.addChild(51);

console.log(' --- INORDER --- ' );
bst.inorder(bst.getRoot());
// --- INORDER ---
// 3 5 8 51 82


console.log(' --- POST-ORDER --- ' );
bst.postorder(bst.getRoot());
// --- POST-ORDER ---
// 3 5 51 82 8


console.log(' --- PRE-ORDER --- ' );
bst.preorder(bst.getRoot());
// --- PRE-ORDER ---
// 8 3 5 51 82