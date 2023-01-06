import React from 'react'
import Bye from './Bye/Bye';
import Hello from './Hello/Hello';
import LastLogin from './LastLogin/LastLogin';
import applyStyles from '../../hoc/applyStyles';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <>
      <h2>Render Props Pattern</h2>
      <LastLogin>
        <p>Last Login: 4/Jan/2023, 6pm</p>
        <p>Updated at: 3PM Today</p>
      </LastLogin>

      <LastLogin>
        <p>You are logged out. Do you want to Login?</p>
        <p>Login feature not built in this app</p>
      </LastLogin>

      <hr />
      <h2>Higher Order Components Pattern</h2>
      <StyledHello name="John" />
      <StyledBye name="John" />

      <hr />
      <h2>Error Boundary Demo</h2>
    </>
  );
}

export default HocDemoPage