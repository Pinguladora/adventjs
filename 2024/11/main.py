def decode_filename(filename: str) -> str:
    start_index = filename.index("_") + 1
    end_index = filename.index(".", start_index)
    real_filename = filename[start_index:end_index]
    end_ext = filename.index(".", end_index + 1)
    return f"{real_filename}{filename[end_index, end_ext]}"


def decode_filename_faster(filename: str) -> str:
    start_index = filename.index("_") + 1
    second_dot_index = filename.index(".", start_index=filename.index(".") + 1)
    return filename.slice(start_index, second_dot_index)
