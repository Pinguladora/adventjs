// Iterative
function dryNumber(dry, numbers) {
    const wrongBarcodes = []
    const dryStr = dry.toString();
    for (let n = 1; n <= numbers; n++) {
        if (n.toString().includes(dryStr)) {
            wrongBarcodes.push(n)
        }
    }
    return wrongBarcodes
}

// Functional
function dryNumber(dry, numbers) {
    const dryStr = dry.toString();
    return Array.from({ length: numbers }, (_, i) => i + 1)
        .filter(n => n.toString().includes(dryStr))
}

dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

// we don't have ink for the number 1
// we have to print 15 barcodes from 1 to 15
// the barcodes that will be wrong because of the lack of ink are:
// 1, 10, 11, 12, 13, 14, 15

dryNumber(2, 20) // [2, 12, 20]

// we don't have ink for the number 2
// we have to print 20 barcodes from 1 to 20
// the barcodes that will be wrong because of the lack of ink are:

// 2, 12, 20
