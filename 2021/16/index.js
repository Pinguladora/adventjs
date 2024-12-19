export default function decodeNumbers(symbols) {
    const symValue = { ".": 1, ",": 5, ":": 10, ";": 50, "!": 100 };
    let total = 0;

    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        const v1 = symValue[symbol];

        if (v1 === undefined) {
            return NaN;
        }

        if (i < symbols.length - 1) {
            const v2 = symValue[symbols[i + 1]];

            if (v2 === undefined) {
                return NaN;
            }

            if (v2 > v1) {
                total -= v1;
                continue;
            }
        }

        total += v1;
    }
    console.log(total)
    return total;
}

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN