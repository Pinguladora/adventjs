/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    const nameWoExt = filename.replace("_", "|").split(".")
    return `${nameWoExt[0].split("|")[1]}.${nameWoExt[1]}`
}