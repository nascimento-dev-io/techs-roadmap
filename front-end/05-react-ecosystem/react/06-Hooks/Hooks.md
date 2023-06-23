## React - O que são Hooks

Hooks é a uma API React que tornou possível a criação de componentes funcional, antes apenas classes podiam armazenar estados. React disponibiliza uma API com funções que podemos usar para criar estados, gerenciar ciclo de vida do componentes e outras finalidades, veremos de forma básica característica e uso dos principais hooks utilizados no dia a dia.

### Regras dos hooks

- Apenas chame Hooks no nível mais alto. 
- Não chame Hooks dentro de loops, condições ou funções aninhadas.
- Apenas chame Hooks de componentes funcionais. 
- Não chame Hooks em funções JavaScript comuns ou classes.

> Documentação Oficial: [Regras dos Hooks](https://pt-br.reactjs.org/docs/hooks-rules.html)

## Utilizando os hooks

Os hooks são sempre importando do React no inicio do seu código com a seguinte sintaxe.

```jsx
import { useState, useEffect, useContext, useReducer, useCallback } from 'react';
```

### useState

O **useState** é o hook mais comum e utilizado gerenciar estado em componentes funcionais.
O useState recebe um parâmetro ( ou função ) que defini o valor inicial do estado, o seu retorno é um array onde a primeira posição é o estado e o segundo é uma função que é usada para atualizar o estado, por convenção utilizamos o prefixo **set** seguido do nome do estado para nomear essa função.

Exemplo de utilização do **useState**:

```jsx

// 1 - importa o hook.
import React, { useState } from 'react'

const Counter = () => {
 //  2 - Usa destructuring para pega os retorno do hook e setando 0 como valor inicial.
  const [counter, setCounter] = useState(0);

  // 3 - Uso do estado para renderizar o número na UI.
 // 4 - Utilizando o evento onClick chamando a função setCounter 
  para incrementar o contador ( state ).
  return (
   <>
      <div>
        Contador: {counter}
      </div>
      <button onClick={setCounter(counter + 1)}>Incrementar</button>
   </>
  )
} 
```

A função de atualização do estado pode receber uma função como argumento e essa função tem acesso ao valor do estado anterior para realizar alguma atualização baseado nele.

Exemplo:
```jsx
setState((prevState) => !prevState);
```

> !Importante - **setState** pode ser assíncrona pois ela agenda uma re-renderização.

É possível usar mais de um estado no componente, para isso apenas repita a chamada do **useState** atribuindo nomes as variáveis e funções de forma coerentes com suas atribuições, pois isso ajuda na legibilidade e manutenção do código.

Estado em react esta ligado a renderização da UI é importante o entendimento desse hook e uso junto a outros que serão estudados posteriormente.

---

> Documentação Oficial: [Usando o State do Hook](https://pt-br.reactjs.org/docs/hooks-state.html)

---

### useEffect

O **useEffect** é o hook utilizado no **lifecycle** do componente, ele não possui retorno e é usado para realizar "efeito colaterais" geralmente baseado em atualização de estado/props.

Em sua chamada são necessário 2 parâmetros, um função de efeito, e uma array de dependências, sempre que uma ou mais dessas dependências é alterada a função de efeito é executada novamente.

Entendendo o uso:
```jsx
...
const UserInfo = (props) => {

  useEffect(() => {
    console.log(`ID do usuário alterado para ${props.userID}`)
  },[props.userID])

}
```
Em toda mudança no userID o useEffect é executado novamente, no caso de chamada **async** é necessário criar uma nova função interna executando-a na sequência ou usando IIFE.

```jsx
...
const UserInfo = (props) => {

  useEffect(() => {
    async function loadUserData(){
      await services.getUserByID(props.userID);
    }

    loadUserData()
  }, [props.userID])

  useEffect(() => {
    console.log(`ID do usuário alterado para ${props.userID}`)
  },[props.userID])
}
```

> Caso queira chamar o **useEffect** apenas uma vez no **mount** do componente deixe o array de dependências vazio.

> Se não declara o array, o hook será executado em toda nova renderização do componente.

Os exemplos anteriores cobrem os casos de **montagem** e **atualização** do componente, existe também a fase de desmontagem, o **useEffect** pode ser utilizado nessa fase também e um caso comum é remover **eventListeners**.

```jsx
...
const App = () => {

  function handleScroll(event){
    console.log("Window Scroll...", event)
  }

  useEffect(() => {
    // cria o eventListener assim que o componente é montado.
    document.addEventListener("scroll", handleScroll);

    // remove o eventListener quando componente é desmontado.
    return () => removeEventListener("scroll", handleScroll);
  })
}
```

No exemplo estamos tratando o caso de **unmount** do componente, a função de retorno indica ao React que uma 'limpeza' precisa ser feita, nesse caso remover o **eventListener** e isso evita memory leak. Saber lidar com uso correto de dependências e o ciclo de vida dos componentes evita bugs e otimiza a aplicação.

---

> Documentação Oficial: [Usando Effect Hook](https://pt-br.reactjs.org/docs/hooks-effect.html)

---


### useCallback

O **useCallback** serve para memorizar funções e
prevenir que elas sejam recriadas a cada novo render do componente.

> Recebe como argumentos, um **callback** e um **array de dependências**. 

O **useCallback** retornará uma versão memoizada do callback que só muda se uma das entradas sejam alteradas. Isto é útil quando utilizamos callbacks a fim de otimizar componentes filhos, que dependem da igualdade de referência para evitar renderizações desnecessárias.

```jsx
const callbackMemoizado = useCallback(() => {
    //  faça algo
  },[{/* dependências*/}]);
```
No caso de um componente filho execute essa função sem o uso do **useCallback**, isso fará com que ela seja recriada e assim renderiza novamente o componente pai e também o componente filho mesmo que esse não precise ser renderizado novamente pois não possui atualização do seu estado.

Vamos ao exemplo prático.

```jsx
...
export const Parent = () => {
  const [state, setState] = useState(0);

  console.log("RE-RENDER PARENT");

  // Não há alteração referencial enquanto não existir alteração nas dependências. 
  const handleClick = useCallback(() => {
    setState((prevState) => prevState + 1);
  }, []);

  return (
    <div>
      <div>{state}</div>
      <Child onClick={handleClick}>
    </div>
  );
};

// Child apenas será re-renderizado quando a referência do callback muda.

const Child = React.memo(({ onClick }) => {

  console.log("RE-RENDER CHILD");

  return <button onClick={onClick}>Incrementar</button>;
});

```

Temos 2 componentes **Parent** e o **Child**, a função de callback do evento é memoizada, sendo assim não é recriada a cada novo render do Parent, e como o Child esta dentro de um [React.Memo](https://pt-br.reactjs.org/docs/react-api.html#reactmemo), enquanto suas props não forem 'alteradas' esse componente não será renderizado de forma desnecessária.

---

> Documentação Oficial: [useCallback](https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback)

---

### useMemo

O **useMemo** é utilizado para realização de cálculos caros em novas renderizações, ele é semelhante ao **useCallback** porém retorna a execução da função e não a função memoizada.

```jsx
const ValorMemoizado = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
Sua sintaxe é igual ao useCallback, é fornecido uma função e um array de dependências como argumentos, a diferença é que o **useMemo** irá executar essa função e seu valor será memoizado, sendo executada novamente apenas quando existir alterações em suas dependências.

Vamos ao exemplo:

```jsx
...
export const Memo = () => {
  const [value, setValue] = useState(Math.PI);
  const [name, setName] = useState("");

  const valueMemoizado = useMemo(() => {

    console.log("Memo recalculado");

    return value * 1000000e+1000;

  }, [value]);

  return (
    <>
      {/* Aqui o cálculo do valor memoizado é refeito */}
      <div>
        <div>{valueMemoizado}</div>
        <button onClick={() => setValue((prevValue) => prevValue * 100e+100)}>
          Calcular
        </button>
      </div>

      {/* Aqui o cálculo se mantém o mesmo e o cálculo não é refeito*/}
      <div>
        <div>{name}</div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </>
  );
};

```

Como demonstra o exemplo, existe uma melhoria de performance com o **useMemo** evitando recalcular sempre o **value** mesmo que esse não tenha sido alterado.

---

> Documentação Oficial: [useMemo](https://pt-br.reactjs.org/docs/hooks-reference.html#usememo)

---

### useReducer

O Reducer é uma alternativa ao **useState**. useReducer é geralmente preferível em relação ao useState quando se tem uma lógica de estado complexa que envolve múltiplos sub-valores, ou quando o próximo estado depende do estado anterior. 

Sintaxe:
```jsx
  const [state, dispatch] = useReducer(reducer, initialArg, init);
```

**useReducer** retorna um array com 2 posições, são elas:
- **state** é o estado a ser manipulado.
- **dispatch** função que é chamada com parâmetros que aciona a **reducer**.

Recebe os seguintes argumentos:
- **reducer** função reducer do tipo (state, action) => newState e retorna o estado atual.
- - **state** estado atual.
- - **action** geralmente um objeto passado na chamada da função dispatch.
- **initialArgs** valor inicial do state.
- **init** é um argumento opcional, uma função que retorna o state inicial.

Vamos a um exemplo substituindo o **useState** do componente Counter e inserindo um estado de clique que adiciona a quantidade de cliques ( independente se incrementar ou decrementar ).

```jsx

// Criando argumentos do useReducer
const initialValue = {
  counter: 0,
  clicks: 0,
};

function init(initialValue) {
  return {
    counter: initialValue.counter,
    clicks: 0,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };

    case "minus":
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };

    default:
      return state;
  }
}
```
Essas são os argumentos do hook **useReducer**, na função **reducer** utilizamos a **action** para baseado no tipo realizar um determinado processamento, nesse caso 'plus' para somar e 'minus' para subtrair.

Vamos agora ver o componente Counter e a utilização do hook.

```jsx
  ...
  const Counter = () => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialValue, init);

  return (
    <>
      <p>{state.counter}</p>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={() => dispatch({ type: "plus" })}>+</button> |{" "}
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
    </>
  );
};
```
A função **dispatch** é chamando no evento de clique, passando então um objeto com o tipo da operação que será tratado na **reducer**.

---
> Documentação Oficial: [useReducer](https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer)
---

### useRef

O **useRef** possibilita o acesso a elemento da DOM através de sua referência, dessa forma você pode manipular esse elemento de forma imperativa, dando um focus, blur e acessando o diretamente.

Para ter o acesso ao elemento você atribui o **useRef** a uma variável e a inicializa com o argumento do hooks. Em seguida você atribui essa variável ao atributo *ref* do elemento.

*Exemplo*:
```jsx
...
const RefExample = () => {
  const inputRef = useRef(null);
  
  return <input ref={inputRef} />;
};
```

Um vez com a referência do elemento podemos acessar o elemento através da propriedade *current* da **inputRef**.

```jsx
...
const RefExample = () => {
  const inputRef = useRef(null);

  function handleClick(){
    console.log(inputRef.current.value);
  }
  
  return(
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Mostra Valor</button>
    </div>
  );
};

```
No exemplo ao clicar no botão o *value* do input é mostrado no console, e assim você pode acessar qualquer outra propriedade do elemento e manipular conforme desejado.

> O valor de current é mutável e não altera durante novas renderização, suas alteração também não causa uma nova renderização no componente.

---

> Documentação Oficial: [useRef](https://pt-br.reactjs.org/docs/hooks-reference.html#useref)

---


### useImperativeHandle

O **useImperativeHandle** possibilita o uso do **ref** em componentes, isso significa que podemos utilizar essa referência para fazer uso de código imperativo. O **useImperativeHandle** deve ser usado com [**forwardRef**](https://pt-br.reactjs.org/docs/react-api.html#reactforwardref).

A  função **forwardRef** recebe a função/componente filho como argumento e esse tem acesso ao **ref** como seu segundo parâmetro `(props, ref)` esse parâmetro é utilizado como argumento inicial do hook **useImperativeHandle**, seu segundo argumento é uma função que retorna um objeto com propriedades/métodos ficarão disponível ao componente pai, e como último argumento o array de dependências.

> Código imperativo deve ser evitado, sendo usado apenas em casos muito específicos.

*Exemplo 01*

```jsx
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandleExample = () => {
  const formRef = useRef(null);

  function handleSubmit() {
    formRef.current.submit();
  }

  return (
    <>
      <Form ref={formRef} />
      <button onClick={handleSubmit}>Enviar</button>
    </>
  );
};
```
Aqui temos um componente pai fazendo uso de um componente filho ( `<Form />`) esse por sua vez possui a propriedade **ref**, em seguida temos um botão que ao ser clicado chamar a função **handleSubmit** que executa uma função submit definida no objeto **current** da referência do componente.

*Agora vamos ver como é o código do Form*:

```jsx
...
const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        submit() {
          alert(inputRef.current.value);
        },
      };
    },
    []
  );

  return (
    <form>
      <input ref={inputRef} type="text" />
    </form>
  );
});
```

O componente **Form** por sua vez faz uso do **forwarRef** para receber a **ref** passada, e como dito anteriormente a utilização do **useImperativeHandle** utiliza essa **ref** como primeiro argumento, a função como segundo define um método submit (que é chamada no pai no evento de click ) e essa função emite um **alert** com o valor do input que nesse caso também foi obtido pela referência.

*E assim fica o código inteiro*:

```jsx
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandleExample = () => {
  const formRef = useRef(null);

  function handleSubmit() {
    formRef.current.submit();
  }

  return (
    <>
      <Form ref={formRef} />
      <button onClick={handleSubmit}>Enviar</button>
    </>
  );
};

const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        submit() {
          alert(inputRef.current.value);
        },
      };
    },
    []
  );

  return (
    <form>
      <input ref={inputRef} type="text" />
    </form>
  );
});

export default UseImperativeHandleExample;
```
---
> Documentação Oficial: [useImperativeHandle](https://pt-br.reactjs.org/docs/hooks-reference.html#useimperativehandle)

---

> [Documentação Oficial - Introdução aos Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) | [API de Referência dos Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html#basic-hooks)

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








