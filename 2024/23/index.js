// 4 stars
/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    const uniq = new Set(nums);
    const max = Math.max(...uniq)

    const missing = [];
    for (let i = 1; i < max; i++) {
        if (!uniq.has(i)) missing.push(i);
    }
    return missing;
}

// Set difference, 5 stars
/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    const uniq = new Set(nums);
    const max = Math.max(...uniq)

    const maxRange = new Set();
    for (let i = 1; i < max; i++) {
        maxRange.add(i);
    }
    return [...maxRange.difference(uniq)];
}


findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findMissingNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]
