export default function getFilesToBackup(lastBackup: number, changes: number[][]): number[] {
    if (changes.length === 0) {
        return []
    }
    const filesChanged = changes.reduce((accum, i) => {
        if (lastBackup - i[1] < 0) {
            accum.add(i[0])
        }
        return accum;
    }, new Set<number>())
    return Array.from(filesChanged)
}

const lastBackup = 1546300800

const changes = [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000]
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
// The file with id 1 has been modified twice
// after the last backup.

// The file with id 2 has not been modified after
// the last backup.

// The file with id 3 has been modified once
// after the last backup.

// We have to make a backup
// of the files 1 and 3.
