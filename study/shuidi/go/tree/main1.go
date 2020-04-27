// go    tree
package main

import (
	"container/list"
	"fmt"
 )
// 树节点  
type Node struct {
  value int
  left *Node
  right *Node
}
// 找节点 时间复杂度  链表的 O(N) -> O(logN)  递归 
func (node *Node)FindNode(n *Node, x int) *Node {
  // 在一棵树找节点  很多小事情 每三个节点里    
  if n == nil {
    return nil
  } else if n.value == x {
    // 推出条件
    return n
  } else {
    p := node.FindNode(n.left, x) //递  沿着左子树
    if p != nil { //找到了
      return p
    }
    return node.FindNode(n.right, x)
  }
}
func (node *Node)GetTreeHeight(n *Node)int{
	if n ==nil{
		return 0 
	}else{
		// 当前节点的高度？ Math.max(左子树的高度+1 右子树的高度+1)
		lHeight := node.GetTreeHeight(n.left)
		rHeigth := node.GetTreeHeight(n.right)
		if lHeight > rHeigth{
			return lHeight + 1;
		}else{
			return rHeigth + 1;
		}
	}
}
func(node *Node)GetLeafNode(n *Node){
	// 叶子节点，左节点和右节点 为空
	//每个节点 
	if n!=nil{
		if n.left == nil && n.right == nil {
			fmt.Printf("%d",n.value)
		}
		node.GetLeafNode(n.left)
		node.GetLeafNode(n.right)
	}
}

func (node *Node) PreOrderNoRecursion() []int {
	root := node
	stack := list.New()
	res := make([]int, 0)
	for root != nil || stack.Len() != 0 {
	   for root != nil {
		  res = append(res, root.value)//visit
		  stack.PushBack(root)
		  root = root.left
	   }
	   if stack.Len() != 0 {
		  v := stack.Back()
		  root = v.Value.(*Node)
		  root = root.right
		  stack.Remove(v)
	   }
	}
	return res
 }
func (node *Node) InOrderNoRecursion() []int {
	root := node
	stack := list.New()
	res := make([]int, 0)
	for root != nil || stack.Len() != 0 {
	   for root != nil {
		  stack.PushBack(root)
		  root = root.left
	   }
	   if stack.Len() != 0 {
		  v := stack.Back()
		  root = v.Value.(*Node)
		  res = append(res, root.value)//visit
		  root = root.right
		  stack.Remove(v)
	   }
	}
	return res
 }
 
func (node *Node) PostOrderNoRecursion() []int {
	root := node
	stack := list.New()
	res := make([]int, 0)
	var preVisited *Node
 
	for root != nil || stack.Len() != 0 {
	   for root != nil {
		  stack.PushBack(root)
		  root = root.left
	   }
 
	    v := stack.Back()
	   top := v.Value.(*Node)
 
	   if (top.left == nil && top.right == nil) || (top.right == nil && preVisited == top.left) || preVisited == top.right{
		  res = append(res, top.value)//visit
		  preVisited = top
		  stack.Remove(v)
	   }else {
		  root = root.right
	   }
	}
	return res
 }
 func CreateNode(value int) *Node {
  return &Node{value, nil, nil} // nil 为空 & 取地址
}



// tree treeNode   递归的概念来定义的 
func main() {
      //      5
      // 2         4     
      //    7   8     9
      //  6   
  root := CreateNode(5) // 根节点
  root.left = CreateNode(2) 
  // CreateNode 生成的结点可以作为其他节点的左子针
  root.right = CreateNode(4)
  root.left.right = CreateNode(7)
  root.left.right.left = CreateNode(6)
  root.right.left = CreateNode(8)
  root.right.right = CreateNode(9)
  
  fmt.Printf("%d\n", root.FindNode(root, 4).value)  // 4的节点
  fmt.Printf("%d\n", root.GetTreeHeight(root))  // 树的高度  递归
  root.GetLeafNode(root)//所有叶子节点

fmt.Println(root.PreOrderNoRecursion())
fmt.Println(root.InOrderNoRecursion())
fmt.Println(root.PostOrderNoRecursion())
}
// 实现先中后序遍历