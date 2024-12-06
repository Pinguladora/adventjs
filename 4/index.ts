function createXmasTreeTS(height: number, ornament: string): string {
    const maxWidth: number = height * 2 - 1
    const baseSize: number = Math.floor(maxWidth / 2)
    const trunkFloor: string = "_".repeat(baseSize)
    const trunk: string = trunkFloor + "#" + "_".repeat(baseSize)

    const tree: string[] = []
    for (let i = 0; i < height; i++) {
        const spaces = maxWidth - height - i
        const margin = "_".repeat(spaces)
        tree.push(margin + ornament.repeat(maxWidth - 2 * spaces) + margin)
    }
    tree.push(trunk, trunk)

    return tree.join('\n')
}