export default function removeSnow(s: string): string {
    const clearPath: string[] = [];
    for (const char of s) {
        const pathSize = clearPath.length;
        if (pathSize > 0 && clearPath[pathSize - 1] === char) {
            clearPath.pop();
            continue;
        }
        clearPath.push(char);
    }
    return clearPath.join("");
}

removeSnow('zxxzoz') // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

removeSnow('abcdd') // -> "abc"
// 1. Remove "dd", resulting in "abc"

removeSnow('zzz') // -> "z"
// 1. Remove "zz", resulting in "z"

removeSnow('a') // -> "a"
// No duplicate piles
