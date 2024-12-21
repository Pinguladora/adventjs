function distributeGifts(packOfGifts, reindeers) {
  const packWeight = packOfGifts.reduce((accum, g) => {
    accum += g.length;
    return accum;
  }, 0)
  const reindeerMaxCarry = reindeers.reduce((accum, r) => {
    accum += 2 * r.length;
    return accum;
  }, 0)
  return Math.floor(reindeerMaxCarry / packWeight)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers) // 2
