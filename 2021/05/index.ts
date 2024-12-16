export default function daysToXmas(date: Date) {
    const dayInMs = 24 * 60 * 60 * 1000
    const xmasDate = new Date('Dec 25, 2021')

    const compDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    return (xmasDate.getTime() - compDate.getTime()) / dayInMs
}
