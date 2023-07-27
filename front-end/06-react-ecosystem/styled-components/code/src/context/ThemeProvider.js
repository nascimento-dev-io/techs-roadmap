import { useMemo, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider} from 'styled-components';

import themes from '../styles/themes';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const themeStored = localStorage.getItem('theme');

    if(!themeStored){
      return 'dark';
    }

    return themeStored;
  });

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme])


  function handleToggleTheme(){
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
  <StyledThemeProvider theme={{selectedTheme: theme, currentTheme, handleToggleTheme}}>
    {children}
  </StyledThemeProvider>
  )
}