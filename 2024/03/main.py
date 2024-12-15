from dataclasses import dataclass


@dataclass
class Inventory:
    name: str
    quantity: int
    category: str


# Remove type hinting for correct solution in the web, as only code within the function is allowed
def organize_inventory(inventory: list[Inventory]) -> dict[str, dict[str, int]]:
    out = {}
    for obj in inventory:
        _ = out.setdefault(obj.category, {})
        out[obj.category][obj.name] += obj.quantity
    return out
