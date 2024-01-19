import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function PizzaComponent({ pizza }) {
    //! Local State
    const [toggle, setToggle] = useState(true);

    //! Global State
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.itemsInCart);

    // console.log("our shopping cart:", cart);
    const addPizzaToCart = (pizza) => {
        // add the pizza to the cart
        dispatch({
            type: "ADD_PIZZA_TO_CART",
            payload: [...cart, pizza],
        });

        //set the boolean toggle to opp
        setToggle(!toggle);
    };

    const removePizzaFromCart = (pizza) => {
        let filteredCart = cart.filter((pizzaObj) => pizzaObj.id !== pizza.id);
        console.log("filtered cart:", filteredCart);

        // remove the pizza to the cart
        dispatch({
            type: "SUBTRACT_PIZZA_FROM_CART",
            payload: filteredCart,
        });

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
