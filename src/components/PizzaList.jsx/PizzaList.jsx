import { useSelector } from "react-redux";
import PizzaComponent from "../PizzaComponent/PizzaComponent";

function PizzaList() {
    //! Global State
    const pizzaList = useSelector((store) => store.pizzas);

    return (
        <section>
            <h2>Step 1: Select Your Pizza</h2>
            <ul>
                {pizzaList.map((pizza) => (
                    <PizzaComponent pizza={pizza} key={pizza.id}/>
                ))}
            </ul>
        </section>
    );
}

export default PizzaList;
