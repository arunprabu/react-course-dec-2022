import React from 'react';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import ContactForm from './ContactForm/ContactForm';
import Counter from './Counter/Counter';
import AccountInfo from './AccountInfo/AccountInfo';
import Posts from './Posts/Posts';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import Users from './Users/Users';

const UnitTestingDemo = () => {
  return (
    <div>
      <h1>Unit Testing Examples</h1>
      <a href="https://reactjs.org/docs/testing.html">unit testing reference</a>
      <hr />
      <CompanyInfo foundedYear="1998" />
      <hr />
      <Counter />
      <hr />
      <ThemeSwitcher />
      <hr />
      <ContactForm />
      <hr />
      <Users />

      <hr />
      <Posts />

      <hr />
      <AccountInfo />
    </div>
  );
};

export default UnitTestingDemo;
