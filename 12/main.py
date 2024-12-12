def calculate_price(ornaments: str) -> int:
    ornament_prices = {"*": 1, "o": 5, "^": 10, "#": 50, "@": 100}
    total_price = 0
    ornaments_size = len(ornaments)
    for i in range(ornaments_size):
        current = ornament_prices.get(ornaments[i])
        # Check if current ornament is valid
        if current is None:
            return None

        next_ = (
            ornament_prices.get(ornaments[i + 1]) if i + 1 < ornaments_size else None
        )
        # Check next ornament is valid and add price
        total_price += -current if next_ and next_ > current else current
    return total_price
