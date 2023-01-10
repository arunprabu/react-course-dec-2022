import React, { useState } from 'react';

const MyAccount = () => {

  // useState Demo
  const [ age, setAge ] = useState(20);
  // console.log(age);

  const [myName, setMyName ] = useState('arun');
  // console.log(myName);

  const handleChangeAge = () => {
    setAge(50);
  };

  return (
    <div>
      <h3>My Account</h3>
      <p>Age: {age}</p>
      <button onClick={handleChangeAge}>Change Age to 50</button>

      <p>Name: {myName}</p>
      <button onClick={() => setMyName('John')}>Change Name</button>
    </div>
  );
};

export default MyAccount;