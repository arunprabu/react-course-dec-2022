import React, { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext';

const ContactUsPage = () => {
  // Step 3 of context api 
  // Receive the data from App.js using useContext() Hook
  const context = useContext(PageContext);
  console.log(context);

  return (
    <div>
      <h1>Contact Us Page</h1>
      <p>Is the user Authenticated? {context.isLoggedIn? 'Yes': 'No'}</p>
      <p>Last Login: {context.lastLogin}</p>
    </div>
  );
};

export default ContactUsPage;