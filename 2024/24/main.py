def is_trees_synchronized(
    tree1: dict[str, any], tree2: dict[str, any]
) -> tuple[bool, str]:
    if tree1 is None and tree2 is None:
        return [True, ""]
    if tree1 is None or tree2 is None:
        return [False, ""]
    if tree1["value"] != tree2["value"]:
        return [False, tree1["value"]]

    left_sync, _ = is_trees_synchronized(
        tree1.get("left", None), tree2.get("right", None)
    )
    right_sync, _ = is_trees_synchronized(
        tree1.get("right", None), tree2.get("left", None)
    )

    return [left_sync and right_sync, tree1["value"]]


tree1 = {"value": "🎄", "left": {"value": "⭐"}, "right": {"value": "🎅"}}

tree2 = {
    "value": "🎄",
    "left": {"value": "🎅"},
    "right": {"value": "⭐"},
}

res = is_trees_synchronized(tree1, tree2)  # [True, '🎄']
print(res)
"""
  tree1          tree2
   🎄              🎄
  / \\             / \\
⭐   🎅         🎅   ⭐
"""

tree3 = {"value": "🎄", "left": {"value": "🎅"}, "right": {"value": "🎁"}}

res = is_trees_synchronized(tree1, tree3)  # [False, '🎄']
print(res)

tree4 = {"value": "🎄", "left": {"value": "⭐"}, "right": {"value": "🎅"}}

res = is_trees_synchronized(tree1, tree4)  # [False, '🎄']
print(res)

res = is_trees_synchronized({"value": "🎅"}, {"value": "🧑‍🎄"})  # [False, '🎅']
print(res)
