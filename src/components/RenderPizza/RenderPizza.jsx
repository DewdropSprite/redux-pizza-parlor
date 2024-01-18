

let pizzaArray =[{
    id: 1,
    name: "Pepperoni",
    description: "Pepperoni pizza",
    price: 12.99,
    image_path: 'images/pizza_photo.png'

},
{
    id: 2,
    name: "Cheese",
    description: "Cheese Pizza",
    price: 13.00,
    image_path: 'images/pizza_photo.png'

},
{
    id: 3,
    name: "Sausage",
    description: "Sausage Pizza",
    price: 17.50,
    image_path: 'images/pizza_photo.png'

}]

function RenderPizza(){
    let pizzaList = pizzaArray

    return(
        <section>
            <h2>Step 1: Select Your Pizza</h2>
            <div>
                {pizzaList.map((pizza) =>
                <ul key={pizza.id}>
                    <li>{pizza.name}</li>
                    <li>{pizza.description}</li>
                    <li>{pizza.price}</li>
                    <li> Add and Remove Button</li>
                </ul>
                )}
            </div>
        </section>
    )
}

export default RenderPizza;