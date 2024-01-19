import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import RenderPizza from "../RenderPizza/RenderPizza";
import Header from "../Header/Header";

// imports at the top - useEffect, useState, axios, React

// set these to const variables, getter and setter
// useState([]) - empty array for starting
const App = () => {
    // const totalPrice = useSelector((store) => store.priceInCart);
    const itemsInCart = useSelector((store) => store.itemsInCart);
    const dispatch = useDispatch();

    // Calculate the total price of all of the pizzas in the cart
    const calculateTotalPriceInCart = () => {
        console.log("calculateTotalPriceInCart() called");
        let newTotalPrice = 0;
        if (itemsInCart.length > 0) {
            newTotalPrice = itemsInCart.reduce((total, currentPizza) => {
                console.log("total price:", total);
                console.log(
                    "current pizza price:",
                    parseInt(currentPizza.price)
                );
                return total + parseInt(currentPizza.price);
            }, 0);
        }
        // else return a value of zero
        return newTotalPrice;
    };

    const fetchPizzas = () => {
        // GET request to /api/pizzas
        axios
            .get("/api/pizza")
            // setPizzas to the response data
            .then((res) => {
                dispatch({
                    type: "SET_PIZZAS",
                    payload: res.data,
                });

                // console.log("res.data:", res.data);
            })
            // catch any errors
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchPizzas();
    }, []);

    // useEffect(() => {
    //     // set the global cart cost
    //     dispatch({
    //         type: "SET_TOTAL",
    //         payload: calculateTotalPriceInCart(),
    //     });
    // }, [itemsInCart]);

    return (
        <div className="App">
            <Header />
            <RenderPizza />
        </div>
    );
};

export default App;
