function moveTrainTS(board: string[], mov: 'U' | 'D' | 'R' | 'L'): 'none' | 'crash' | 'eat' {
    const items = { "o": "crash", "*": "eat", "·": "none" }
    // Suppose every row has the same length
    const rowLength = board[0].length
    // "|"" will act as divider 
    const tracks = board.join("|")
    const trainPos = tracks.indexOf('@')

    let item = ""
    // Cognitive complexity of 6, 5 if you stick with if-else
    // Faster as only one arithmetic op is done
    switch (mov) {
        case "U":
            item = tracks[trainPos - rowLength - 1]
            break
        case "D":
            item = tracks[trainPos + rowLength + 1]
            break
        case "R":
            item = tracks[trainPos + 1]
            break
        case "L":
            item = tracks[trainPos - 1]
            break
    }

    return items[item] || "crash"
}

// Cognitive complexity of 2
function moveTrain2TS(board: string[], mov: 'U' | 'D' | 'R' | 'L'): 'none' | 'crash' | 'eat' {
    const itemsMapping = { "o": "crash", "*": "eat", "·": "none" }
    // Suppose every row has the same length
    const rowLength = board[0].length
    // "|"" will act as divider 
    const tracks = board.join("|")

    const trainPos = tracks.indexOf('@')

    const movMapping = {
        "U": trainPos - rowLength - 1,
        "D": trainPos + rowLength + 1,
        "R": trainPos + 1,
        "L": trainPos - 1
    }
    return itemsMapping[tracks[movMapping[mov]]] || "crash"
}