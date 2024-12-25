/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
export default function fixGiftList(received: string[], expected: string[]): { missing: Record<string, number>, extra: Record<string, number> } {
    const missing = {};
    const extra = {};

    const receivedCount = {};
    for (const gift of received) {
        receivedCount[gift] = (receivedCount[gift] || 0) + 1;
    }

    for (const gift of expected) {
        if (receivedCount[gift]) {
            receivedCount[gift]--;
            continue;
        }
        missing[gift] = (missing[gift] || 0) + 1;

    }

    // Remaining gifts in count are extra
    for (const gift in receivedCount) {
        if (receivedCount[gift] > 0) {
            extra[gift] = receivedCount[gift];
        }
    }

    return {
        missing: missing,
        extra: extra
    };
}

fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
    ['book', 'train', 'kite', 'train'],
    ['train', 'book', 'kite', 'ball', 'kite']
)
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
    ['bear', 'bear', 'car'],
    ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Returns:
// {
//   missing: {},
//   extra: {}
// }

