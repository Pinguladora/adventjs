export default function fixFiles(files: string[]): string[] {
    const fileCounter = new Map()
    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const count = fileCounter.get(file) || 0

        if (count > 0) {
            files[i] = `${file}(${count})`
        }
        fileCounter.set(file, (count || 0) + 1)
    }
    return files
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']