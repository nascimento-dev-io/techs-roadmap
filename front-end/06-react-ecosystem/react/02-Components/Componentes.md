## React - O que são Componentes

Componente é uma função que retorna JSX ( que ja foi abordado nesse post ( link ) ) ou outros componentes, as principais vantagens são inerente a funções, ou seja, reutilização, abstração e evitar redudância de códigos, e podem ser criados com **function declaration**, **function expression**, **arrow function** e também métodos quando usando **class components**.

React é baseado em componentes, tudo é componente, uma página web é uma coleção de componentes.

> Exemplos serão usando arrow function. 

Exemplo:

```jsx
import React from 'react'

const Componente = () => {
  return (
    <div>Componente</div>
  )
}

export default Componente;
```

O nome da função da nome ao componente, e esse pode ser reutilizados quantas vezes for necessário, sua utilização é usando a sintaxe ``<Componente/>`` que é equivalente também a ``<Componente></Componente>`` que é o uso mais comum.

Exemplo: 

```jsx
...
  export const Home = () => {

  return (
    <>
      <Componente />
      <Componente />
      <Componente />
    </>
  )
}
```

No exemplo o componente ``Home`` esta reutilizando o ``Componente`` três vezes que por sua vez pode ser reutilizando quantas vezes for necessário, assim são criados componentes aninhados criando a interface desejada.

> Por convenção os nomes dos componentes começam com a letra maiúscula, isso os diferencia das tag's normais e de outros componentes.

React disponibiliza o componente ``<App/>`` que normalmente é utilizado como 'nó' raiz, onde todos os demais são filhos direto ou indireto desse, que por sua vez é 'injetado' no HTML através do método **render** do [``ReactDOM``](https://pt-br.reactjs.org/docs/react-dom.html).

Os componentes são dispostos na ordem em que devem aparecer na página, vamos ver um exemplo de componentes que formaria uma página.

```jsx
export const Home = () => {
  return (
    <>
      <Header/>
      <NavBar/>      
      <Carrousel/>
      <Componente/>
      <Componente/>
      <Footer />
    </>
  )
}
```

Os Componentes podem receber parâmentros chamados **props** que é um objeto que contém os atributos passados na chamada do componente, isso deixa-o com maior flexibilidade na sua reutilização, é possivel também o uso de **estados** para gerenciar ciclos de vida do componente, esses assuntos serão abordados em post's seguintes.

> Todo componente tem de forma nativa uma propriedade chamada children que é todo elemento ou compomente que seja adicionado entre a abertura ``<Componente>`` {children} ``</Componente>`` e fechamento do componente.


Exemplo:

```jsx
...
const Card = (props) => {
  
  return (
    <div>
      {props.children}
    </div>
  )
}

// Componente <Profile/> é o children de <Card/>
...
const Container = (props) => {
  
  return (
    <Card>
     <Profile/>
    </Card>
  )
}


```


## Conclusão
Componentes é a base do React, com eles podemos reutilizar muito código e 'quebrar' a aplicação em partes menores, assim aumentando a manutenabilidade e produtividade, com isso temos o necessário sobre componentes para começar a criar nossos app.


> Baseado no post - [React.js Basics – The DOM, Components, and Declarative Views Explained](https://www.freecodecamp.org/news/reactjs-basics-dom-components-declarative-views/)

> [Documentação Oficial - Componentes e Props](https://pt-br.reactjs.org/docs/components-and-props.html)

> Veja também: [React - O que é JSX](https://dev.to/nascimento_/react-o-que-e-jsx-3032)

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





