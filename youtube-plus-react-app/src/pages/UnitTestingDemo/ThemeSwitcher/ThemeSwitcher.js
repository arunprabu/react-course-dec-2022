import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const handleSwitchTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  const myTheme = {
    dark: {
      backgroundColor: '#000',
      color: '#fff'
    },
    light: {
      backgroundColor: '#fff',
      color: '#000'
    }
  };

  return (
    <div className="text-center p-5" style={theme === 'light' ? myTheme.light : myTheme.dark}>
      <h2>Theme Switcher | User Generated Event</h2>
      <p>Current Theme: {theme}</p>
      <button type="button" className="btn btn-info btn-sm" onClick={handleSwitchTheme}>
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
