import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Counter state and increment function
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Component A
  const ComponentA = () => {
    const [cendol, setCendol] = useState(2);

    return (
      <div className="component">
        <h2>Component A</h2>
        <p>Value of cendol: {cendol}</p>
        <ComponentB cendol={cendol} setCendol={setCendol} />
      </div>
    );
  };

  // Component B
  const ComponentB = ({ cendol, setCendol }) => {
    const incrementCendol = () => {
      setCendol(cendol + 10);
    };

    return (
      <div className="component">
        <h2>Component B</h2>
        <p>Value of cendol from Component A: {cendol}</p>
        <button className="increment-button" onClick={incrementCendol}>
          Increment cendol by 10
        </button>
      </div>
    );
  };

  // Dynamic Button Component
  const DynamicButton = () => {
    const [isTrue, setIsTrue] = useState(true);

    const handleButtonClick = () => {
      setIsTrue(!isTrue);
    };

    const buttonStyle = {
      backgroundColor: isTrue ? 'red' : 'blue',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    return (
      <div className="component">
        <h2>To create dynamic button</h2>
        <button style={buttonStyle} onClick={handleButtonClick}>
          {isTrue ? 'True' : 'False'}
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="circle" style={{ backgroundColor: counter % 2 === 0 ? 'blue' : 'red' }}>
        <button onClick={incrementCounter}>{counter}</button>
      </div>
      <ComponentA />
      <DynamicButton />
    </div>
  );
};

export default App;
