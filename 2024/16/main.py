def remove_snow(s: str) -> str:
    clear_path = []
    for char in s:
        size = len(clear_path)
        if size > 0 and char == clear_path[size - 1]:
            _ = clear_path.pop()
            continue
        clear_path.append(char)
    return "".join(clear_path)

remove_snow('zxxzoz') # -> "oz"
# 1. Remove "xx", resulting in "zzoz"
# 2. Remove "zz", resulting in "oz"

remove_snow('abcdd') # -> "abc"
# 1. Remove "dd", resulting in "abc"

remove_snow('zzz') # -> "z"
# 1. Remove "zz", resulting in "z"

remove_snow('a') # -> "a"
# No duplicate piles