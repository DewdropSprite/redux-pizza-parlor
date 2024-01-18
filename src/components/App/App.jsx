import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import RenderPizza from "../RenderPizza/RenderPizza";
import Header from "../Header/Header";

// imports at the top - useEffect, useState, axios, React

// set these to const variables, getter and setter
// useState([]) - empty array for starting
const App = () => {
    // const [pizzas, setPizzas] = useState([]);
    const dispatch = useDispatch();

    const fetchPizzas = () => {
        // GET request to /api/pizzas
        axios
            .get("/api/pizza")
            // setPizzas to the response data
            .then((res) => {
                dispatch({ type: "SET_PIZZAS", payload: res.data });
                console.log(response.data);
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
            <RenderPizza />
        </div>
    );
};

export default App;
