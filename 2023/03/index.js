function findNaughtyStep(original, modified) {
    const charCount = new Map();

    for (const char of original) {
        charCount.set(char, (charCount.get(char) || 0) - 1);
    }

    for (const char of modified) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the character with a count of 1 (the "naughty step")
    for (const [char, count] of charCount) {
        if (count != 0) {
            return char;
        }
    }

    return '';
}

let original = 'abcd'
let modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

original = 'stepfor'
modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

original = 'abcde'
modified = 'abcde'
findNaughtyStep(original, modified) // ''