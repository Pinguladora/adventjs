export default function shouldBuyFidelity(times) {
    const singleTicketPrice = 12
    const fidelityPrice = 250
    // It's a geometric series
    // Sn = a*(1-r^(n+1)) / (1-r))

    // r
    const discount = 0.75
    // a
    const a = singleTicketPrice * discount

    const fidelityTotal = fidelityPrice + a * (1 - discount ** (times + 1)) / 0.25
    console.log(fidelityTotal)
    return fidelityTotal < singleTicketPrice * times
}

shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad