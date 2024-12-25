export default function drawTable(data: Array<Record<string, string | number>>): string {
    const columns = Object.keys(data[0]);
    const headers: string[] = [];
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

    function createRow(values: string[]) {
        let row = "|";
        for (let i = 0; i < values.length; i++) {
            const paddedValue = String(values[i]).padEnd(colWidths[i]);
            row += ` ${paddedValue} |`;
        }
        return row;
    }

    const headerRow = createRow(headers);

    const dataRows: any[] = [];
    for (let i = 0; i < data.length; i++) {
        const rowValues: any[] = [];
        for (let j = 0; j < columns.length; j++) {
            const val = data[i][columns[j]]
            rowValues.push(val);
        }
        dataRows.push(createRow(rowValues));
    }

    const table = [border, headerRow, border, ...dataRows, border].join("\n");
    return table;
}