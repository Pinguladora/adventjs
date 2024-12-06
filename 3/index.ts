type Inventory = Array<
    { name: string, quantity: number, category: string }
>

// Simple loop
function organizeInventoryTS(inventory: Inventory): object {
    const out = {};
    for (const obj of inventory) {
        if (!out[obj.category]) {
            out[obj.category] = {};
        }
        out[obj.category][obj.name] = (out[obj.category][obj.name] || 0) + obj.quantity;
    }
    return out;
}

// Functional
function organizeInventoryFuncTS(inventory: Inventory): object {
    return inventory.reduce((out, obj) => {
        const categoryMap = out[obj.category] || {};
        categoryMap[obj.name] = (categoryMap[obj.name] || 0) + obj.quantity;
        out[obj.category] = categoryMap;
        return out;
    }, {});
}