function getInventoryValuation(inventory) {
    let result = {};
    for (let item of inventory) {
        if (item.qty > 0) {
            result[item.category] = (result[item.category] || 0) + item.qty * item.price;
        }
    }
    return result;
}

// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory));