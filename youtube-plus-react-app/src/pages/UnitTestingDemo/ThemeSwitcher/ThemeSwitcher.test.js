import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSwitcher from './ThemeSwitcher';

describe('ThemeSwitcher',  () => {
  it('has toggle theme button', () => {
    render(<ThemeSwitcher />);
    const themeSwitcherBtn = screen.getByRole('button');
    userEvent.click(themeSwitcherBtn);

    expect(screen.getByText(/Current Theme/i)).toHaveTextContent(/dark/i);
  });

  // TODO: test whether the parent div has
  // background-color: rgb(0, 0, 0); color: rgb(255, 255, 255); or not when theme is dark
  // TODO: test whether the parent div has
  // background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); or not when theme is light

  // Learn about the diff b/w fireEvent and userEvent here
  // https://blog.mimacom.com/react-testing-library-fireevent-vs-userevent/
});
