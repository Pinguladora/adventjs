function checkPart(part) {
    let left = 0;
    let right = part.length - 1;

    while (left < right) {
        if (part[left] !== part[right]) {
            return part.slice(left + 1, right + 1) ===
                [...part.slice(left + 1, right + 1)].reverse().join("") ||
                part.slice(left, right) ===
                [...part.slice(left, right)].reverse().join("");
        }
        left++;
        right--;
    }

    return true;
}


checkPart("uwu") // true
// "uwu" is a palindrome without removing any character

checkPart("miidim") // true
// "miidim" can be a palindrome after removing the first "i"

checkPart("midu") // false
// "midu" cannot be a palindrome after removing a character