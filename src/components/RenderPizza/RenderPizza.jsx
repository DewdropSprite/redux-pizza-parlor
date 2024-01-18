import { useSelector } from "react-redux";
import ToggleAdd from "../ToggleButton/ToggleButton.";

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

function RenderPizza(){
    const pizzaList = useSelector(store => store.pizzas)
    console.log(pizzaList);

    return(
        <section>
            <h2>Step 1: Select Your Pizza</h2>
            <div>
                {pizzaList.map((pizza) =>
                <ul key={pizza.id}>
                    <li>{pizza.name}</li>
                    <li>{pizza.description}</li>
                    <li>{pizza.price}</li>
                    <ToggleAdd />
                </ul>
                )}
            </div>
        </section>
    )
}

export default RenderPizza;