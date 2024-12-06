function createXmasTree(height, ornament) {
  /* Code here */
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