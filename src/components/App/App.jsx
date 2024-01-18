import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HandleAdd from '../ToggleButton/ToggleButton.';
import ToggleAdd from '../ToggleButton/ToggleButton.';

function App() {

  




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
        <ToggleAdd />
      </div>
  
    </div>
  );
}

export default App;
