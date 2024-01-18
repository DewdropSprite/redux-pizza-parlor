import { useSelector, useDispatch } from "react-redux";
import { useState} from "react";

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
    const [toggle, setToggle] = useState(true);
    // total cost in store

    const dispatch = useDispatch();
    const pizzaList = useSelector((store) => store.pizzas);
    const shoppingCart = useSelector((store) => store.itemsInCart);

    console.log(pizzaList);

    const addPriceToTotal = () => {
        // take the total and add the price of the current (pizza.price)
        // go through the pizza list array, accessing the price properties
        // then we add all of the values together and return the amount.

        
        //! Below is code that is going to be used, commented for now
        // let total = pizzaList.reduce((accumulator, currentValue) => {
        //     return accumulator + currentValue;
        // }, initialValue = 0)
        
        // dispatch({
        //     type: "ADD_PIZZA_TO_CART",
        //     payload: total
        // })


        //set the boolean toggle to opp
        setToggle(!toggle);
    }

    const subtractPriceFromTotal = () => {
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
    }

    return (
        <section>
            <h2>Step 1: Select Your Pizza</h2>
            <div>
                {pizzaList.map((pizza) => (
                    <ul key={pizza.id}>
                        <li>{pizza.name}</li>
                        <li>{pizza.description}</li>
                        <li>{pizza.price}</li>
                        <li><img src={pizza.image_path} /></li>
                        <li>
                            {toggle ? (
                                <button onClick={addPriceToTotal}>Add</button>
                            ) : (
                                <button onClick={subtractPriceFromTotal}>Remove</button>
                            )}
                        </li>
                    </ul>
                ))}
            </div>
        </section>
    );
}

export default RenderPizza;
