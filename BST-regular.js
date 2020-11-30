class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    /**
     * Adds some value to the tree
     * @param {number} data The value to add into the tree
     */
    add(data) {
      const node = new Node(data);
      if (this.root === null) {
        this.root = node;
      } else {
        const searchNode = function(current) {
          if (data < current.data) {
            if (current.left === null) {
              current.left = node;
              return;
            } else {
              return searchNode(current.left);
            }
          } else if (data > current.data) {
            if (current.right === null) {
              current.right = node;
              return;
            } else {
              return searchNode(current.right);
            }
          } else {
            return null;
          }
        };
        return searchNode(this.root);
      }
    }
  
    /**
     * Determines if a given value exists in the tree
     * @param {number} data The value to find
     */
    search(data) {
      const searchNode = function(current) {
        if (current === null) return false;
        if (data < current.data) return searchNode(current.left);
        if (data > current.data) return searchNode(current.right);
        return true;
      };
      return searchNode(this.root);
    }
  
    /**
     * Remove the value from the tree
     * @param {number} data The node to be removeed
     */
    remove(data) {
      const removeNode = function(current, data) {
        if (current === null) return null;
        if (data < current.data) {
          current.left = removeNode(current.left, data);
        } else if (data > current.data) {
          current.right = removeNode(current.right, data);
        } else {
          if (current.left === null && current.right === null) return null;
          if (current.left === null) return current.right;
          if (current.right === null) return current.left;
          let replacement = current.left;
          let replacementParent = current;
          while (replacementParent.right !== null) {
            replacementParent = replacement;
            replacement = replacement.right;
          }
          current.data = replacementParent.data;
          current.left = removeNode(current.left, replacementParent.data);
        }
        return current;
      };
      this.root = removeNode(this.root, data);
    }
  
    toString() {
      return JSON.stringify(this.root);
    }
  }
  
  const tree = new BST();
  tree.add(4);
  tree.add(2);
  tree.add(5);
  tree.add(1);
  tree.add(3);
  
  // /**
  //  * Calculate diameter with center `root`
  //  * @param {TreeNode} root
  //  * @returns {number}
  //  */
  const countDiameter = root => {
    if (!root) return 0;

    console.log('hkgk', countDiameter(root.left), countDiameter(root.right));
  
    return 1 + Math.max(countDiameter(root.left), countDiameter(root.right));
  };
  
  /**
   * @param {TreeNode} root
   * @returns {number}
   */
  const diameterOfBinaryTree = root => {
    if (!root) return 0;
  
    const center = countDiameter(root.left) + countDiameter(root.right);
    const left = diameterOfBinaryTree(root.left);
    const right = diameterOfBinaryTree(root.right);
  
    return Math.max(center, left, right);
  };

  console.log(tree.root);
  
  console.log(diameterOfBinaryTree(tree.root))