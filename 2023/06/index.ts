export default function maxDistance(movements: string): number {
    let leftCount = 0;
    let rightCount = 0;
    let starCount = 0;

    for (const mov of movements) {
        if (mov === '<') leftCount++;
        else if (mov === '>') rightCount++;
        else starCount++;
    }

    return Math.abs(rightCount - leftCount) + starCount;
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5