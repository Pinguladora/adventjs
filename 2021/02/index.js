export default function listGifts(letter) {
    return letter
        .split(/\s+/)
        .filter(item => item && !item.startsWith("_"))
        .reduce((accum, item) => {
            accum[item] = (accum[item] || 0) + 1
            return accum
        }, {})
}

const carta = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
