import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function PizzaComponent({ pizza }) {
    //! Local State
    const [toggle, setToggle] = useState(true);

    //! Global State
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.itemsInCart);

    const addPizzaToCart = (pizza) => {
        // add the pizza to the cart
        dispatch({
            type: "ADD_PIZZA_TO_CART",
            payload: [...cart, pizza]
        });

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
        <>
            <ul>
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
                        <button onClick={() => removePizzaFromCart(pizza)}>
                            Remove
                        </button>
                    )}
                </li>
            </ul>
        </>
    );
}
