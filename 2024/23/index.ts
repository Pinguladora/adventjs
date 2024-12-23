/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
export default function findMissingNumbers(nums: number[]): number[] {
    const uniq: Set<number> = new Set(nums);
    const max = Math.max(...uniq);

    const maxRange: Set<number> = new Set();
    for (let i = 1; i < max; i++) maxRange.add(i);
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
