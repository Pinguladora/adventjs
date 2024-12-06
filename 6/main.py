def in_box(box: list[str]) -> bool:
    for i in range(1, len(box) - 1):
        asteriskIndex = box[i].find("*", 1)
        # Yes, this could be mostly done using find too
        if asteriskIndex != -1 and asteriskIndex < len(box[i]) - 1:
            return True
    return False
