function calculatePriceTS(ornaments: string): number | undefined {
    const ornamentPrices = { "*": 1, "o": 5, "^": 10, "#": 50, "@": 100 };
    let totalPrice = 0;

    for (let i = 0; i < ornaments.length; i++) {
        const current = ornamentPrices[ornaments[i]];

        // Check Check if current ornament is valid 
        if (current === undefined) return undefined;

        const next = ornamentPrices[ornaments[i + 1]];
        // Check if next ornament is valid and add price
        totalPrice += next > current ? -current : current;
    }

    return totalPrice;
}