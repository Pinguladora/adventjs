// Complexity: O(n^2) 
export default function sumPairs(numbers, result) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]
        const toSearch = result - num
        if (numbers.includes(toSearch, i + 1)) {
            return [num, toSearch]
        }
    }
    return null
}

sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]