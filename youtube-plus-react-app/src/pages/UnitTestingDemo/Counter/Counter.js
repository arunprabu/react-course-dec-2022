import React, { useState } from 'react';

const Counter = () => {
  const [ticker, setTicker] = useState(0);

  const handleIncrement = () => {
    if(ticker < 10) {
      setTicker(ticker + 1);
    }
  };
  
  // TODO: make decrement also to work 
  // should be decremented till 0. 

  return (
    <div>
      <h2>Counter | Testing Click & State update with condition</h2>

      <p data-testid="counterValue">{ticker}</p>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-testid="incrementBtn"
        onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" className="btn btn-danger btn-sm">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
