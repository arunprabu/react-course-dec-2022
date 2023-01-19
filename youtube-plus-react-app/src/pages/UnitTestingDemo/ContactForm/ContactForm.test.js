import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  
  it('has proper contact form', () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText('Enter Name:');
    const phoneInput = screen.getByLabelText('Enter Phone:');
    const submitBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(phoneInput).toHaveAttribute('type', 'number');
  });

  // negative spec
  it('has the submit button in disabled state when first name is empty', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Enter Name:');
    const mockEventObj = {
      // praparing the mock event obj with target value being empty
      target: {
        value: ''
      }
    };
    // trigger change event
    fireEvent.change(nameInput, mockEventObj);

    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toHaveAttribute('disabled');
  });

  // TODO: has the submit button in enabled state when firstName is not empty 
  // TODO: trigger the submit button click and check whether success msg is present

});