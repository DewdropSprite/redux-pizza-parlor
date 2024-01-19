// Calculate the total price of all of the pizzas in the cart
const calculateTotalPriceInCart = (itemsInCart) => {
    let newTotalPrice = 0;
    if (itemsInCart.length > 0) {
        newTotalPrice = itemsInCart.reduce((total, currentPizza) => {
            return total + parseFloat(currentPizza.price);
        }, 0);
    }
    // else return a value of zero
    return newTotalPrice;
};

export default calculateTotalPriceInCart;
