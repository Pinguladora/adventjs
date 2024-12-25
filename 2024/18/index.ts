export default function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
    const phoneRegex = /(\+\d{1,3}-\d{3}-\d{3}-\d{3})/;
    const nameRegex = /<([^>]+)>/;
    const addressRegex = /(?:<[^>]+>|\+\d{1,3}-\d{3}-\d{3}-\d{3})?\s*(.+?)\s*(?=<|\+\d)/;

    let contact: { name: string; address: string; } | null = null;
    const lines = agenda.trim().split('\n');
    for (const line of lines) {
        const phoneMatch = line.match(phoneRegex)?.[0];
        if (!phoneMatch || !phoneMatch.includes(phone)) {
            continue;
        }
        const nameMatch = line.match(nameRegex)?.[1];
        const addressMatch = line.match(addressRegex)?.[1];
        // Multiple matches
        if (nameMatch && addressMatch) {
            if (contact) {
                return null;
            }
            contact = { name: nameMatch, address: addressMatch };
        }
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