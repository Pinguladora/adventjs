def draw_race(indices: list[int], length: int) -> str:
    race_track = []
    num_lanes = len(indices)

    for i in range(num_lanes):
        lane = ["~"] * length
        reindeer_pos = indices[i]
        if reindeer_pos < 0:
            lane[len(lane) + reindeer_pos] = "r"
        elif reindeer_pos > 0:
            lane[reindeer_pos] = "r"
        lane.insert(0, " " * (num_lanes - i - 1))
        lane.append(f" /{i+1}")

        race_track.append("".join(lane))
    return "\n".join(race_track)