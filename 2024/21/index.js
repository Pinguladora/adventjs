/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */
function treeHeight(tree) {
    // Base case
    if (tree === null) {
        return 0;
    }
    const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

// Tree definition
const tree = {
    value: '🎁',
    left: {
        value: '🎄',
        left: {
            value: '⭐',
            left: null,
            right: null
        },
        right: {
            value: '🎅',
            left: null,
            right: null
        }
    },
    right: {
        value: '❄️',
        left: null,
        right: {
            value: '🦌',
            left: null,
            right: null
        }
    }
}

// Graphical representation of the tree:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Function call
treeHeight(tree)
// Returns: 3