export default function canMouseEat(direction: string, game: string[][]): boolean {
    const directionMap = { up: [-1, 0], down: [1, 0], right: [0, 1], left: [0, -1] };
    let mouseY = -1, mouseX = -1;

    for (let y = 0; y < game.length; y++) {
        const newPos = game[y].indexOf("m");
        if (newPos !== -1) {
            mouseY = y;
            mouseX = newPos;
            break;
        }
    }

    if (mouseY === -1 || mouseX === -1) return false;

    const [dy, dx] = directionMap[direction];
    const newY = mouseY + dy;
    const newX = mouseX + dx;

    // Check bounds and if the mouse can eat
    const inBounds =
        newY >= 0 && newY < game.length && newX >= 0 && newX < game[0].length;

    return inBounds && game[newY][newX] === "*";
}


const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
]

canMouseEat('up', room)   // false
canMouseEat('down', room)   // true
canMouseEat('right', room)   // false
canMouseEat('left', room)   // false

const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
]

canMouseEat('up', room2)   // false
canMouseEat('down', room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left', room2)   // false