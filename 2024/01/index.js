/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  // Use a Set to remove duplicates directly, then sort numerically
  return [...new Set(gifts)].sort((a, b) => a - b);
}