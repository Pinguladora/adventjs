function inBoxTS(box: string[]): boolean {
    // Discard first and last elements as they are the bottom and top edges which are not allowed
    for (let i = 1; i < box.length - 1; i++) {
        const asteriskIndex = box[i].indexOf("*")
        // Search for the asterik between the lateral edges
        if (asteriskIndex > 0 && asteriskIndex < box[i].length - 1) {
            return true
        }
    }
    return false
}