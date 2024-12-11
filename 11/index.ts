function decodeFilenameTS(filename: string): string {
    const startIndex = filename.indexOf('_') + 1
    const endIndex = filename.indexOf('.', startIndex)
    const realFilename = filename.substring(startIndex, endIndex)
    const endExt = filename.indexOf('.', endIndex + 1)
    return realFilename + filename.slice(endIndex, endExt)
}

function decodeFilenameFasterTS(filename: string): string {
    const startIndex = filename.indexOf('_') + 1
    const secondDotIndex = filename.indexOf('.', filename.indexOf('.') + 1)
    return filename.slice(startIndex, secondDotIndex)
}