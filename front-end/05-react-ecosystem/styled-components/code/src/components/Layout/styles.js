import styled from 'styled-components';

export const Container = styled.main`
  width: 80%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color:${({ theme}) => theme.currentTheme.backgroundColor };
  color:${({ theme }) => theme.color};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Article = styled.article`
  max-width: 100%;

  background-color: ${({ theme }) => theme.currentTheme.backgroundArticle};

  font-size: 1.1rem;

  word-wrap: break-word;
  line-height: 1.5;

  padding: 25px;

  border-radius: 8px;
`;

