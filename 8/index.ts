function drawRaceTS(indices: number[], length: number): string {
    const raceTrack: string[] = []
    const numLanes: number = indices.length

    for (let i = 0; i < numLanes; i++) {
        let lane = [..."~".repeat(length)]
        const reindeerPos = indices[i]
        if (reindeerPos < 0) {
            lane[lane.length + reindeerPos] = "r"
        } else if (reindeerPos > 0) {
            lane[reindeerPos] = "r"
        }
        // Add shifting margin at the beginning
        lane.unshift(" ".repeat(numLanes - i - 1))
        // Add lane number
        lane.push(` /${i + 1}`)

        raceTrack.push(lane.join(""))
    }
    return raceTrack.join("\n")
}