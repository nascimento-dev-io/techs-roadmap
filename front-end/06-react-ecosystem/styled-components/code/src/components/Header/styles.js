import styled, { css } from 'styled-components';
import { DefaultButton } from '../DefaultButton/styles';

export const Container = styled.header`
  height:80px;

  background-color: ${({ theme }) => theme.currentTheme.backgroundHeader};
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  font-size: 1.5rem;
`;

export const ButtonToggleTheme = styled(DefaultButton)`
  background-color: transparent;
  svg {
    font-size: 1.2rem;
    color: #e2ed6a;
  }
`;