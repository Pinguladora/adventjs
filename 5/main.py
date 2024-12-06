def organize_shoes(shoes: list[dict[str, int]]) -> list[int]:
    count_by_size = {}
    for shoe in shoes:
        count_by_size.setdefault(shoe["size"], {"I": 0, "R": 0})
        count_by_size[shoe["size"]][shoe["type"]] += 1

    pairs = []
    for k, v in count_by_size.items():
        possible_pairs = min(v["I"], v["R"])
        pairs.extend([k] * possible_pairs)
    return pairs
