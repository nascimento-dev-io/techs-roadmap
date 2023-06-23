import styled from "styled-components";

export const  DefaultButton = styled.button`
  padding: 0;

  border: none;
  outline: none;

  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  cursor: pointer;

  transition: all 300ms;

  &:hover{ 
    opacity: .8;
  }

  &:active{ 
    transform: scale(.99);
  }
`