import React from 'react';
import { PropTypes } from 'prop-types';

const Bye = (props) => {
  return <p>Bye, {props.name}</p>;
};
Bye.propTypes = {
  name: PropTypes.string
};

export default Bye;
