// Define a simple shopping cart

let shoppingcart = [];

function cart(item, quantity, price){
    if(item === "Fruits"){
        console.log(`Groceries for a week: ${item}, ${quantity} kg, ₹ ${price}`);
    } else if (item === "Vegetables"){
        console.log(`Groceries for a week: ${item}, ${quantity} kg, ₹ ${price}`);
    } else if (item === "Grains"){
        console.log(`Groceries for a week: ${item}, ${quantity} kg, ₹ ${price}`);
    } else {
        console.log("Invalid item.")
    }
    
}

cart("Fruits", 1, 300);
cart("Vegetables", 3, 150);
cart("Grains", 5, 1000);