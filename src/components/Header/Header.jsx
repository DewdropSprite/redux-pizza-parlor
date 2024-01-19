import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import calculateTotalPriceInCart from "../../utils/functions";

const Header = () => {
    
    const [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector((state) => state.itemsInCart);

    useEffect(() => {
        setTotalPrice(calculateTotalPriceInCart(cart));
    }, [cart])
    
    return (
        <header className="App-header">
            <h1 className="App-title">Prime Pizza '🛒' Total: {totalPrice}</h1>
        </header>
    );
};

export default Header;
