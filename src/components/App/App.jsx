
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import ToggleAdd from '../ToggleButton/ToggleButton.';
import RenderPizza from '../RenderPizza/RenderPizza';

// imports at the top - useEffect, useState, axios, React



// set these to const variables, getter and setter
// useState([]) - empty array for starting
const App = () => {
  // const [pizzas, setPizzas] = useState([]);
  const dispatch = useDispatch()


  useEffect(() => {
    // GET request to /api/pizzas
    axios
      .get("/api/pizza")
      // setPizzas to the response data
      .then((res) => {
        dispatch({type: 'SET_PIZZAS', payload:res.data});
        console.log(response.data);
      })
      // catch any errors
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  




  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza '🛒' Total:</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
      <RenderPizza />
  
    </div>
  );
};

export default App;
