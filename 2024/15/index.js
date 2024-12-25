/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    const columns = Object.keys(data[0]);
    const headers = [];
    for (let col of columns) {
        headers.push(col.charAt(0).toUpperCase() + col.slice(1));
    }

    // Calculate column widths
    const colWidths = new Array(columns.length).fill(0);
    for (let i = 0; i < columns.length; i++) {
        colWidths[i] = headers[i].length;

        // Search for maximum width
        for (let j = 0; j < data.length; j++) {
            const cellWidth = String(data[j][columns[i]]).length;
            if (cellWidth > colWidths[i]) {
                colWidths[i] = cellWidth;
            }
        }
    }

    let border = "+";
    for (let width of colWidths) {
        border += "-".repeat(width + 2) + "+";
    }

    function createRow(values) {
        let row = "|";
        for (let i = 0; i < values.length; i++) {
            const paddedValue = String(values[i]).padEnd(colWidths[i]);
            row += ` ${paddedValue} |`;
        }
        return row;
    }

    const headerRow = createRow(headers);

    const dataRows = [];
    for (let i = 0; i < data.length; i++) {
        const rowValues = [];
        for (let j = 0; j < columns.length; j++) {
            rowValues.push(data[i][columns[j]]);
        }
        dataRows.push(createRow(rowValues));
    }

    const table = [border, headerRow, border, ...dataRows, border].join("\n");
    return table;
}

drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+