function createXmasTreeTS(height: number, ornament: string): string {
    const maxWidth: number = height * 2 - 1
    const baseSize: number = Math.floor(maxWidth / 2)
    const trunk: string = "_".repeat(baseSize) + "#" + "_".repeat(baseSize)

    const tree: string[] = []
    for (let i = 0; i < height; i++) {
        const spaces = maxWidth - height - i
        tree.push("_".repeat(spaces) + ornament.repeat(maxWidth - 2 * spaces) + "_".repeat(spaces))
    }
    tree.push(trunk, trunk)

    return tree.join('\n')
}