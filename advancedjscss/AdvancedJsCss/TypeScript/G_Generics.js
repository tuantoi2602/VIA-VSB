/*
* Třída využívající generický interface (+ ona sama je generická)
*/
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.parent = null;
        this.childs = [];
        this.value = value;
    }
    TreeNode.prototype.addChild = function (child) {
        child.parent = this;
        this.childs.push(child);
    };
    return TreeNode;
}());
// Sestrojíme strom čísel
var numberTree = new TreeNode(50);
var numberChild1 = new TreeNode(20);
numberTree.addChild(numberChild1);
var numberChild2 = new TreeNode(70);
numberTree.addChild(numberChild2);
numberChild1.addChild(new TreeNode(10));
numberChild1.addChild(new TreeNode(86));
numberChild2.addChild(new TreeNode(0.5));
numberChild2.addChild(new TreeNode(168));
/*
* Vytvořený strom:
*
*               50
*             /    \
*            /      \
*           /        \
*         20          70
*        /  \        /  \
*      10    86   0.5    168
*
*/
// Sestrojíme strom znaků
var charTree = new TreeNode("a");
var charChild1 = new TreeNode("b");
charTree.addChild(charChild1);
var charChild2 = new TreeNode("h");
charTree.addChild(charChild2);
charChild1.addChild(new TreeNode("r"));
charChild1.addChild(new TreeNode("c"));
charChild2.addChild(new TreeNode("q"));
charChild2.addChild(new TreeNode("z"));
/*
* Vytvořený strom:
*
*               a
*             /   \
*            /     \
*           /       \
*          b         h
*        /  \       /  \
*       r    c     q    z
*
*/
// Pro ukázku odkomentovat
//charTree.addChild(new TreeNode(5));
/*
var numberTree2: TreeNode<number>;
numberTree2 = new TreeNode("a");
*/ 
//# sourceMappingURL=G_Generics.js.map