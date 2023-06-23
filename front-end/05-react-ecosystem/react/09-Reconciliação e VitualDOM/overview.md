## Virtual DOM | Algoritmo de reconciliação | Performance

O React se utiliza do conceito de **virtual DOM** junto com um **algoritmo de reconciliação** para realizar atualizações na interface. O React atualiza a UI de forma otimizada alterando apenas o que realmente foi modificado, mas como isso ocorre ? vamos lá.

### Virtual DOM

O virtual DOM (VDOM) é um conceito de programação onde uma representação ideal, ou “virtual”, da interface do usuário é mantida em memória e sincronizada com o DOM “real” por uma biblioteca como o [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html). 

A virtual DOM possui todos os nós da DOM renderizado em tela e utilizar o algoritmo de diferenciação para realizar atualizações pontuais na interface, isso permite a API declarativa do React com manipulação de *states* e o ganho de performance na manipulação do DOM 'real'.

### Algoritmo de reconciliação

O React provê uma API declarativa, ou seja, informamos o que muda e não como muda, isso é responsabilidade interna do React que se utiliza do algoritmo de *diffing* para realizar as atualização em tela.

Sempre que existir alterações em estados ou props o react atualiza/recria a virtual DOM e compara com a DOM 'real' para que as alterações sejam feita, isso se da a nível de atributos, mesmo que dois elementos sejam iguais e apenas algum de seus atributos tenha sido mudado o React sabe que apenas aquele atributo precisa ser alterado na DOM do navegador.

```jsx
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```
O react através do algoritmo de diferenciação consegue identificar exatamente o que foi alterado e realiza as atualizações apenas na classe.

Quando o react realiza comparação em elementos filhos como de uma lista é importante utilizar o atributo **key** com identificação única, isso ajuda o react a identificar mudanças e melhora o desempenho, evitando também problemas de renderizações caso esses elementos são reordenados.

### Fluxo de renderização
De forma forma básica o fluxo de re-renderizações em React ficaria desta forma:

- O React possui o DOM Virtual ( cópia do DOM em tela ) em memória.
- Quando um componente é atualizado, um novo DOM Virtual é criado.
- Então é feita uma comparação pelo Algoritmo de Diferenciação. Essa comparação é realizada em memória, dessa forma o componente ainda não foi atualizado na DOM.
- Após a comparação, o React cria um novo DOM Virtual com as alterações necessárias.
- Em seguida, ele atualiza o DOM do navegador com o **menor número** possível de alterações **sem renderizar todo o DOM** novamente. Isso melhora drasticamente a performance da aplicação.

![algoritmo de diffing](https://ik.imagekit.io/Nscmnt/diffing_23wDS_57K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652968270453)

Entender como funciona o fluxo de renderização e o algoritmo de *diffing* ajuda em debug e melhoria de performance em aplicações React.

### Melhorando a performance com memo, useMemo e useCallback

Como vimos entender sobre o fluxo de renderização no react pode nos ajudar a melhorar a performance de uma aplicação em determinados casos, o que significa que podemos impedir que componentes não entre no fluxo de criação de uma nova virtual DOM para realizar o *diff* caso um condição não seja satisfeita.

As funções **memo**, **useMemo** e **useCallback** existem com essa finalidade, cada uma com suas particularidade e caso de uso, vamos entender com exemplos como isso funciona.

***Exemplo - Componente ListItems***

```jsx
import React, { memo, useCallback, useMemo, useState } from "react";

let count = 0;

export const ListItems = () => {
  const [items, setItems] = useState([]);
  const [itemValue, setItemValue] = useState("");

  console.log("RE-RENDER - LIST ITEMS");

  function handleAddItem(e) {
    e.preventDefault();
    setItems([...items, { id: count++, text: itemValue }]);
  }

  const handleRemoveItem = useCallback(
    (id) => setItems((state) => state.filter((item) => item.id !== id)),
    [setItems]);

    const slowCalc = useMemo(() => {
    console.log("useMemo");
    return items.filter((item) => item.text.includes("a")).length;
  }, [items]);

  return (
    <>
      <form onSubmit={handleAddItem}>
        <input
          onChange={(e) => setItemValue(e.target.value)}
          value={itemValue}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
      </ul>
      <p style={{ textAlign: "center" }}>
        Quantidade item que possui a letra ( a ): {slowCalc}
      </p>
    </>
  );
};
```

No nosso exemplo temos um componente `ListItems` que ira renderizar um formulário para adicionar itens a uma lista, temos funções para adicionar e remoção item da lista,  no JSX temos o formulário com input e botão que adiciona o item e a chamada do componente `Items` que sera renderizado assim que adicionamos os items no state **items**, temos o **useCallback** usando na função de remoção do item e para exemplificar o **useMemo** criamos uma variável que simula alguma operação que demandaria muito recursos de processamento, no nosso caso é apenas a contagem de items com possui a letra **a**.

***Exemplo - Componente Item***
```jsx
const Item = memo(({ item, handleRemoveItem }) => {
  console.log("RE-RENDER -  ITEMS");

  return (
    <li key={item.id}>
      {item.text} <button onClick={() => handleRemoveItem(item.id)}>x</button>
    </li>
  );
});
```

O Componente `Items` recebe 2 **props**, o **item** que é um objeto com **id** e **text** e uma função que será utilizada para remover o item, essa recebe o **id** como argumento, o componente então retorna uma `<li>` com o texto inserido no **input** do formulário e um `<button>` que recebe a função **handleRemoveItem** passando o **id** respectivo do item.

Agora que entendemos o nosso exemplo vamos entender para que server e quando usar o **memo, useMemo e useCallback**.

#### memo

O memo é um função que retorna o componente memorizado, isso significa que, caso nenhuma de suas **props** ou **state** seja alterados esse componente não entra no fluxo de renderização do React, no exemplo, temos as props **item** e a função **handleRemoveItem** no componente `Item`, então quando alteramos o **value** do input o **Items** não é alterado porém o componente `ListItems` é re-renderizado e isso altera a referência da função **handleRemoveItem** o que faz o `Item` entra no mesmo fluxo, para resolver isso utilizamos o **useCallback**.

#### useCallback

O useCallback é um hook do React que retorna uma função memorizada, para isso ele recebe a função e um array de dependências como parâmentros, o array define as dependências que fará essa função ser redeclarada ( alterando sua referência ), no nosso exemplo a função **handleRemoveItem** so é redeclarada quando o state **items** for atualizado, isso significa que, quando o state referente ao input é alterado essa função não muda sua referência e assim tanto o **item** quanto **handleRemoveItem** se mantém sem alterações, dessa forma, o componente `Item` não é re-renderizado o que em determinados casos influência na performance da aplicação.

#### useMemo

O useMemo semelhante ao useCallback recebe os mesmo parâmentros ( uma função e seu array de dependências), a diferença é que o useMemo retorna a execução da função memorizada e não a função em si, e essa operação so é refeita quando alguma de sua dependências sejam alterados, em operações que demandaria grandes recursos computacional o useMemo pode fazer a diferença.

> Fiz um post falando sobre esses hooks disponível em [React Hooks](https://dev.to/nascimento_/react-o-que-sao-hooks-parte-02-5535).

---

Nesse [video](https://www.loom.com/share/01843367a5e8422092d11335eafc5647)  você pode perceber quando cada componente e re-renderizado, **useMemo** e o componente **Item** apenas é chamado quando existe alterações no array de dependências.

#### Quando usar desses recursos para melhorar a performance?

É muito importante entender que não devemos usar esses hooks em todos componentes e em qualquer função, pois existe uma comparação que é realizada para seus funcionamento que nem sempre é mais performática que o fluxo normal de renderização.

#### Quando usar o memo ?
- **Componentes Puro** - são componentes que com as mesmas entradas sempre retorna a mesma saida.
- **Re-renders excessivos** - componentes que são re-renderizados muitas vezes sem necessidade ( sem alterações em suas props ).
- **Componentes médios/grandes** - componentes muitos pequenos não afeta a performance da aplicação, em casos de componentes médios para grandes que renderização muita coisa em tela podemos considerar o uso do memo.

#### Quando usar o useMemo ?
- **Cálculos complexos** - use para evitar re-cálculos complexos a cada re-render, em casos de cálculos simples não faz sentido seu uso.

#### Quando usar o useCallback ?
- **Resolver igualdade referencial** - Evitar a função ser recriada a cada re-render, evitando assim componentes childs que use um memo para não renderizar novamente **( useMemo também resolve esse problema )**.

---
A partir de agora temos um bom conhecimento de como funciona o fluxo de renderização React e como usar hooks para melhorar o desempenho da sua aplicação.

Obrigador por ler!

---

> Referencias : [Reconciliação](https://pt-br.reactjs.org/docs/reconciliation.html) | [Fluxo de renderização e o algoritmo de reconciliação — React e React Native](https://medium.com/@hugo.uraga/fluxo-de-renderiza%C3%A7%C3%A3o-e-o-algoritmo-de-reconcilia%C3%A7%C3%A3o-react-e-react-native-61ec42398980) | [Virtual DOM](https://pt-br.reactjs.org/docs/faq-internals.html) | [Video - React - Guia definitivo de performance (useMemo, useCallback, memo) - Code/drops #82 ](https://youtu.be/NmU2nNehNNY)

> Códigos de exemplo: [Repositório - Ecossistema React](https://github.com/nascimento-dev-io/react-ecosystem)

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