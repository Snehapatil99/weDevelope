import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const colors = {
    light: {
      primary: '#ffffff',
      secondary: '#f0f0f0',
      text: '#000000',
    },
    dark: {
      primary: '#000000',
      secondary: '#333333',
      text: '#ffffff',
    },
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorContext.Provider value={{ colors: colors[theme], toggleTheme }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => useContext(ColorContext);
