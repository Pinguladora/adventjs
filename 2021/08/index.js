export default function maxProfit(prices) {
    let max = -1
    const size = prices.length;
    for (let i = 0; i < size; i++) {
        for (let j = i; j < size; j++) {
            const profit = prices[j] - prices[i]
            // The -1 is to hold accountable for net profit of 0, you can add another condition to the if too
            if (profit - 1 > max) {
                max = profit
            }
        }
    }
    return max
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda)// -> -1 (no hay ganancia posible)