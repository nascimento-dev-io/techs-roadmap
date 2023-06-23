import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
 body{
  width: 100vw;
  margin: 0;
  padding: 0;

  background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
  color: ${({ theme }) => theme.currentTheme.color};

  box-sizing: border-box;
 }
`