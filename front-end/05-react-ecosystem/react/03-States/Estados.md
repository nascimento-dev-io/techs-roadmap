## React - O que são Estados

O estado permite gerenciar dados alterados em uma aplicação, em React podemos usar estados em componentes de classe e também em componentes funcionais através da API de Hooks. 

React atualiza a interface sempre que um estado é alterado, isso faz com que o componente seja renderizado novamente assim como seus filhos, porém devido a virtual DOM o React  alterar apenas o que precisa ser modificado, assim tornando essas alterações performática na manipulação da DOM.

> Exemplos serão usando componentes de função devido ser a forma mais utilizada.

Vamos ao exemplo para entender melhor:

```jsx
...
const Counter = () => {

  let counter = 0;

  function handleClick(){
    counter++;
    console.log(counter);
  } 

  return (
   <>
      <div>
        Contador: {counter}
      </div>
      <button onClick={handleClick}>Incrementar</button>
   </>
  )
}
```

Aqui temos um componente que renderiza um contador, atribuimos um botão para incrementar esse contador através do clique, porém ao clicar no botão você vai peceber que a variável é atualizada no console e o contador não atualiza em tela. 
Isso ocorre porque o React so renderiza novamente o compoennte após atualização em algum estado.

Vamos ver como corrigir isso usando o hook ``useState()`` para manipular o contador.

```jsx
import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // let counter = 0;

  function handleClick(){
   setCounter(counter + 1)
    console.log(counter);
  } 

  return (
   <>
      <div>
        Contador: {counter}
      </div>
      <button onClick={handleClick}>Incrementar</button>
   </>
  )
} 
```

Aqui substituimos a variável counter e usamos o state do React, o **useState** retorna um array onde o primeiro item é a variável que armazena o estado ( que pode ser de vários tipos, como string, número, array, objeto e etc) e o segundo é uma função que altera esse estado, dessa forma ao clicar no botão a interface será atualizada corrigindo o que ocorria anteriormente.

> Você pode definir um valor inicial do estado na inicialização do useState(initialValue).

> Não é possivel alterar o estado diretamente, você tem acesso ao valor anterior para gerar um estado atualizado.

Vamos entender o uso do **useState**:

- Para usar o hook **useState**, precisamos importá-lo como fizemos na primeira linha.
- Dentro do componente Counter, estamos chamando **useState** passando **0** como valor inicial e usando a sintaxe de desestruturação. 
- Armazenamos os valores de array retornado por **useState** dentro das variáveis **counter** e **setCounter**.
- É uma convenção comum prefixar o nome da função usado para atualizar o estado com a palavra **set** como em **setCounter**.
- Quando clicamos no botão de incremento, estamos definindo uma função **handleClick** e chamando a **setCounter** passando o valor do contador atualizado.
- Observe que como já temos o valor do contador, usamos isso para incrementar o contador usando setCounter(counter + 1).

Também é possivel passar uma função como parâmentro do **useState**, essa função tem acesso ao valor anterior do estado, use quando o novo valor depender da manipulação do último do estado.

```jsx
...
useState((prevState) => prevState + 1)
```

O estado e a função podem ser passadas via **props** para outros componentes filhos que dessa forma consegue realizar alterações tambén nesse estado para variadas finalidades.

> A função que manipula o estado é assíncrona, é importante se atentar a isso para evitar comportamentos indesejados no uso do estado.

## Conclusão

O uso de estados em React é o que dita as modificações na interface do usuário, sempre que precisamos manipular algum dado que será exibido em tela ou alguma informação que possa alterar o estado da aplicação, seja aparência, cor, alterações de modo geral utilizamos esse hook, na API de Hook existem outras funções que serão abordado em post futuro.


> Baseado no post - [How State Works in React – Explained with Code Examples](https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/)

> [Documentação Oficial - Estado e Ciclo de Vida](https://pt-br.reactjs.org/docs/state-and-lifecycle.html)

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





