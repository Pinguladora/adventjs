/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
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
calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z is unknown)