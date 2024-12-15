/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    const startIndex = filename.indexOf('_') + 1
    const endIndex = filename.indexOf('.', startIndex)
    const endExt = filename.indexOf('.', endIndex + 1)
    const realFilename = filename.substring(startIndex, endIndex)
    return realFilename + filename.slice(endIndex, endExt)
}

function decodeFilenameFaster(filename) {
    const startIndex = filename.indexOf('_') + 1
    const secondDotIndex = filename.indexOf('.', filename.indexOf('.') + 1)
    return filename.slice(startIndex, secondDotIndex)
}