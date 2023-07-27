import React from 'react';

import { useTheme } from 'styled-components';
import { FiSun, FiMoon } from "react-icons/fi"; 
import { DiReact } from "react-icons/di"; 

import { Container, HeaderContent, Logo, ButtonToggleTheme } from './styles';

const Header = () => {
  const { selectedTheme, handleToggleTheme} = useTheme();
  
  return (
    <Container>
      <HeaderContent>
        <Logo>
          <DiReact size={50} />
        </Logo>

        <ButtonToggleTheme onClick={handleToggleTheme}>
        {selectedTheme === 'dark' ? <FiSun size={30} /> :  <FiMoon size={30}/> } 
        </ButtonToggleTheme>
      </HeaderContent>
    </Container>
  )
}

export default Header;