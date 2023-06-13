import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [number, setNumber] = useState(1)

  let onClickHandlerPlus = () => {
    setNumber(++number);
    console.log(number);
  }

  let onClickHandlerMinus = () => {
    setNumber(--number);
    console.log(number)
  }

  let onClickHandlerReset = () => {
    setNumber(number = 0);
    console.log(number)
  }

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={onClickHandlerPlus}>Number +</button>
      <button onClick={onClickHandlerReset}>Reset</button>
      <button onClick={onClickHandlerMinus}>Number -</button>
    </div>
  );
}

export default App;
