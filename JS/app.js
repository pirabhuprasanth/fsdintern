//Define the shopping cart array
const shoppingCart = [];
let totalCost = 0;

/Function to add an art
function additem(item, price) {
    shoppingCart.push({ item, price});
totalCost += price;
console.log('${item} added to the cart. Total cost: $${totalCost}');
}