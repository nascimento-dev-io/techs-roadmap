## React - O que é JSX

JSX é uma sintaxe de extensão JavaScript usada no React para escrever facilmente HTML e JavaScript juntos.

```jsx
const jsx = <h1>Isso é JSX</h1>
```

Este é um código JSX simples em React. Mas o navegador não entende esse JSX porque não é um código JavaScript válido. Isso ocorre porque estamos atribuindo uma tag HTML a uma variável que não é uma string.

Então, para convertê-lo em código JavaScript compreensível pelo navegador, usamos uma ferramenta como o **Babel** , que é um compilador/transpilador JavaScript.

JSX geralmente é retornado de um função/componente, no entanto por debaixo dos panos o Babel transforma o código utilizando a função `` React.createElement() ``, veja o exemplo abaixo.

```jsx
// JSX
return <h1>Isso é JSX</h1>

// Após transpile
return React.createElement('h1', null, 'Isso é JSX')
```

### O que é a função React.createElement?

Cada JSX é convertido para a função React.createElement para que o navegador entenda.

O **React.createElement** tem a seguinte sintaxe:

```jsx
React.createElement(type, [props], [...children])
```
Os parâmentros são:

 - **type** pode ser uma tag HTML como h1, div ou pode ser um componente React.
- **props** são os atributos que você quer que o elemento tenha.
- **children** contêm outras tags HTML ou podem ser um componente.

A **React.createElement** também será convertida para a representação de objeto assim:

```js
{   
 type: 'h1',   
 props: {     
   children: 'Isso é JSX'   
 }
}
```
> É possível visualizar esse objeto no console atribuindo o JSX numa varíavel.

Outro exemplo de JSX dessa vez com atributo id;

```jsx
// Jsx
<h1 id="jsx">Isso é JSX</h1>

// Após transpile
React.createElement("h1", { id: "jsx" }, "Isso é JSX");
```
Se houver algum atributo adicionado à tag HTML como no nosso caso, eles serão passados ​​como o segundo parâmetro para a **React.createElement**. A representação do objeto ficará assim:

```jsx
{ 
  type: 'h1', 
  props: { 
   id: 'jsx',
   children: 'Isso é JSX'
  } 
}
```

Agora, vamos adicionar alguma complexidade ao JSX para ver como ele é convertido para a **React.createElement**.

```jsx
<button id="btn" onClick={handleClick}>
        Clique aqui
</button>
```
- Aqui, adicionamos uma função para o evento onClick ao botão.

Para o código acima, o **React.createElement** ficará assim:
```jsx
React.createElement("button", {
  id: "btn", 
  onClick: function() {}
}, "Clique aqui")
```

Portanto, de todos os exemplos acima, fica claro que o JSX é convertido em uma função **React.createElement** e, em seguida, convertido em sua representação de objeto.

Utiliza esse [site](https://babel-repl-clone.vercel.app/) para escrever JSX e ver sua transformação em **React.createElement**.


### Como retornar múltiplos JSX

Quando precisamos retornar mais de um elemento em um componente esses precisam ter um tag pai, do contrário o React retornará um erro, você pode corrigir isso envolvendo os elementos com um tag div ou pode utilizar o ``React.Fragment`` ou simplesmente ``<> </>`` com isso evita o acréscimo de divs desnecessárias na DOM.

Exemplos:

```jsx
  // errado
  ...
  return (
        <p>Esse é um elemento JSX!</p>
        <p>Esse é outro elemento JSX!</p>
    );

  // certo
  ...
  return (
    <div>
      <p>Esse é um elemento JSX!</p>
      <p>Esse é outro elemento JSX!</p>
    </div>
  );

  // certo
  ...
  return (
    <React.Fragment>
      <p>Esse é um elemento JSX!</p>
      <p>Esse é outro elemento JSX!</p>
    </React.Fragment>
  );

   // certo
  ...
  return (
    <>
      <p>Esse é um elemento JSX!</p>
      <p>Esse é outro elemento JSX!</p>
    </>
  );

  ```

  > Os fragmentos permitem agrupar uma lista de filhos sem adicionar nós extras na DOM.

  ### Como adicionar comentários ao código JSX

  Comentários em código JSX se da pelos caracteres ``{/* ... */}``.

  Exemplo:

  ```jsx
  // expressão JSX comentada

  { /* <p>Esse é um elemento JSX!</p> */}
  ```

  ### Como adicionar código JavaScript em JSX
  Códigos JavaScript dentro do JSX é necessário o uso de chaves, isso concede muito poder pois possibilita inclusão de string, números, funções, iteração com lista para renderização de componentes.

  ```jsx
  // adicionando um variável
  ...
  const number = 32;

  return <p>Número: {number}</p>
  ```
  Existem algumas coisas que não podem ser usadas em uma expressão JSX.

  - Um loop for ou while ou qualquer outro loop
- Uma declaração de variável
- Uma declaração de função
- Uma condição if
- Um objeto

Arrays podem ser renderizado quando seu itens não são objetos, porque com objetos não fica claro o que deve ser exibido na interface, porém é possivel iterar para exibir propriedade de um objeto.

> Valores booleanos precisam ser envolvido em template literal para que seja exibido em tela.

### Operadores condicionais em expressões JSX

Não podemos escrever condições if em expressões JSX. Mas o React nos permite escrever operadores condicionais, como operadores ternários, bem como o operador lógico de curto-circuito como &&:

Exemplo:

```jsx
...
const showText = true;

let a = 3, b = 8;

// Ternário
<p>{a > b ? 'Maior' : 'Menor'}</p>

// Curto-Circuito
<p>{showText && 'Mostrar'}</p>
```

### Como aninhar expressões JSX

Você pode até fazer o aninhamento de expressões JSX assim:

```jsx
...
const number = 10;

  return (
    <div>
      {number > 0 ? (
        <p>Número {number} é positivo.</p>
      ) : (
        <p>Número {number} é negativo.</p>
      )}
    </div>
  );
```

### Como adicionar uma classe em JSX

Podemos adicionar atributos aos elementos JSX, por exemplo ide class, da mesma forma que em HTML.

```jsx
...
  const id = "some-id";
  return (
    <div>
      <h1 id={id}>Titulo</h1>
      <h2 className="active">Sub Titulo</h2>
    </div>
  )
```
Alguns atributos precisam ser diferentes do HTML padrão pois são palavras reservadas no JS, como **class** que precisa ser substituida por **className**, **for** é outro exemplo, consulte [aqui](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes) os atributos suportados pelo React.

## Conclusão

O JSX é uma sintaxe que a príncipio contradiz com o que estamos acostumado com o padrão de organização de código em VanillaJS, pois mistura marcação com scripts, minupuladores de eventos,porém com o tempo você se familiariza com essa forma de codar e ver o quanto isso é poderoso em React.

> Baseado no post - [JSX in React – Explained with Examples](https://www.freecodecamp.org/news/jsx-in-react-introduction/)

> Veja também: [React – O Roadmap]()

> [Documentação Oficial - Introduzindo JSX ](https://pt-br.reactjs.org/docs/introducing-jsx.html)

>  *Este post tem como objetivo ajudar quem esta começando no aprendizado de React, além de servir como incentivo no meus estudos de React criando outros posts pra fixação do aprendizado.*


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









