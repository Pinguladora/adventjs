def create_xmas_tree(height: int, ornament: str) -> str:
    max_width = height * 2 - 1
    base_size = max_width // 2
    trunk_floor = "_" * base_size
    trunk = f"{trunk_floor}#{trunk_floor}"

    tree: list[str] = []
    for i in range(height):
        spaces = max_width - height - i
        margin = "_" * spaces
        tree.append(f"{margin}{ornament*(max_width-2*spaces)}{margin}")
    tree.extend([trunk] * 2)
    return "\n".join(tree)
