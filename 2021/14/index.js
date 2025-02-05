export default function missingReindeer(ids) {
    // Arithmetic progression
    // Sn = n/2 * (2*a+(n-1)*d)
    // This is a specific case, sum of n natural numbers
    // Sn = n*(n+1)/2
    const n = ids.length
    const sn = n * (n + 1) / 2
    return sn - ids.reduce((a, b) => a + b, 0)
}

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)