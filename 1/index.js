function prepareGifts(gifts) {
  // Use a Set to remove duplicates directly, then sort numerically
  return [...new Set(gifts)].sort((a,b) => a-b);
}