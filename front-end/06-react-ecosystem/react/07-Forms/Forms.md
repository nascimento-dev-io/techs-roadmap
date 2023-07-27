## React - Formulários

Em React formulários podem e normalmente são controlados com [states](./../00-code-examples/src/examples/Estados.js), isso concede um poder maior sobe manipulação de eventos (onChange, onSubmit) e controle sobre seus valores, pois o react se torna a única 'fonte de verdade', form que são manipulados com estados em react são chamados de **( controlled component )**.

*Vamos ao exemplos de formulários controlados*

### Input
```jsx
import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    console.log(name)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};
```

- 1 - Criamos um estado para armazenar e atualizar o **name**.
- 2 - Controlamos o **input** setando seu **value** com o estado **name**.
- 3 - No **onChange** atualizamos o **value** através da função **setName**.
- 4 - No **onSubmit** temos acesso ao estado **name** para manipulação.

Então entendemos que dessa forma temos maior controle sobe o estados dos componentes de formulários, e sua manipulação posteriormente podemos ter validações e tratamento desses valores. 

Na sequência vamos ver os principais elementos de formulário e como manipulamos com o react.


### Select

Em React, em vez de usar o atributo **selected** para definir o valor selecionado, usa-se um atributo **value** na raiz da tag select. Isso é mais conveniente em um componente controlado, porque você só precisa atualizá-lo em um só lugar.

```jsx
  <select value={language} onChange={(e) => setLanguage(e.target.value)}>
    <option value="javascript">Javascript</option>
    <option value="c#">C#</option>
    <option value="python">Python</option>
  </select>
```
> Você pode passar um array para o atributo value, permitindo que você selecione várias opções em uma tag select:

```jsx
<select multiple={true} value={['B', 'C']}>
```


### Checkbox

O elemento checkbox pode ter seu estado manipulando utilizando o atributo **checked** setando a ele uma condição que retorne um booleano baseado no estado que pode ser um booleano simples, ou uma condição mais complexa quando existir múltiplas escolhas.

```jsx
<input
  type="checkbox"
  checked={checkedBoolean}
  onChange={() => setCheckedBoolean(!checkedBoolean)}
/>
checkbox
```

### Radio

O elemento radio por ser de escolha única, podemos comparar o atributo checked com o estado atual.

```jsx
<label>
  <input
    type="radio"
    name="gender"
    value="masculino"
    checked={gender === "masculino"}
    onChange={({ target }) => setGender(target.value)}
  />
  Masculino
</label>

<label>
  <input
    type="radio"
    name="gender"
    value="feminino"
    checked={gender === "feminino"}
    onChange={({ target }) => setGender(target.value)}
  />
  Feminino
</label>
```
### File Input

Em HTML, o `<input type="file">` permite ao usuário escolher um ou mais arquivos de seu dispositivo para serem enviados para um servidor.
Como seu valor é de somente leitura, ele é um componente não controlado do React.

Você pode criar um estado para armazenar o objeto [File](https://developer.mozilla.org/pt-BR/docs/Web/API/File/Using_files_from_web_applications) ou um array dependendo da necessidade, e utilizar esse estado em alguma lógica na interface e envio para o servidor.

### Textarea

O **Textarea** no react possui um atributo **value** para que seja manipulado, o que o torna muito semelhante ao elemento input.

```jsx
<textarea 
  value={description} 
  onChange={(e) => setDescription(e.target.value)} 
/>
```

### Manipulando Múltiplos Inputs

Quando você precisa manipular múltiplos inputs controlados, você pode adicionar um atributo ***name*** a cada elemento e deixar a função manipuladora escolher o que fazer com base no valor de **event.target.name**.

*Exemplo*
```jsx
function handleInputChange(event) {
  const { target } = event;
  const { type, name, value } = target;

  if (type === "checkbox") {
    const drinks = formData.drinks || [];

    if (target.checked) {
      const drinksUpdated = [...drinks, value];

      setFormData({ ...formData, [name]: drinksUpdated });
      return;
    }

    const drinksUpdated = drinks.filter((drink) => drink !== value);

    setFormData({ ...formData, [name]: drinksUpdated });
    return;
  }

  setFormData({
    ...formData,
    [name]: value,
  });
}
```
Existem várias formas de criar lógica para esse tipo de caso, tornando-o menos ou mais flexível, esse é apenas um exemplo simplificado.

Geralmente usamos lib's para manipulação e validação de formulário em React, tais como [formik](https://formik.org/docs/overview), [react-hooks-form](https://react-hook-form.com/), [Yup](https://github.com/jquense/yup) entre outras.

Bom por hoje é isso, temos então uma introdução a formulários em React para começar a construir nossas aplicações.

**Obrigado por ler.**

---


> Documentação Oficial - [Formulários](https://pt-br.reactjs.org/docs/hooks-intro.html) 

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





