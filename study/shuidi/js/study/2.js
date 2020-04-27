 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 /**
  * @param {TreeNode} root
  * @return {boolean}
  */

 var isSymmetric = function(root) {
     if (root === null) return true;
     return dui(root.left, root.right);
 }

 function dui(left, right) {
     if (left === null && right === null) {
         return true;
     }
     if (left === null || right === null) {
         return false;
     }
     return left.val === right.val && dui(left.left, right.right) && dui(left.right, right.left);
 }
 new TreeNode = [1, 2, 2, 3, 4, 4, 3];