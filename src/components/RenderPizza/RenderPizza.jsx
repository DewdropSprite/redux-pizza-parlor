import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// let pizzaArray =[{
//     id: 1,
//     name: "Pepperoni",
//     description: "Pepperoni pizza",
//     price: 12.99,
//     image_path: 'images/pizza_photo.png'

// },
// {
//     id: 2,
//     name: "Cheese",
//     description: "Cheese Pizza",
//     price: 13.00,
//     image_path: 'images/pizza_photo.png'

// },
// {
//     id: 3,
//     name: "Sausage",
//     description: "Sausage Pizza",
//     price: 17.50,
//     image_path: 'images/pizza_photo.png'

// }]

function RenderPizza() {
    //! Local State
    const [toggle, setToggle] = useState(true);
    // const [totalPrice, setTotalPrice] = useState(0);

    //! Global State
    const pizzaList = useSelector((store) => store.pizzas);
    const shoppingCart = useSelector((store) => store.itemsInCart);
    // const totalPrice = useSelector((store) => store.priceInCart);
    const dispatch = useDispatch();

    // console.log(pizzaList);
    // console.log("total pizza cost:", totalPrice);

    // // Calculate the total price of all of the pizzas in the cart
    // const calculateTotalPriceInCart = () => {

    //     console.log("calculateTotalPriceInCart() called");
    //     let newTotalPrice = 0;
    //     // if pizza in cart, add prices then return total
    //     if (shoppingCart.length > 0) {
    //         newTotalPrice = pizzaList.reduce((accumulator, currentValue) => {
    //             return accumulator + currentValue.price;
    //         });
    //     }
    //     // else return a value of zero
    //     return newTotalPrice;
    // };

    const addPizzaToCart = (pizza) => {
        // add the pizza to the cart
        dispatch({
            type: "ADD_PIZZA_TO_CART",
            payload: pizza,
        });

        // // set the global cart cost
        // dispatch({
        //     type: "SET_TOTAL",
        //     payload: calculateTotalPriceInCart()
        // })
        
        //set the boolean toggle to opp
        setToggle(!toggle);
    };

    const removePizzaFromCart = (pizza) => {
        //take the total and subtract the price of the current (pizza.price)

        // The idea is to take the list the represent the pizzas in the cart,
        // grab that total price from state, then we can subtract the pizza.price
        // for the pizza that this button was clicked on, then dispatch new total
        // and then flip the boolean

        //! Below is code that is going to be used, commented for now
        // let newTotal = pizzaList.reduce((accumulator, currentValue) => {
        //     return accumulator - currentValue;
        // }, initialValue = 0)

        // dispatch({
        //     type: "SUBTRACT_PIZZA_FROM_CART",
        //     payload: total
        // }

        //set the boolean toggle to opp
        setToggle(!toggle);
    };

    return (
        <section>
            <h2>Step 1: Select Your Pizza</h2>
            <div>
                {pizzaList.map((pizza) => (
                    <ul key={pizza.id}>
                        <li>{pizza.name}</li>
                        <li>{pizza.description}</li>
                        <li>{pizza.price}</li>
                        <li>
                            <img src={pizza.image_path} />
                        </li>
                        <li>
                            {toggle ? (
                                <button onClick={() => addPizzaToCart(pizza)}>
                                    Add
                                </button>
                            ) : (
                                <button
                                    onClick={() => removePizzaFromCart(pizza)}
                                >
                                    Remove
                                </button>
                            )}
                        </li>
                    </ul>
                ))}
            </div>
        </section>
    );
}

export default RenderPizza;
