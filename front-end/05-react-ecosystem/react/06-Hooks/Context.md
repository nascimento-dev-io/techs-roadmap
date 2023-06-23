### React - O que é Contexto 

Contexto é uma forma de disponibilizar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível, isso evita o chamado prop drilling que é ter muitos níveis de componentes passando a mesma prop para seu filhos mesmo que ele não a utilize, esse problema é resolvido com criação de contextos.

#### React.createContext
Cria um objeto Contexto ( context ). Quando o React renderiza um componente que assina este objeto Contexto, este vai ler o valor atual do **Provider**.

```jsx
...
const MyContext = React.createContext(defaultValue);
```

#### Context.Provider
Cada objeto Contexto ( context ) vem com um componente Provider que permite componentes consumidores a assinarem mudanças no contexto.

```jsx
...
<MyContext.Provider value={/* algum valor */}/>
```
O componente Provider aceita uma prop **value** que possui os dados para ser consumido por componentes que são descendentes deste Provider.

Todos consumidores que são descendentes de um Provider serão renderizados novamente sempre que a prop value do Provider for alterada.

#### useContext

O **useContext** permite acesso a dados disponibilizados em um determinado contexto criado e inserido na árvore de componentes.

```jsx
const value = useContext(MyContext);
```

Vamos a um exemplo completo:

```jsx
import React, { useState, createContext } from "react";

// Criação do contexto
export const myContext = createContext();

const styles = {
  dark: {
    backgroundColor: "#333",
    color: "#f5f5f5",
  },
  light: {
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
};

const user = {
  name: "Jorge",
};

// Função que retorna o Provider.
export const ContextProvider = ({ children }) => {
  const { dark, light } = styles;
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme((oldTheme) => (oldTheme === light ? dark : light));
  };

  return (
    // Componente Provider com dados/funções na prop value.
    <myContext.Provider value={{ user, toggleTheme, theme }}>
      {children}
    </myContext.Provider>
  );
};

```

Apenas para finalidade de exemplo, criamos um contexto com informações variadas **themes** e **user** e disponibilizando para que seja consumido por toda árvore que esteja dentro do _whrapper_ provider.

Abaixo componente que irá consumir esse contexto:
```jsx

import React, { useState, useEffect, useContext } from "react";

// importe do contexto
import { myContext } from "./Context-Provider";

const Consumer = () => {
  // useContext utilizando o contexto como argumento
  const { toggleTheme, theme } = useContext(myContext);

  return (
    <ContextProvider>
    <div style={theme}>
      <UserInfo />
      <hr />
      <Counter />
      <hr />
      // Aqui o botão chama a função para alterna o theme
      <button style={{ padding: "8px 12px" }} onClick={toggleTheme}>
        {" "}
        Toggle Theme
      </button>
    </div>
    </ContextProvider>
  );
};
export default Consumer;

// Componentes filhos também tem acesso ao objeto de contexto

// Componente Counter
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button> |{" "}
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
};

// Componente UserInfo
const UserInfo = () => {
  const { user } = useContext(myContext);
  return (
    <>
      <strong>User: {user.name}</strong>
    </>
  );
};
```
No Componente **Consumer** assim como em seus filhos é possível acessar os dados/funções disponibilizadas pelo contexto criado, ainda sendo possível desestruturar o objeto retornado obtendo apenas as informações necessária para cada componente.

Isso concede uma legibilidade e ajuda na manutenção do código pois em caso de alterações no código o contexto isola determinadas lógicas que sao consumida por inúmeros componentes.

Obrigado por ler!

---

> Documentação Oficial: [Context](https://pt-br.reactjs.org/docs/context.html) | [useContext](https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext)

---
<h4> <em> Me Sigam :) </em> </h4>
[Github](https://github.com/nascimento-dev-io) | [Linkedin](https://www.linkedin.com/in/nascimento-dev-io/)