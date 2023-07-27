## React - Estilização

Estilização em react pode ser feita de algumas formas, cada uma possui suas vantagens e desvantagens, no artigo vamos abordar as formas básicas sem uso de bibliotecas.

> O código do exemplo é obter o resultado abaixo:

![paragraph](https://ik.imagekit.io/Nscmnt/article_sQGB00Z1p.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652560827747)

### CSS Puro
É possível estilizar com arquivos `.css` de forma global ou em componentes com estilizações específicas, isso pode melhorar a manutenção porém podemos ter problemas de especificidade do css em aplicações maiores.

*Exemplo simples do uso de CSS Puro*

```css
/* styles.css */
.container {
  max-width: 800px;
  width: 100vw;
  height: 100vh;

  margin: 0 auto;
  font-family: 'Roboto', sans-serif;

  background-color: #2F3D40;
  color: #f5f5f5;

  padding: 16px;
}

.article-title {
  text-align: left;

  font-size: 1.2rem;
}

.paragraph {
  background-color: #3D5A73;
  padding: 12px;

  line-height: 1.5;
  border-radius: 6px;

  word-wrap: wrap;
}
```
Criamos um arquivo **styles.css** separado do componente, que pode estar em um pasta específica para estilos ou junto no mesmo diretório do arquivo do componente. 

Para que esses estilos sejam definido no componente precisamos primeiro realizar a importação e adicionar no atributo `className` do JSX as classes criadas com as regras css.

*Exemplo de uso no componente*

```jsx
import React from "react";

import "./styles.css";

export const StylesExample = () => {
  return (
    <div className="container">
      <h2 className="article-title">Article title</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio
        voluptates omnis, molestiae ad doloremque dicta eveniet natus numquam
        impedit id, nam deleniti sint asperiores iure quam nobis eos a. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sit odio voluptates
        omnis, molestiae ad doloremque dicta eveniet natus numquam impedit id,
        nam deleniti sint asperiores iure quam nobis eos a. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sit odio voluptates omnis,
      </p>
    </div>
  );
};
```

### CSS Modules

Outra forma de realizar estilização em React é via **css modules**, para utilizarmos criamos um arquivo com extensão `.module.css` e esse quando importando retorna um objeto com as classes definidas no módulo, utilizamos de forma parecida com css puro, porém por se tratar de um objeto adicionamos com `{}` no atributo **className**.

Essas classes são transformadas em classes únicas no build, o que torna o css com escopo local, isso resolve problemas relacionados a conflitos na estilização.

*Exemplo com a utilização de CSS Modules*

```jsx
...
import styles from "./styles.module.css";

export const StylesExample = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.article_title}>Article title</h2>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio
        voluptates omnis, molestiae ad doloremque dicta eveniet natus numquam
        impedit id, nam deleniti sint asperiores iure quam nobis eos a. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sit odio voluptates
        omnis, molestiae ad doloremque dicta eveniet natus numquam impedit id,
        nam deleniti sint asperiores iure quam nobis eos a. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sit odio voluptates omnis,
      </p>
    </div>
  );
};
```

O arquivo de css é igual ao anterior com a exceção de não ser possível utilizar hífen na criação das classes css pois essas serão transformadas em propriedades de objeto, nesse caso podemos utilizar **_** ou **camelCase**.

### CSS Inline

Podemos utilizar o atributo **style** dos elementos para utilizar css inline, para isso passamos um objeto com as regras css utilizando **camelCase**.

```jsx
...
export const StylesExample = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        width: "100vw",
        height: "100vh",

        margin: "0 auto",
        fontFamily: "'Roboto', sans-serif",

        backgroundColor: "#2F3D40",
        color: "#f5f5f5",

        padding: "16px",
      }}
    >
      <h2
        style={{
          textAlign: "left",
          fontSize: "1.2rem",
        }}
      >
        Article title
      </h2>
      <p
        style={{
          backgroundColor: " #29383b",
          padding: "12px",

          lineHeight: 1.5,
          borderRadius: "6px",

          wordWrap: "wrap",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio
        voluptates omnis, molestiae ad doloremque dicta eveniet natus numquam
        impedit id, nam deleniti sint asperiores iure quam nobis eos a. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sit odio voluptates
        omnis, molestiae ad doloremque dicta eveniet natus numquam impedit id,
        nam deleniti sint asperiores iure quam nobis eos a. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sit odio voluptates omnis,
      </p>
    </div>
  );
};
```
É possível criar um objeto fora do componente e inserir no **style** semelhante ao css modules, porém essa é a forma menos usada e aqui esta apenas como mais uma forma de uso.

Geralmente em React usamos outras formas de estilização quando estamos falando de grandes aplicações e os mais comum são o conceito de CSS in JS como [styled components](https://www.styled-components.com/) e bibliotecas de estilização como [tailwindCSS](https://tailwindcss.com/) entre outras.

---


> Veja também : [O que são módulos CSS e por que precisamos deles?](https://css-tricks.com/css-modules-part-1-need/) | [Estilização em React](https://pt-br.reactjs.org/docs/faq-styling.html) | [As 5 melhores libs de UI para React | by Maycon Alves - Medium](https://medium.com/reactbrasil/as-5-melhores-libs-de-ui-para-react-75d9570123eb)

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
