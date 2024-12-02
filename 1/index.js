function prepareGifts(gifts) {
    if (gifts.length == 0) {
      return [];
    }
    
    return Array.from(
      new Set(gifts.map(Number))
    ).sort((a, b) => a - b);
  }