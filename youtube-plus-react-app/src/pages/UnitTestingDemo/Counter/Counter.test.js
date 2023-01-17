import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('has counter with initial value 0', () => {
    render(<Counter />);
    const counterValueElement = screen.getByTestId('counterValue');
    expect(counterValueElement.textContent).toEqual('0');
  });

  it('has properly working increment button', () => {
    render(<Counter />);

    // fetching counter element
    const counterValueElement = screen.getByTestId('counterValue');
    expect(counterValueElement.textContent).toEqual('0');

    // find the increment button
    const incrementBtn = screen.getByTestId('incrementBtn');

    // trigger the click
    fireEvent.click(incrementBtn);
    // fetch the counter value again -- find whether it is incremented or not
    expect(counterValueElement.textContent).toEqual('1');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValueElement.textContent).toEqual('3');
  });

  // TODO: has properly working decrement button

  it('has counter with max value of 10 upon increment and min value of 0 upon decrement', () => {
    render(<Counter />);

    const counterValueElement = screen.getByTestId('counterValue');
    const incrementBtn = screen.getByTestId('incrementBtn');

    for(let i = 0; i < 10; i++){
      fireEvent.click(incrementBtn);
    }
    fireEvent.click(incrementBtn); // clicking the 11th time
    expect(counterValueElement.textContent).toEqual('10');
  });
});
