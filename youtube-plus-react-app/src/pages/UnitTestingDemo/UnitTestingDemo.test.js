// Unit tests 
// Arrange
import { render, screen } from '@testing-library/react';
import UnitTestingDemo from './UnitTestingDemo';

describe('UnitTestingDemo', () => {
  // test spec
  it('has \'Unit Testing Examples\' as heading', () => {
    // Act
    render(<UnitTestingDemo />);
    const heading = screen.getByText('Unit Testing Examples');

    // Assert
    expect(heading).toBeInTheDocument();
  });

  it('has link with text \'Unit Testing Reference\'', () => {
    render(<UnitTestingDemo />);
    // using regex to text with case insensitive
    const link = screen.getByText(/Unit Testing Reference/i); // partial search is possible
    expect(link).toBeTruthy();
  });
});
