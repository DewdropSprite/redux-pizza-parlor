// imports at the top - useEffect, useState, axios, React
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// set these to const variables, getter and setter
// useState([]) - empty array for starting
const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // GET request to /api/pizzas
    axios
      .get("/api/pizza")
      // setPizzas to the response data
      .then((res) => {
        setPizzas(res.data);
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
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
};

export default App;
