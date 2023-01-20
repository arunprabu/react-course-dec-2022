import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../../contexts/AuthContext';
import AccountInfo from './AccountInfo';

describe('AccountInfo', () => {
  /* How to test Context API?
    1. simple render based approach 
    2. customRender based approach 
  */

  it('shows Pls login when not receiving auth context', () => {
    render(<AccountInfo />);
    expect(screen.getByText('Please login to access your account info')).toBeInTheDocument();
  });

  // Approach #1: Let's follow simple render based approach with AuthContext
  it('receives data from context provider', () => {
    const auth = {
      isLoggedIn: true,
      username: 'steve',
      fullName: 'Steve Smith',
      lastLogin: '20/Jan/2023'
    };

    render(
      <AuthContext.Provider value={auth}>
        <AccountInfo />
      </AuthContext.Provider>
    );

    expect(screen.getByText(/^Name:/i).textContent).toBe('Name: Steve Smith');
    expect(screen.getByText(/Username:/i).textContent).toBe('Username: steve');
    expect(screen.getByText(/Last Login:/i).textContent).toBe('Last Login: 20/Jan/2023');
  });

  const customRender = (component, { auth }) => {
    return render(<AuthContext.Provider value={auth}>{component}</AuthContext.Provider>);
  };

  // Approach #2: with customRender function
  it('receives data from context provider #2', () => {
    const auth = {
      isLoggedIn: true,
      username: 'steve',
      fullName: 'Steve Smith',
      lastLogin: '20/Jan/2023'
    };

    customRender(<AccountInfo />, { auth });
    expect(screen.getByText(/^Name:/i).textContent).toBe('Name: Steve Smith');
    expect(screen.getByText(/Username:/i).textContent).toBe('Username: steve');
    expect(screen.getByText(/Last Login:/i).textContent).toBe('Last Login: 20/Jan/2023');
  });
});
