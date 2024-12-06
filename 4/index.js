/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  const maxWidth = height * 2 - 1
  const baseSize = Math.floor(maxWidth / 2)
  const trunk = "_".repeat(baseSize) + "#" + "_".repeat(baseSize)

  const tree = []
  for (let i = 0; i < height; i++) {
    const spaces = maxWidth - height - i
    tree.push("_".repeat(spaces) + ornament.repeat(maxWidth - 2 * spaces) + "_".repeat(spaces))
  }
  tree.push(trunk, trunk)

  return tree.join('\n')
}