function prepareGiftsTS(gifts: number[]): number[] {
  // Use a Set to remove duplicates directly, then sort numerically
  return [...new Set(gifts)].sort((a, b) => a - b);
}