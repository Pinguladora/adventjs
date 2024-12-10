from typing import List, Literal

# As of 3.9+ Use list[str] not List[str], done this way to keep coherence with the challenge defaults
def move_train(board: List[str], mov: Literal['U', 'D', 'R', 'L']) -> Literal['none', 'crash', 'eat']:
    items_mapping = {"o": "crash", "*": "eat", "·": "none"}
    row_length = len(board[0])
    tracks = "|".join(board)

    train_pos = tracks.index("@")

    mov_mapping = {
        "U": train_pos - row_length - 1,
        "D": train_pos + row_length + 1,
        "R": train_pos + 1,
        "L": train_pos - 1,
    }
    return items_mapping.get(tracks[mov_mapping[mov]], "crash")