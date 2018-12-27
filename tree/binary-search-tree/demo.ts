import {BinarySearchTree} from "./binary-search-tree";

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