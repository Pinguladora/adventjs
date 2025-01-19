export default function manufacture(gifts: string[], materials: string): string[] {
    let possibleGifts: string[] = [];

    for (let gift of gifts) {
        const giftArr = Array.from(gift);
        const diff = giftArr.filter(x => !materials.includes(x));
        if (!diff.length) {
            possibleGifts.push(gift);
        }
    }
    return possibleGifts;
}

let gifts = ['tren', 'oso', 'pelota']
let materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

manufacture(gifts, materials) // []