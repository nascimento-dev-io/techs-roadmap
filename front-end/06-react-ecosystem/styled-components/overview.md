## Styled Components

Styled Components é um **lib** utilizada no ecossistema React que usa o conceito (CSS in JS ), ou seja, o CSS é gerado a partir de arquivos javascript, o styled retorna componentes React estilizados.

Algumas vantagens:
- Styled-components gera nomes de classe exclusivos para seus estilos ( estilos escopados )
- Melhor manutenabilidade pois estilo está vinculado a um componente específico.
- CSS dinâmico baseado em **props**, aumentando flexibilidade de forma simples.
- Sintaxe do CSS puro com vendor prefix inserido de forma automática.

> Você obtém todos esses benefícios enquanto ainda escreve o CSS que conhece.

### Instalação
Após iniciar um projeto com um template como o [CRA](https://create-react-app.dev/), vamos instalar o styled components.

```bash
# com npm
npm install --save styled-components

# com yarn
yarn add styled-components
```

Styled utiliza [tagged template literals](https://www.alura.com.br/artigos/tagged-template-literals) que permite interpolação de código JS na criação dos estilos, o retorno da função `styled.tag` é a criação de um componente React estilizado.

Exemplo de criação de componente de nome **Title** que renderiza uma tag **h1** com alguns estilos.
```js
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5rem;
`;
```
Para utiliza-lo apenas **import** em outro arquivo e use como o exemplo abaixo:

```js
import Title from './styles'; // insira o caminho para o arquivo

const App = () => {
  return (
     <Container> 
      <Title> Algum título</Title>
     </Container>
  )
}
```

### Estilização baseada em props

Podemos passar uma função interpolada para obter acesso a **props** e assim alterar a estilização de um componente, veja o exemplo abaixo:

```js
const Button = styled.button`
  /* a cor é definida de acordo com a prop primary */

  background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  padding: 0.25em 1em;
  border-radius: 3px;
`;

// So definir via props o tipo do botão e a estilização é definida
render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

### Estendendo estilos

Podemos estender estilo de um componente, para isso precisamos passar o componente como parâmentro do construtor styled, conforme exemplo abaixo:

```js
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```
> Usa todos os estilos de Button acrescendo apenas color e border-color diferentes.


### Helpers keyframes e css

O styled disponibiliza a função **keyframes** para criação de animações, essa gera uma instância única que você pode usar em todo o seu aplicativo.

```js
import { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

//  adicionado no componente estilizado
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// usado no seu componente
render(
  <Rotate>&lt; 💅🏾 &gt;</Rotate>
);
```

Para criar trechos de código de estilização isolado você pode usar o função **css**, vamos ao exemplo.

```js
...
const rotationAnimation = css`
  animation: ${rotate} 2s linear infinite;
`
```

### Definindo estilos globais
O **GlobalStyle** é uma função onde definimos o css que reseta e padroniza regras globais que afeta toda árvore de componentes pois definimos geralmente no `App`, como por exemplo reset de margin, padding etc. Essa função retorna um componente que inserimos no componente de mais alto nível.

*Vamos ao exemplo:*

```js
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;

```

Adicionando no componente `App` ...

```js
import React from 'react';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
```

### ThemeProvider e useTheme
O styled components disponibiliza um componente `ThemeProvider` que utiliza a context API para disponibilizar acesso ao tema para sua árvore de componentes.

O **Provider** possui um atributo **theme** onde é definido o tema que sera disponibilizado para os componentes children.

```js
import { ThemeProvider } from 'styled-components';

// Componente App
const App = () => {
  const theme = {
    bg: '#333333'
    fg: '#f5f5f5'
  }

  <ThemeProvider theme={theme}>     
    <Button>Theme</Button> 
  </ThemeProvider>
}

...

// Button - estilizado com acesso a prop theme do provider
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
`;
```
Temos então acesso como visto antes, via props, nesse caso ao **theme** definido no **ThemeProvider**, com isso podemos criar arquivos diferentes para definir temas diferentes como **dark** e **light** e alternar o valor do atributo **theme** criando um toggleTheme para a aplicação, entre outras possibilidades.

O hook **useTheme** concede acesso ao contexto do **ThemeProvider**, ou seja, tudo que é disponibilizado no atributo **theme** também é disponibilizado para acesso via hook.

> Veja [aqui](https://github.com/nascimento-dev-io/react-ecosystem/tree/main/styled-components)  um exemplo de **toggle theme** com a criação de um novo contexto para isolar lógicas pertinentes ao tema da aplicação, incluindo usando o localStorage para armazena o tema escolhido.


**Obrigado por ler!**

---
> Documentação Oficial - [Styles Components](https://styled-components.com/docs) 

> Veja também: [Aprendendo React - The Roadmap!](https://dev.to/nascimento_/apredendo-react-the-roadmap-5fii)

> <sub> *Este post tem como objetivo ajudar quem esta começando no aprendizado de React, além de servir como incentivo no meus estudos de React criando outros posts pra fixação do aprendizado.* </sub>


<h4> <em> Me Sigam :) </em> </h4>
<div 
style="display: flex; align-items: center;">

  <a href="https://www.linkedin.com/in/nascimento-dev-io/">
  <img src="https://ik.imagekit.io/Nscmnt/icons/pngwing.com__4__m0IN66sEh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650463280960">
  </a>
  <a href="https://github.com/nascimento-dev-io">
    <img src="https://ik.imagekit.io/Nscmnt/icons/pngwing.com__5__A7_Madm1Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650463360355">
  </a>

</div>