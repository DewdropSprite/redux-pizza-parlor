import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

const pizzas = (state = [], action) => {
    if (action.type === "SET_PIZZAS") {
        return action.payload;
    }
    return state;
};

const itemsInCart = (state = [], action) => {
    if (action.type === "ADD_PIZZA_TO_CART") {
        console.log("[ADD_PRICE] payload:", action.payload);
        return action.payload;
    } else if (action.type === "SUBTRACT_PIZZA_FROM_CART") {
        console.log("[SUBTRACT_PRICE] payload:", action.payload);
        return action.payload;
    }

    return state;
};

const priceInCart = (state = [], action) => {
if (condition) {
  
}
}
return state

const store = createStore(
    combineReducers({
        pizzas,
        itemsInCart,
    }),
    applyMiddleware(logger)
);

export default store;
