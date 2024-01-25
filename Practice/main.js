// https://leetcode.com/problems/root-equals-sum-of-children/description/

//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
    return root.left.val + root.right.val === root.val;
};

var TreeNodeTest = new TreeNode(10,new TreeNode(4),new TreeNode(6));
var result = checkTree(TreeNodeTest);
console.log("result:",result);

var TreeNodeTest2 = new TreeNode(5,new TreeNode(3),new TreeNode(1));
var result2 = checkTree(TreeNodeTest2);
console.log("result2:",result2);