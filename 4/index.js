/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  const maxWidth = height * 2 - 1
  const baseSize = Math.floor(maxWidth / 2)
  const trunkFloor = "_".repeat(baseSize)
  const trunk = trunkFloor + "#" + trunkFloor

  let tree = []
  for (let i = 0; i < height; i++) {
    const spaces = maxWidth - height - i
    const margin = "_".repeat(spaces)
    tree.push(margin + ornament.repeat(maxWidth - 2 * spaces) + margin)
  }
  tree.push(trunk, trunk)

  return tree.join('\n')
}