class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    insert(value, parentNodeValue) {
        const newNode = new Node(value);
        let queue = [];
        queue.push(this.root);

        while(queue.length) {
            const currentNode = queue.shift();
            if(currentNode.value === parentNodeValue) {
                currentNode.children.push(newNode)
                return;
            } else if ( currentNode.children) {
                queue = queue.concat(...currentNode.children);
            }
        }
    }
}

const tree = new Tree(100);
tree.insert(200,100);
tree.insert(300,100);
tree.insert(400,100);
tree.insert(500,400);
tree.insert(600,500);

console.log(JSON.stringify(tree))