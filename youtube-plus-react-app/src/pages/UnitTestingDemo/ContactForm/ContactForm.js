import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    phone: ''
  });

  return (
    <div className="row">
      <h4>ContactForm | Testing Form in React</h4>
      <form className="col-md-4">
        <div>
          <label htmlFor="nameInput">Enter Name:</label>
          {/* on change is pending -- we will do it tomorrow */}
          <input type="text" id="nameInput" className="form-control" name="nameInput" />
        </div>

        <div>
          <label htmlFor="phoneInput">Enter Phone:</label>
          <input type="number" id="phoneInput" className="form-control" name="phoneInput" />
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary" disabled={formState.firstName === ''}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
