import {BinarySearchTree} from "../binary-search-tree/binary-search-tree";
import {BalancedBinarySearchTree} from "./balanced-binary-search-tree";


// CREATE BINARY TREE - WITHOUT BALANCED ..
let bst = new BinarySearchTree();
bst.addChild(1);
bst.addChild(2);
bst.addChild(3);
bst.addChild(4);
bst.addChild(5);
bst.addChild(6);
bst.addChild(8);
bst.addChild(7);
console.log('binary tree root value : ', bst.getRoot().data);



// PASS THE BINARY TREE TO BALANCED ...
let balancedBST = new BalancedBinarySearchTree();
let root = balancedBST.buildTree(bst.getRoot());

console.log('balanced binary tree root value : ', root.data);
console.log('BALANCED TREE : ');
bst.inorder(root);


//output :
// binary tree root value :  1
// balanced binary tree root value :  4

// BALANCED TREE :
// 1 2 3 4 5 6 7 8
