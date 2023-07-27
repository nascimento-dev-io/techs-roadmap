## React - Props x States

É importante entender as diferenças entre as **props** e **estados** em React, isso ajuda na forma de pensar a criação de componentes menos complexos e com melhor manutenabilidade, ajuda também em performance com relação a re-renderização dos componentes, esse assunto gera divergências e aqui será abordada para iniciantes no aprendizado de React.

> Posts sobre [**State**](./../03-States/Estados.md) e [**Props**](./../04-Props/Props.md) para melhor entendimento.

A principal responsabilidade de um Componente é traduzir dados brutos em HTML rico. Com isso em mente, as props e o estado juntos constituem os dados brutos dos quais a saída HTML deriva.

Você poderia dizer props + state são os dados de entrada para o _return_ de um Componente, então precisamos ampliar e ver o que cada tipo de dado representa e de onde ele vem.

### O que usar ? Estado ou Props

Se um Componente precisar alterar um de seus atributos em algum momento, esse atributo deve fazer parte de seu estado , caso contrário, deve ser apenas um prop para esse Componente.

#### Props

**Props** (abreviação de propriedades ) é a **configuração** de um Componente. Eles são recebidos de cima ( de componente pai ) e **imutáveis** ​​no que diz respeito ao Componente que os recebe.


### State

O estado começa com um valor padrão quando um Componente é montado e, em seguida, ***sofre mutações no tempo*** **( gerado principalmente a partir de eventos do usuário)**.

Um Componente gerencia seu próprio estado internamente, mas além de definir um estado inicial, não deve mexer no estado de seus filhos. Pode-se dizer que o estado é **privado**.

#### Comparação entre Props e States

|                                                       | _props_ | _state_ |
| ----------------------------------------------------- | ------- | ------- |
| Pode obter o valor inicial do componente pai?         | Sim     | Sim     |
| Pode ser alterado pelo componente pai?                | Sim     | Não     |
| Pode definir valores padrão dentro do Component?      | Sim     | Sim     |
| Pode mudar dentro do Componente?                      | Não     | Sim     |
| Pode definir o valor inicial para componentes filhos? | Sim     | Sim     |

Como o estado aumenta a complexidade e reduz a previsibilidade, é preferível um Componente sem estado . Mesmo que você claramente não possa ficar sem estado em um aplicativo interativo, você deve evitar ter muitos componentes com estado.

#### Tipos de componentes

- **Componente Stateless** — Apenas props , sem estado. Toda a lógica deles gira em torno das props que eles recebem. 
  
- **Componente Stateful** — Ambos props e state. São os que gerenciam os estados . Eles são responsáveis ​​pela comunicação cliente-servidor (XHR, web sockets, etc.), processando dados e respondendo a eventos do usuário. Esse tipo de lógica deve ser encapsulado em um número moderado de Stateful Components , enquanto toda a lógica de visualização e formatação deve ser direcionada para o maior número possível de Stateless Components.

Vejamos um exemplo de componente Pai ( Stateful ) e Filho ( Stateless ), e também diferenças básicas de props e state.

```jsx
...
//  Parent - Stateful Component
const Parent = () => {
  // State criado para manipular entrada do input
  const [text, setText] = useState("");

  const handleChange = (e) => {
    // State é mutável - altera ao digitar do usuário 
    // A função setText é usada para atualização do estado.
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={text} onChange={handleChange} />
      </form>
      {/* text é a Props passando o State */}
      <Child text={text} />
    </div>
  );
};

```
Agora vamos ver um componente filho que não possui estado, usa as props passadas pelo pai para renderizar o estado exibindo o que esta sendo digitado no input.

```jsx
...
// Child - Stateless Component
const Child = (props) => {
  // error: props são readOnly
  const newText = (props.text = "New Value");

  // O Componente filho re-renderiza em toda alteração de sua Prop
  return <div>{props.text}</div>;
};

```
Existem formas de evitar re-renderização no caso de não acontecer mudanças em props sendo esse um assunto mais avançado, a documentação oficial do React disponibiliza  uma forma de pensar criação de componentes, ao final deixarei algumas fontes de consultas.

---


> Baseado no post - [uberVU/react-guide](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

> [Documentação Oficial - Pensando do jeito React](https://pt-br.reactjs.org/docs/thinking-in-react.html#:~:text=Para%20tornar%20sua%20UI%20interativa,N%C3%A3o%20repita%20a%20si%20mesmo) | [State dos Componente](https://pt-br.reactjs.org/docs/faq-state.html)


>  <sub>*Este post tem como objetivo ajudar quem esta começando no aprendizado de React, além de servir como incentivo no meus estudos de React criando outros posts pra fixação do aprendizado.* </sub>


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
