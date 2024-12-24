/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    // Base cases
    // Both nodes are null
    if (!tree1 && !tree2) return [true, ""];
    // Either node is null
    if (!tree1 || !tree2) return [false, ""];
    // Values are not equal
    if (tree1.value !== tree2.value) return [false, tree1.value];

    const [leftSync] = isTreesSynchronized(tree1.left, tree2.right);
    const [rightSync] = isTreesSynchronized(tree1.right, tree2.left);

    return [leftSync && rightSync, tree1.value];
}

const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' },
}

let res = isTreesSynchronized(tree1, tree2) // [true, '🎄']
console.log(res)
/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '🎁' }
}

res = isTreesSynchronized(tree1, tree3) // [false, '🎄']
console.log(res)

const tree4 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

res = isTreesSynchronized(tree1, tree4) // [false, '🎄']
console.log(res)

res = isTreesSynchronized(
    { value: '🎅' },
    { value: '🧑‍🎄' }
) // [false, '🎅']
console.log(res)
