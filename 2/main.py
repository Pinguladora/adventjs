def create_frame(names: list[str]) -> str:
    longest = 0
    for n in names:
        size = len(n)
        if size >= longest:
            longest = size
    top_bottom_frame = "*" * (longest + 4)

    out = ""
    for n in names:
        out += f"* {n}{' '*(longest - len(n))} *\n"
    return f"{top_bottom_frame}\n{out}{top_bottom_frame}"

