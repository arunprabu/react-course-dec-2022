import { render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';

// test suite == group of related test specs
describe('CompanyInfo', () => {
  
  it('should have companyName Cognizant', () => {
    render(<CompanyInfo />);
    const companyNameElement = screen.getByTestId('companyName');
    console.log(companyNameElement.textContent);
    expect(companyNameElement.textContent).toBe('Company Name: Cognizant');
  });

  // testing props -- must
  it('receives foundedYear prop and displays in JSX', () => {
    // when you are testing prop, render the comp with necessary props
    render(<CompanyInfo foundedYear="2006"/>);
    const foundedYearElement = screen.getByTestId('foundedYear');
    expect(foundedYearElement).toHaveTextContent('Founded In: 2006');
  });

  // TODO: test whether the comp is receiving a prop 'employeeCount' 
  
  // form input with placeholder
  it('has an input with \'Enter Your Country Name\' as placeholder text', () => {
    render(<CompanyInfo />);
    expect(screen.getByPlaceholderText('Enter Your Country Name')).toBeTruthy();
  });

  // inline styles 
  it('has foundedYear with text color green -- inline styles', () => {
    render(<CompanyInfo foundedYear="2006" />);
    const foundedYearElement = screen.getByTestId('foundedYear');
    // recommended to use color code in hexa or rgb -- not the color names
    expect(foundedYearElement).toHaveStyle('color: rgb(0, 255, 0)');
  });

  // TODO: test whether a button has css class btn-primary 
    // the button text should be Join Cognizant 
    // use data-testid 
    // you can have muliple expectations here 

  // events and states 
  // snapshot test

  // mocks 
});