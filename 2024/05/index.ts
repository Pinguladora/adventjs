type Shoe = {
    type: 'I' | 'R'
    size: number
}

function organizeShoesTS(shoes: Shoe[]): number[] {
    let countBySize = new Map()
    for (const { type, size } of shoes) {
        if (!countBySize.has(size)) {
            countBySize.set(size, { "I": 0, "R": 0 })
        }
        countBySize.get(size)[type]++
    }

    const pairs: number[] = []
    for (const [size, typeCount] of countBySize.entries()) {
        const possiblePairs = Math.min(typeCount.I, typeCount.R)
        for (let i = 0; i < possiblePairs; i++) {
            pairs.push(size);
        }
    }
    return pairs
}
