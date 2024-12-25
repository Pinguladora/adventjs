def tree_height(tree) -> int:
    if tree is None:
        return 0

    left_height = tree_height(tree.left)
    right_height = tree_height(tree.right)
    return max(left_height, right_height) + 1
    
