import {useSelector} from "react-redux";

const Header = () => {
    
    const totalPrice = useSelector((store) => store.priceInCart);
    
    
    return (
        <header className="App-header">
            <h1 className="App-title">Prime Pizza '🛒' Total: {totalPrice}</h1>
        </header>
    );
};

export default Header;
