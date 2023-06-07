import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let [number, setNumber] = useState(1)

  const onClickHandlerPlus = () => {
    setNumber(++number);
    console.log(number);
  }

  const onClickHandlerMinus = () => {
    setNumber(--number);
    console.log(number);
  }

  const resetClickHandler = () => {
    setNumber(number = 0);
  }

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={onClickHandlerPlus}>Number + 1</button>
      <button onClick={onClickHandlerMinus}>Number - 1</button>
      <button onClick={resetClickHandler}>Reset counter</button>
    </div>
  );
}

export default App;
