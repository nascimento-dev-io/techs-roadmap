## React - O que são Props

Usamos props no React para passar dados de um componente para outro (de um componente pai para um componente filho). Props é apenas uma maneira mais curta de dizer propriedades. Eles são úteis quando você deseja que o fluxo de dados em seu aplicativo seja dinâmico.

Exemplo de um componente App.
```jsx
function App() {
  return (
    <div className="App">
      
    </div>
  )
}
```
Agora vamos criar outro componente para exemplificar com e sem o uso de **Props**.

```jsx

// Componente sem o uso de props - ( dados estáticos )
const SayHello = () => {
  return (
    <div>
      <p>Olá Jorge</p>
    </div>
  )
}

// Utilizando Props para torna o componente reutilizável e dinâmico
const SayHelloWithProps = (props) => {
  return (
    <div>
      <p>Olá {props.name}</p>
    </div>
  )
}

// Adicionando o SayHelloWithProps ao App
const App = () => {
  const name = 'Jorge';

  return (
    <div className="App">
      <SayHelloWithProps name={name}/>
    </div>
  )
}
```
Ao reutilizar o componente **SayHelloWithProps** esse recebe um atributo 'name' que é inserido de forma dinâmica ao componente, o acesso é dado via argumento da função que possui acesso a um objeto **props**.

```jsx
const SayHelloWithProps = (props) => {

  const name = { props }

  return (
    <div>
      <p>Olá {name} {props.lastName}</p>
    </div>
  )
}
```
> Props são somente leitura, não possível atribuir um novo valor, fazendo isso um erro é gerado.

> Você pode usar a desestruturação ( no argumento da função ou no corpo da função ) isso torna o código mais limpo e fácil de entender ou acessar as propriedade com a dot notation.



É possível passar além de dados, funções via **props** e se necessário definir valores padrões para os mesmo.

Exemplo:
```jsx
...
const SayHelloWithProps = ({ name = 'Desconhecido'}) => {
  return (
    <div>
      <p>Olá {name}</p>
    </div>
  )
}
```

As **Props** são o equivalente a argumentos de funções, aceitando variados tipos de dados e funções, use sua criatividade para criar aplicações e usar essa funcionalidade de uma forma que deixe seus componentes mais reutilizaveis.

> Baseado no post - [How to Use Props in React](https://www.freecodecamp.org/news/how-to-use-props-in-react/)

> [Documentação Oficial - Componentes e Props](https://pt-br.reactjs.org/docs/components-and-props.html)

> Veja também: [Aprendendo React - The Roadmap!](https://dev.to/nascimento_/apredendo-react-the-roadmap-5fii) | [React - O que é JSX](https://dev.to/nascimento_/react-o-que-e-jsx-3032) | [React - O que são Componentes](https://dev.to/nascimento_/react-o-que-sao-componentes-40f0) | [React - O que são Estados](https://dev.to/nascimento_/react-o-que-sao-estados-5ben)

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









