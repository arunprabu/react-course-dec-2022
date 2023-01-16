import React from 'react';
import { PropTypes } from 'prop-types';

const Hello = (props) => {
  return (
    <p>Hello, {props.name}</p>
  );
};
Hello.propTypes = {
  name: PropTypes.string
};

export default Hello;
