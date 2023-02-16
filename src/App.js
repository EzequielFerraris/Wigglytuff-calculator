import './App.css';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Screen from './components/Screen.js';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import wiggly from "./images/Wigglytuff.png";


function App() {

  const [input, setInput] = useState('0');
  const [result, setResult] = useState(''); 
  const [flag, setFlag] = useState('0');
  const [pointFlag, setPoinFlag] = useState("0");

  const addInput = val => {
    if(input === "0") {
      setInput(val);
    }
    else if (val===".") {
      if(pointFlag === "1") {
        return "";
      }
      else {
        setPoinFlag("1");
        setInput(input + val);
      };
    }
    else if (/[-+*/]/.test(val)) {
      setFlag("0");
      setPoinFlag("0");
      if(/[0-9][-+*/]$/.test(input) && val !== "-") {
        let newInput = input.slice(0, -1);
        setInput(newInput + val);
      }
      else if(/[-+*/][-+*/]$/.test(input)) {
        let newInput = input.slice(0, -2);
        setInput(newInput + val);
      }
      else {
        setInput(input + val);
      }
    }
    else if(/[0-9]/.test(val)) {
      switch(flag) 
     {
      case "0":
        setInput(input + val);
        break;
      case "1":
        setInput(val);
        setFlag("0");
        break;
     }
    };
  };

  const newResult = val => {setResult(val)};

  const calcResult = () => {
    if(input) {
      let result = evaluate(input);
      setInput(result);
      newResult(result);
      setFlag("1");
      setPoinFlag("0");
    };
  };

  const handleClear = () => {
    setInput('0');
    newResult('');
    setFlag("0");
    setPoinFlag("0");
  }

  return (
    <div className="App">
       <img 
      id="Wigglytuff1"
      src={wiggly}
      alt="Wigglytuff"/>
      <h2>Let's count them all!</h2>
      <div className="calculator-container">
        <Screen input={input} result={result} />
      <div className='row'>
          <Button handleClick={addInput} id="one">1</Button>
          <Button handleClick={addInput} id="two">2</Button>
          <Button handleClick={addInput} id="three">3</Button>
          <Button handleClick={addInput} id="add">+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput} id="four">4</Button>
          <Button handleClick={addInput} id="five">5</Button>
          <Button handleClick={addInput} id="six">6</Button>
          <Button handleClick={addInput} id="subtract">-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput} id="seven">7</Button>
          <Button handleClick={addInput} id="eight">8</Button>
          <Button handleClick={addInput} id="nine">9</Button>
          <Button handleClick={addInput} id="multiply">*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calcResult} id="equals">=</Button>
          <Button handleClick={addInput} id="zero">0</Button>
          <Button handleClick={addInput} id="decimal">.</Button>
          <Button handleClick={addInput} id="divide">/</Button>
        </div>
        <div className='row'>
          <ClearButton
          handleClear={() => handleClear()}
          id="clear">
            Clear
            </ClearButton>
        </div>
      </div>
      <img 
      id="Wigglytuff2"
      src={wiggly}
      alt="Wigglytuff"/>
    </div>
  );
}

export default App;
