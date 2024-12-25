def draw_table(data: list[dict[str, str | int]]) -> str:
    columns = list(data[0].keys())
    headers = [col.capitalize() for col in columns]

    col_widths = []
    for col in columns:
        max_width = 0
        for row in data:
            length = len(str(row[col]))
            max_width = max(max_width, length)
        col_widths.append(max_width)

    # Header or column width
    for i, header in enumerate(headers):
        col_widths[i] = max(len(header), col_widths[i])

    # Table border
    border = []
    for w in col_widths:
        line = "-" * (w + 2)
        border.append(line)
    border = f"+{"+".join(border)}+"

    # Helper
    # Must maintain lazy evaluation
    def create_row(values):
        content = " | ".join(f"{str(v).ljust(w)}" for v, w in zip(values, col_widths))
        return f"| {content} |"

    header_row = create_row(headers)

    data_rows = []
    for row in data:
        row_values = [row[col] for col in columns]
        data_rows.append(create_row(row_values))
    data_rows = "\n".join(data_rows)

    table = f"{border}\n{header_row}\n{border}\n{data_rows}\n{border}"
    print(table)
    return table


draw_table(
    [
        {"name": "Alice", "city": "London"},
        {"name": "Bob", "city": "Paris"},
        {"name": "Charlie", "city": "New York"},
    ]
)
# +---------+-----------+
# | Name    | City      |
# +---------+-----------+
# | Alice   | London    |
# | Bob     | Paris     |
# | Charlie | New York  |
# +---------+-----------+

draw_table(
    [
        {"gift": "Doll", "quantity": 10},
        {"gift": "Book", "quantity": 5},
        {"gift": "Music CD", "quantity": 1},
    ]
)
# +----------+----------+
# | Gift     | Quantity |
# +----------+----------+
# | Doll     | 10       |
# | Book     | 5        |
# | Music CD | 1        |
# +----------+----------+
