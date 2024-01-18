import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HandleAdd from '../ToggleButton/ToggleButton.';

function App() {

  

  // const dispatch = useDispatch()
  // //this is the GET request to pull the pizzas from the pizza table
  // const fetchThePizzas = () => {
  //   console.log("Inside fetchThePizzas");
  //   axios.get('/api/pizza')
  //   .then(response => {
  //     console.log("Pizza List:", response.data);
  //     dispatch({type: 'SET_PIZZAS', payload: response.data})
  //   }).catch(error => {
  //     console.error(error)
  //     alert('Welp somehting went wrong in fetchThePizzas')
  //   })

  // }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <div className='pizzaItem'>
        <h3>Pizza Title</h3>
        <p>This is how good the pizza is!</p>
        <p>Total:</p>
        <HandleAdd />
      </div>
  
    </div>
  );
}

export default App;
