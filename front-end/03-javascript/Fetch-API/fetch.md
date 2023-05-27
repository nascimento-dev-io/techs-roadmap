## Fetch

A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global `fetch()` que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

Este tipo de funcionalidade era obtida anteriormente utilizando [XMLHttpRequest](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest). Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.

### Fazendo as requisições Fetch

O fetch retorna uma **Promise** e podemos utilizar encadeamentos para transformação da response e tratamento de de erros.

```js
fetch('url')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
```

- O método `fetch()` pode receber um segundo parâmetro opcional, que consiste em um objeto init que permite setar várias configurações tais como: headers, method, body...

```js
const myHeaders = new Headers();

const myInit = { method: 'GET', headers: myHeaders, mode: 'cors', cache: 'default' };

fetch('url', myInit)
  .then(function (response) {
    return response.blob();
  })
  .then(function (myBlob) {
    // ..
  });
```

Uma promise `fetch()` será rejeitada com um `TypeError` quando um erro de rede é encontrado, embora isso geralmente signifique problemas de permissão ou similar — um **404** não constitui um erro de rede, por exemplo. Uma verificação precisa de um `fetch()` bem-sucedido incluiria a verificação de que a Promise foi resolvida e, em seguida, a verificação de que a propriedade `Response.ok `tem o valor de **true**.

- Para maiores detalhes sobre [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) e seu uso consulte a documentação.
