export default function createXmasTree(height) {
  const maxWidth = height * 2 - 1
  const baseSize = Math.floor(maxWidth / 2)
  const trunkFloor = "_".repeat(baseSize)
  const trunk = trunkFloor + "#" + trunkFloor

  let tree = []
  for (let i = 0; i < height; i++) {
    const spaces = maxWidth - height - i
    const margin = "_".repeat(spaces)
    tree.push(margin + "*".repeat(maxWidth - 2 * spaces) + margin)
  }
  tree.push(trunk, trunk)

  return tree.join('\n')
}