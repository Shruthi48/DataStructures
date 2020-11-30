
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    insert(value) {
      const newNode = new Node(value);
      this.count ++
      const searchTree = node => {
          if(value < node.value) {
              if(!node.left){
                  node.left = newNode
              } else {
                searchTree(node.left)
              }
          } else if(value > node.value) {
              if(!node.right) {
                  node.right = newNode
              } else {
                searchTree(node.right)
              }
          }
      }

      searchTree(this.root);
    }

    size() {
      return this.count;
    }

    min() {
      let currentNode = this.root;
      
        while(currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    max() {
        let currentNode = this.root;
      
        while(currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }

    contains(value) {
       const traverse = node => {
           if(value === node.value){
               return true;
           } else if ( value < node.value) {
               traverse(node.left);
           } else if ( value > node.value) {
               traverse(node.right);
           } else {
               return false;
           }
       }

       traverse(this.root);
    }


    //--------- DFS -------------

    // DFS - inorder - left, root, right
    dfsInOrder() {
      let result = [];
      const traverse = node => {
          if(node.left) traverse(node.left);
          result.push(node.value);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return result;
    }

    // DFS - preorder -  root, left, right
    dfsPreOrder() {
      let result = [];
      const traverse = node => {
        result.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return result;
    }

     // DFS - postorder - left, right, root
    dfsPostOrder(){
        let result = [];
        const traverse = node => {
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
          result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    // -------BFS ---------

    bfs() {
      let result = [];
      let queue = [];

      queue.push(this.root);

      while(queue.length) {
          const currentNode = queue.shift()
          result.push(currentNode.value);

          if(currentNode.left) {
              queue.push(currentNode.left)
          } 
          if (currentNode.right) {
              queue.push(currentNode.right)
          }
      }
      return result;
    }


    diameterOfBinaryTree(){
        const walk = (node) => {
            if(node === null) return [0,0];
            const [leftDiameter, leftHeight] = walk(node.left);
            const[rightDiameter, rightHeight] = walk(node.right);
    
            return [ Math.max(leftDiameter, rightDiameter, leftHeight+rightHeight), Math.max(leftHeight, rightHeight)]
        }
        return walk(this.root);
    }

    
}


const bst = new BST(1);
// bst.insert(10);
// bst.insert(500);
// bst.insert(5);
// bst.insert(15);
// bst.insert(200);
// bst.insert(600);

bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);

console.log(bst);

// console.log('The Binary tree\n-------\n', bst);
// console.log('size', bst.size());
// console.log('min value', bst.min());
// console.log('max value', bst.max());

// console.log('------DFS------\n');
// console.log('dfs in-order:', bst.dfsInOrder());
// console.log('dfs pre-order:', bst.dfsPreOrder());
// console.log('dfs post-order:', bst.dfsPostOrder());


// console.log('-------BFS-----\n');
// console.log('bfs result:', bst.bfs())



console.log(bst.diameterOfBinaryTree())