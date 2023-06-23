## React - O que são custom Hooks

É possível criar seus próprios hooks, os Custom Hooks é uma forma de extrair lógica de um componente em funções reutilizáveis.

> Por convenção o nome dado a um custom hook se inicia com a palavra **use**.

O custom hook segue as mesma [regras dos hooks](https://pt-br.reactjs.org/docs/hooks-rules.html) e dentro de um hook customizado usamos outros hooks e é isso que o torna tão poderoso, compartilhar lógica e manipular ciclos de vida de forma totalmente isolado com o hooks ja conhecidos torna o código mias legível.

*Vamos ao exemplo de um custom hook de fetch.*

```jsx
...
const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(false);

        const response = await fetch(url);
        const data = await response.json();

        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};
```

No exemplo temos um custom hook simples que realiza um **fetch** recebendo a **url** do endpoint como argumento e retornando um objeto com informações que são:

- **loading** para utilizamos um elemento de loading enquanto a resposta não chega.
- **error** caso exista erros no retorno do endpoint e tratar isso na UI.
- **data** dados retornado para manipulação na UI.

*Vamos agora ver a sua utilização.*

```jsx
import React from "react";

const CustomHookExample = () => {
  const { data, error, loading } = useFetch(
    "https://api.github.com/users/nascimento-dev-io"
  );

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Erro ao buscar usuário</div>;
  }

  return <div> User: {data.name}</div>;
};
```

Aqui temos um componente usando o **useFetch** para consumir a API do github e retornar dados de um user, no componente tratamos então os casos de **loading** e **erro** assim como o retorno em tela do nome do **usuário** nesse caso.

*Vamos então ao código completo.*

```jsx
import React, { useEffect, useState } from "react";

const CustomHookExample = () => {
  const { data, error, loading } = useFetch(
    "https://api.github.com/users/nascimento-dev-io"
  );

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Erro ao buscar usuário</div>;
  }

  return <div> User: {data.name}</div>;
};


// Custom Hook
const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(false);

        const response = await fetch(url);
        const data = await response.json();

        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};
```

Então percebemos que uma vez que você aprende a utilizar bem os hooks, eles concedem um poder muito grande no desenvolvimento em React, use sua imaginação para criar custom hooks conforme sua necessidade, nesse [Site com Hooks Personalizados](https://usehooks.com/ ) você encontra código de custom hooks para as mais variadas finalidade.

> Geralmente criamos um pasta *hooks* para organização do código.

**Obrigado por ler!**

---


> Documentação Oficial - [Introdução aos Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) | [API de Referência dos Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html#basic-hooks) | [Custom Hooks](https://usehooks.com/ )

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
