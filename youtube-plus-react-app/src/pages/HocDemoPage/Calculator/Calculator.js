import React from 'react';

const Calculator = (props) => {
  return (
    <div>
      <h3>Calculator</h3>
      {/* The following will result in error boundary to show up  */}
      <p>{props.add()}</p>

      {/* The following will not result in error boundary to
       show up as it does not catch errors for Event handlers */}
      {/* <button onClick={props.add}>Click Me</button> */}
    </div>
  );
};

export default Calculator;