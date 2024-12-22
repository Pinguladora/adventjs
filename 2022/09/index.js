function countTime(leds) {
    const n = leds.length;
    // 2n to handle the circular condition
    const extended = [...leds, ...leds];

    let maxDistance = 0;
    let currentDistance = 0;

    for (let i = 0; i < extended.length; i++) {
        if (extended[i] === 0) {
            currentDistance++;
            maxDistance = Math.max(maxDistance, currentDistance);
        } else {
            currentDistance = 0;
        }
    }
    return maxDistance * 7;
}

const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]