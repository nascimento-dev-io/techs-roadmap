import React from 'react';

import { DefaultButton } from './styles';

const Button = ({ onToggleTheme, children }) => {
  return (
    <DefaultButton onClick={onToggleTheme}>
      {children}
    </DefaultButton>
  )
}

export default Button;