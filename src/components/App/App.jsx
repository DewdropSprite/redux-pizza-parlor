import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import PizzaList from "../PizzaList.jsx/PizzaList";
import Header from "../Header/Header";
import CustInfoForm from "../CustInfoForm/CustInfoForm";

// imports at the top - useEffect, useState, axios, React

// set these to const variables, getter and setter
// useState([]) - empty array for starting
const App = () => {
    const itemsInCart = useSelector((store) => store.itemsInCart);
    const dispatch = useDispatch();

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
            })
            // catch any errors
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchPizzas();
    }, []);

    return (
        <div className="App">
            <Header />
            <CustInfoForm />
            <PizzaList />
        </div>
    );
};

export default App;
