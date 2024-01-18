import {useState} from "react";

const Header = () => {
    
    const [totalPrice, setTotalPrice] = useState(0);
    
    
    return (
        <header className="App-header">
            <h1 className="App-title">Prime Pizza '🛒' Total: {totalPrice}</h1>
        </header>
    );
};

export default Header;
