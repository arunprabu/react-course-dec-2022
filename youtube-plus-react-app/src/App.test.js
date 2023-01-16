// to test App Component
// This is the place for us to write unit tests 
// Test Pattern: AAA (Arrange, Act, Assert)

// Let's arrange the necessary tools from RTL.
import { render, screen } from '@testing-library/react';
// What comp is to be tested? App 
import App from './App';

// test suite -- group of related test spec
describe('App', () => {
  // test spec /test case begins
  // test('App comp has success! text', () => {
  //   // act
  //   // writing the logic to test whether the app comp has success text or not
  //   render(<App />); // Render into a container which is appended to document.body.
  //   // let's test whether the rendered comp has the success text or not
  //   const successTextEl = screen.getByText('success!'); // DOM Querying
  //   // Let's assert now 
  //   expect(successTextEl).toBeInTheDocument();
  // });

  // 'it' is an alias of test
  it('has proper App Component', () => {
    // Act - Optional
    // Assert is mandatory for a test spec
    //  expect is from JEST
    // toBeTruthy is a matcher from '@testing-library/jest-dom';
    expect(App).toBeTruthy();
  });
});

