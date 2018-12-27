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
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(' ' + root.data);
        }
    }

    preorder(root: NodeStructure){
        if(root == null)
            return;
        else {
            console.log(' ' + root.data);
            this.preorder(root.left);
            this.preorder(root.right);
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
