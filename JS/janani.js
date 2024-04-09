const shoppingCart = [];
let totalCost = 0;
//Function to add an item to the cart
function additem(item, price) {
    shoppingCart.push({ item, price});
totalCost += price;
console.log(`${item} added to the cart. Total cost: ${totalCost}`);
}

additemToCart("Rice");
additemToCart("Wheat");
additemToCart("Grains");

