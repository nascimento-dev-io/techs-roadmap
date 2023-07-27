## DOM - Document Object Model

O Modelo de objeto de documento ( DOM ) é uma **API** para manipular árvores DOM de documentos HTML e XML ( entre outros documentos semelhantes a árvores ). Esta API está na raiz da descrição de uma página e serve como base para scripts na web.

A Árvore DOM é um _estrutura da árvore_ cujos nós representam o conteúdo de um documento HTML ou XML. Cada documento HTML ou XML possui uma representação em árvore DOM.

Por exemplo, considere o seguinte documento:

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

Possui uma árvore DOM que se parece com isso:

![dom tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_Document_Object_Model/using_the_w3c_dom_level_1_core-doctree.jpg)

Quando um navegador analisa um documento HTML, ele cria uma árvore DOM e a usa para exibir o documento.

### O que a API do documento faz?

A API do documento, também chamada de API DOM, permite modificar uma árvore DOM em do jeito que você quiser. Ele permite criar qualquer documento HTML ou XML do zero ou alterar qualquer conteúdo de um determinado documento HTML ou XML. Os autores da página da Web podem editar o DOM de um documento usando JavaScript para acessar o propriedade `document` do objeto global.

### Principais métodos

Vamos listar os principais métodos utilizados para acessar criar e manipular nós do nosso documento HTML.

#### Acessando elementos HTML

A API de seletores fornece métodos que tornam rápido e fácil a recuperação de nós na DOM combinando com um conjunto de seletores. Isso é muito mais rápido que as técnicas anteriores, nas quais era necessário, por exemplo, usar um loop no código JavaScript para localizar os itens específicos que você precisava encontrar.

- [QuerySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)

Retorna a primeira correspondência do nó dentro da subárvore do nó. Se nenhum nó correspondente for encontrado, **null** é devolvido.

```js
const element = document.querySelector('selector');
```

- [QuerySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)

Retorna um **NodeList** contendo todos os nós correspondentes dentro da subárvore do nó ou um `NodeList` vazio se nenhuma correspondência for encontrada.

```js
const elements = document.querySelectorAll('selector');
```

> Utilizamos lista de [seletores](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) Css para acessar o(s) elementos desejados.

### Criando elementos

A DOM API fornece métodos para criar elementos, nós de texto entre outros através do `document`.

- `createElement()` - o método `Document.createElement()` cria o elemento HTML.

```js
const element = document.createElement('nomeDaTag');
```

- `createTextNode()` - o método `Document.createTextNode()` cria um nó de texto.

```js
const textNode = document.createTextNode('texto');
```

### Adicionando elemento a DOM

- `append()` - O método `Document.append()` insere um conjunto de Node ou de string após o último filho do documento. String são inseridos como equivalentes nós Text.

```js
const text = document.createTextNode('texto');

document.append(text);
```

**_Existem outras formas de manipulação da DOM como adicionando valorem direto em propriedade do elemento e outras funções para adicionar e acessar atributos veja [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) para saber propriedades e métodos disponíveis para o documento HTML._**

### Eventos

Eventos são coisas que acontecem no sistema que você está programando — o sistema produz ( ou "incêndios" ) um sinal de algum tipo quando ocorre um evento, e fornece um mecanismo pelo qual uma ação pode ser executada automaticamente ( ou seja, algum código executando ) quando o evento ocorre. Os eventos são disparados dentro da janela do navegador e tendem a ser anexados a um item específico que reside nele. Pode ser um único elemento, um conjunto de elementos, o documento HTML carregado na guia atual ou a janela inteira do navegador. Existem muitos tipos diferentes de eventos que podem ocorrer.

Por exemplo:

- O usuário seleciona, clica ou paira o cursor sobre um determinado elemento.
- O usuário escolhe uma tecla no teclado.
- O usuário redimensiona ou fecha a janela do navegador.
- Uma página da web termina de carregar.
- Um formulário é enviado.
- Um vídeo é reproduzido, pausado ou termina.
- Ocorre um erro.

Para reagir a um evento, você anexa um **manipulador de eventos** para isso. Este é um bloco de código ( geralmente uma função JavaScript que você, como programador, cria ) que é executada quando o evento é acionado. Quando esse bloco de código é definido para ser executado em resposta a um evento, dizemos que estamos **registrando um manipulador de eventos**.

Exemplo de evento ( 'click' ) associado a um botão no documento.

```js
// HTML
<button>Click me!</button>;

// js
const btn = document.querySelector('button');

btn.addEventListener('click', () => console.log('botão foi clicado'));
```

O HTML `<button>` acionará um evento quando o usuário clicar no botão.

Então definimos o método `addEventListener()`, passando dois parâmetros:

- A string "click", para indicar que queremos ouvir o evento de clique.
- Uma função para chamar quando o evento acontecer ( essa função recebe um [objeto de evento](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects) como parâmetro)

Podemos também adicionar uma função diretamente nas propriedades da referencia do elemento que adicionam ouvidores de eventos tais como: `btn.onclick`, `btn.onmouseover` ...

Com as propriedades do manipulador de eventos, você não pode adicionar mais de um manipulador para um único evento. Por exemplo, você pode ligar addEventListener('click', handler) em um elemento várias vezes, com diferentes funções especificadas no segundo argumento.

> Também é possível adicionar manipuladores de eventos a atributos no elemento html, porém essa é uma forma mais antiga de se utilizar.

- Maiores detalhes sobre [Eventos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) na documentação.
