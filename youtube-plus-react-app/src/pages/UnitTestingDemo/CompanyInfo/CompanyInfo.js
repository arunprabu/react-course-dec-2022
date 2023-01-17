import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

const CompanyInfo = ( props ) => {
  const [countryName, setCountryName] = useState('USA');

  return (
    <div>
      <h2>CompanyInfo | Testing Props, Styles, Placeholder Text, Events, States, Snapshot</h2>
      <h3 data-testid="companyName">Company Name: Cognizant</h3>
      <p data-testid="foundedYear" style={{ color: 'rgb(0, 255, 0)' }}>
        Founded In: {props.foundedYear}
      </p>
      <input
        type="text"
        placeholder="Enter Your Country Name"
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
      <p data-testid="visitCognizant">Visit Cognizant {countryName} Website</p>
    </div>
  );
};
CompanyInfo.propTypes = {
  foundedYear: PropTypes.string
};

export default CompanyInfo;
