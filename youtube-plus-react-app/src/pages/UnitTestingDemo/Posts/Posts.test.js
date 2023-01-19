import { render, screen } from '@testing-library/react';
import { mockFetch } from './mocks/mockFetch';
import Posts from './Posts';

describe('Posts', () => {

  // setting up a spy 
  beforeEach( () => {
    // prepare to attach spy
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
  });

  // tearing down
  afterEach( () => {
    jest.resetAllMocks();
  });

  it('[SPYING]: renders posts properly', async() => {
    render(<Posts />);

    expect(await screen.findByText('cricket match #1 result - lose')).toBeInTheDocument();
  });
});