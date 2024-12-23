function printTable(gifts) {
    const headers = ["Gift", "Quantity"];

    // Determine the maximum width for each column
    const colWidths = [
        Math.max(headers[0].length, ...gifts.map(gift =>
            gift.name.length)),
        Math.max(headers[1].length, ...gifts.map(gift =>
            gift.quantity.toString().length))
    ];

    // 2 spaces per column + 3 separators
    const totalWidth = colWidths[0] + colWidths[1] + 7;

    const createBorder = (char) => char.repeat(totalWidth);
    const formatRow = (values) =>
        `| ${values[0].padEnd(colWidths[0])} | ${values[1].padEnd(colWidths[1])} |`;


    // Build table rows
    const rows = [
        createBorder('+'),
        formatRow(headers),
        formatRow(['-'.repeat(colWidths[0]), '-'.repeat(colWidths[1])]),
        ...gifts.map(gift => formatRow([gift.name, gift.quantity.toString()])),
        createBorder('*')
    ];
    return rows.join("\n");
}

printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
])

printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
])