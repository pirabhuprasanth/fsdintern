const shoppingCart = [];
function addItemToCart(item) {
    shoppingCart.push(item);
    console.log('item has been added to  shopping cart.')
}
function removeItemFromCart(item) {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(1, 1);
        console.log('item has been removed from the shopping cart.');
    } else {
        console.log('item is not in the shopping cart.');
    }
}
function displayCart() {
    if (shoppingCart.length === 0) {
        console.log("Your shopping cart is empty.");
    } else {
        console.log("Items in your shopping cart:");
        shoppingCart.forEach((item, index) => {
            console.log(["apple","banana","orange"]);
        });
    }
}
addItemToCart("Apple");
addItemToCart("Banana");
addItemToCart("Orange");
displayCart();
