/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    const phoneRegex = /(\+\d{1,3}-\d{3}-\d{3}-\d{3,4})/;
    const nameRegex = /<([^>]+)>/;
    const addressRegex = /(?:<[^>]+>|\+\d{1,3}-\d{3}-\d{3}-\d{3})?\s*(.+?)\s*(?=<|\+\d)/;

    let contact = null;
    const lines = agenda.trim().split('\n');
    for (const line of lines) {
        const phoneMatch = line.match(phoneRegex);
        if (!phoneMatch[0].includes(phone)) {
            continue;
        }
        const nameMatch = line.match(nameRegex);
        const addressMatch = line.match(addressRegex);

        // Multiple matches
        if (contact) {
            return null;
        }
        contact = { name: nameMatch[1], address: addressMatch[1] };
    }
    return contact;
}


const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explanation: No results

findInAgenda(agenda, '1')
// null
// Explanation: Too many results