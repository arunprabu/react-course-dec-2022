import React from 'react';
import { PropTypes } from 'prop-types';

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
Calculator.propTypes = {
  add: PropTypes.func
};

export default Calculator;