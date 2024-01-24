
/*
* Interface with generic type 'T'
*/
interface ITreeNode<T> {
    parent: ITreeNode<T>;
    childs: ITreeNode<T>[];
    value: T;
}


/*
* Class used generic interface (+ itself is generic)
*/
class TreeNode<T> implements ITreeNode<T>{
    public parent: ITreeNode<T> = null;
    public childs: ITreeNode<T>[] = [];
    public value: T;

    constructor(value: T) {
        this.value = value;
    }

    public addChild(child: ITreeNode<T>) {
        child.parent = this;
        this.childs.push(child);
    }

}


// Tree of numbers
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







// Tree of characters
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




// Uncomment for error

//charTree.addChild(new TreeNode(5));


/*
var numberTree2: TreeNode<number>;
numberTree2 = new TreeNode("a");
*/