/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root) return 0;

    let total = this.root.val;

    function sum(node) {
      for(let child of node.children){
        total += child.val;
        if(child.children.length > 0){
          sum(child)
        }
      }
    }
    if (this.root.children.length > 0) {
      sum(this.root);
    }
 return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0;

    function getEvens(node){
      let total = 0;

        if(node.val % 2 === 0){
          total += 1
        }

        for(let child of node.children){
          total += getEvens(child)
        }
        return total;
    }
    
      return getEvens(this.root)
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;

      function sum(node){
        let total = 0;

        if(node.val > lowerBound){
          total += 1;
      }
        for(let child of node.children){
        total += sum(child)
      }
      return total;
    }
    return sum(this.root)
  }
 
}

module.exports = { Tree, TreeNode };
