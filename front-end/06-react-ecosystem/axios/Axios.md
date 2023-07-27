## React - Manipulando dados com Axios

Aprender a realizar chamadas a API's é algo crucial, pois a maioria das aplicações irão se comunicar com um backend para mostrar informações, realizar autenticações, validações, etc. Uma das formas mais usadas pra isso é o [Axios](https://axios-http.com/ptbr/docs/intro).

### O que é Axios?

Axios é uma biblioteca cliente HTTP baseado **promises** para nodejs e browser, se utilizando de API como **XMLHttpRequest** do browser e **http** do nodejs. 

Entre suas vantagens estão:
- Facilidade na manipulação de JSON ( menos código ).
- Funções que correspondem aos métodos HTTP ( get, post, delete...).
- Pode ser usando tanto no cliente como no servidor.

### Instalação

Se você tem um projeto React existente, você só precisa instalar o Axios com npm (ou qualquer outro gerenciador de pacotes):

```bash
npm install axios
```

Vamos realizar os exemplos de uso do axios junto com a [JSON Placeholder API](https://jsonplaceholder.typicode.com/guide/) para obter e alterar dados de postagem.

### Realizando solicitações GET

Para realizar uma solicitação de recursos ao servidor utilizamos o método HTTP GET, aqui temos um exemplos simples.

```jsx
import React, { useEffect, useState } from "react";

import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export function Post() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/1`).then(({ data }) => setPost(data));
  }, []);

  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
```
Utilizamos os hooks **useState** para armazenar o retorno da API e o **useEffect** usamos para realizar a chamada assim que o UI for montada, utilizamos então o método **GET** da importação do **Axios** no inicio do arquivo para realizar a chamada a API e retornar um post que é armazenado na variável **post** através do **setPost** no método **then** que possui acesso a resposta da API.

O **response** retorna um objeto que possui a propriedade **data** que nesse caso é um objeto com **id**, **title**, **body** e **userId**, utilizamos então o **title** e **body** do post para montar o post em tela.

### Realizando solicitações POST

Para realizar criação de recursos no servidor utilizamos o método **POST**, vamos criar um exemplo de criação de um novo post.

> O endpoint para criar um novo post é **/post** informando o **title** e **body** na requisição.

```jsx
...
function handleCreatePost() {
    axios
      .post(baseUrl, {
        title: "Titulo do Post",
        body: "Esse é um novo post e foi criado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => setPosts(data));
  }

  return (
    <div className="container">
      <h1>Postagens</h1>
      <hr />
      {posts ? (
        <>
          <h2 className="post-title">{posts.title}</h2>
          <p className="post-body">{posts.body}</p>

          <div className="container-crud-btns">
            <button onClick={handleCreatePost} className="post-btn">
              Create post
            </button>

            <button onClick={handleUpdatePost} className="post-btn">
              Update post
            </button>
          </div>
        </>
      ) : (
        <h2 className="post-title">Nenhum Post Disponível</h2>
      )}
    </div>
  );
```

O axios como dito anteriormente possui funções com o nome dos métodos http, nesse caso utilizamos a função `post()`, para realizar a criação de um novo post, adicionamos um botão e no evento **onClick** é chamada a função **handleCreatePost** que faz a requisição de criação do post.

Na função `post()` do axios passamos o endpoint **/posts** e como segundo argumento é passado um objeto que contém o **title** e o **body** do post, o retorno da API ( `.then()`) é o post criado que armazenamos no estado **posts**

> Apenas para finalidade estética adicionei um h1 e hr para melhor a apresentação em tela.

### Realizando solicitações PUT

Para realizar um atualização de recursos no servidor utilizamos o método **PUT**, vamos criar um exemplo de criação de um novo post.

```jsx
...
  function handleUpdatePost() {
    axios
      .post(baseUrl, {
        title: "Novo Titulo do Post",
        body: "Esse é um novo post e foi atualizado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => setPosts(data));
  }

  return (
    <div className="container">
      <h1>Postagens</h1>
      <hr />
      {posts ? (
        <>
          <h2 className="post-title">{posts.title}</h2>
          <p className="post-body">{posts.body}</p>

          <div className="container-crud-btns">
            <button onClick={handleCreatePost} className="post-btn">
              Create post
            </button>

            <button onClick={handleUpdatePost} className="post-btn">
              Update post
            </button>
          </div>
        </>
      ) : (
        <h2 className="post-title">Nenhum Post Disponível</h2>
      )}
    </div>
  );
```
Muito parecido com o exemplo do método **Post**, adicionamos um novo botão e criamos a função **handleUpdatePost** que realiza a atualização, a função `put()` da mesma forma que a `post()` recebe o endpoint ( que nesse caso precisa do **id** do post a ser atualizado) e retorna no **then** o post atualizado que mais uma vez adicionamos no estado **posts**.

### Realizando solicitações DELETE

Para realizar uma exclusão de recursos no servidor utilizamos o método **DELETE**, vamos criar um exemplo de remoção do post.

```jsx
...
function handleDeletePost() {
    axios.delete(`${baseUrl}/1`).then(() => {
      alert("Post deleted!");
      setPosts(null);
    });
  }

  return (
    <div className="container">
      <h1>Postagens</h1>
      <hr />
      {posts ? (
        <>
          <h2 className="post-title">{posts.title}</h2>
          <p className="post-body">{posts.body}</p>

          <div className="container-crud-btns">
            <button onClick={handleCreatePost} className="post-btn">
              Create post
            </button>

            <button onClick={handleUpdatePost} className="post-btn">
              Update post
            </button>

            <button onClick={handleDeletePost} className="post-btn">
              Delete post
            </button>
          </div>
        </>
      ) : (
        <h2 className="post-title">Nenhum Post Disponível</h2>
      )}
    </div>
  );
}
```
No caso do **delete** criamos também um novo botão e uma função **handleDeletePost** que realiza a remoção do post com **id** especificado, no retorno **then** não existe dados porém é importante para garantir que a solicitação foi realizada com sucesso.

Para atualizar a interface setamos o estado **posts** com **null** que com a tratativa do código será retornado um mensagem de  'Nenhum Post Disponível'.

### Lidando com erros no Axios

Se ocorrer um erro na solicitação seja por envio de dados errado, falha de rede, endpoint errado, esse é tratado na função **catch()**, esse tem acesso ao erro de retorno e esse pode ser atribuído a um estado para ser tratado na UI.

```jsx
...
 axios
  .put(`${baseUrl}/1`, {
    title: "Novo Titulo do Post",
    body: "Esse é um novo post e foi atualizado em um exemplo de uso do axios, não é incrível?",
  })
  .then(({ data }) => setPosts(data))
  .catch((error) => setError("error" + error));
```

### Criando uma instância do Axios

Com axios podemos criar uma instância com a **baseURL** da API com a função `create()`, além de outros valores que você pode especificar a cada solicitação como **headers**.

```js
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});

// uso
client.get("/post").then()
```
Quando chamamos a **client** é retornada uma instância com a **baseURL** definida, nesse caso no parâmetro passamos apenas a rota desejada, exemplo `/` | `/post`, etc.

### Usando async - await com Axios

**Async-await** permite que você escreva um código muito mais limpo sem as funções **then** e **catch** para retorno. Além disso, o código com async-await se parece muito com o código síncrono e é mais fácil de entender.

*Exemplo da função do useEffect usando async - await*
```js
...
useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(`${baseUrl}/1`);

        setPosts(response.data);
      } catch (error) {
        setError(error);
      }
    }

    getPosts();
  }, []);
```
Para que seja possível usar **async await** é necessário criar uma função nomeada **getPosts()** nesse caso e chamando-a logo na sequência, pode ser uma **IIFE**, utilizamos o **try catch** dentro a função para capturar possíveis erros.

  #### Fluxo async await:
  - Declaração da função com a palavra **async** ( possibilita o uso so await dentro dela ).
  - O **await** aguarda o retorno de um promise ( axios retorna sempre um promise das requisições ).
  - Apenas após o retorno do **await** a próxima linha será executada.
  - O **try e catch** nesse caso é usado para tratar erros na requisição.

> O Async Await deixa o código limpo e pode ser usado com **axios** com facilidade.

### Criando o Custom Hook useAxios

Custom hooks são utilizado para retirar lógicas que podem ser reutilizados em componentes diferentes, aqui o intuito é apenas mostrar que podemos deixar o componente **Post** mais limpo e deixar toda lógica de requisição no hook **useAxios**, nele lidamos também com outro estados, o **loading** que serve para lidar com um elemento de carregamento na tela.

*Exemplo de código para useAxios*

```js
import { useEffect, useState } from "react";

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const useAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get(`/1`);

        setData(response.data);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  function handleCreatePost() {
    setLoading(true);
    setError(null);

    api.post("/", {
        title: "Titulo do Post",
        body: "Esse é um novo post e foi criado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => setError("error" + error));
    setLoading(false);
  }

  function handleUpdatePost() {
    setLoading(true);
    setError(null);

    api.put(`/1`, {
        title: "Novo Titulo do Post",
        body: "Esse é um novo post e foi atualizado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => setError("error" + error));
    setLoading(false);
  }

  function handleDeletePost() {
    setLoading(true);
    setError(null);

    api.delete(`/1`)
      .then(() => {
        alert("Post deleted!");
        setData(null);
      })
      .catch((error) => setError("error" + error));
    setLoading(false);
  }

  function handleError() {
    setLoading(true);
    setError(null);

    api.get(`/asdf`)
      .then(({ data }) => setData(data))
      .catch((err) => {
        setData(null);
        setError("error" + err);
      });
    setLoading(false);
  }

  return {
    data,
    error,
    loading,
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
    handleError,
  };
};
```
Esse hook é mais especifico para nosso exemplo de post mais poderia ser o mais genérico possível recebendo a url como parâmetro, com lógicas mais robusta, mas para o exemplo esse serve.

Então além dos dados retornados pelos **states** podemos também retorna funções que lida com o CRUD, isso deixa nosso componente **Post** muito mais limpo e melhora a manutenção.

*Código completo do nosso exemplo*

```jsx
//  Componente Post - Sem utilizar o useAxios
import React, { useEffect, useState } from "react";

import axios from "axios";

import "./Post.css";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export function Post() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(`${baseUrl}/1`);

        setPosts(response.data);
      } catch (error) {
        setError(error);
      }
    }

    getPosts();
  }, []);

  function handleCreatePost() {
    axios
      .post(baseUrl, {
        title: "Titulo do Post",
        body: "Esse é um novo post e foi criado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => setPosts(data))
      .catch((error) => setError("error" + error));
  }

  function handleUpdatePost() {
    axios
      .put(`${baseUrl}/1`, {
        title: "Novo Titulo do Post",
        body: "Esse é um novo post e foi atualizado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => setPosts(data))
      .catch((error) => setError("error" + error));
  }

  function handleDeletePost() {
    axios
      .delete(`${baseUrl}/1`)
      .then(() => {
        alert("Post deleted!");
        setPosts(null);
      })
      .catch((error) => setError("error" + error));
  }

  function handleError() {
    axios
      .get(`${baseUrl}/asdf`)
      .then(({ data }) => setPosts(data))
      .catch((err) => {
        setPosts(null);
        setError("error" + err);
      });
  }

  return (
    <div className="container">
      <h1>Postagens</h1>
      <hr />
      {posts ? (
        <>
          <h2 className="post-title">{posts.title}</h2>
          <p className="post-body">{posts.body}</p>

          <div className="container-crud-btns">
            <button onClick={handleCreatePost} className="post-btn">
              Create post
            </button>

            <button onClick={handleUpdatePost} className="post-btn">
              Update post
            </button>

            <button onClick={handleDeletePost} className="post-btn">
              Delete post
            </button>

            <button onClick={handleError} className="post-btn">
              Error post
            </button>
          </div>
        </>
      ) : (
        <h2 className="post-title">Nenhum Post Disponível</h2>
      )}
      {error && <p>Ocorreu na requisição: {error}</p>}
    </div>
  );
}
```
Com o hook useAxios.
```jsx

// Componente Post - Utilizando o useAxios
import React from "react";

import "./Post.css";
import { useAxios } from "./useAxios";

export function PostUseAxios() {
  const {
    data,
    error,
    loading,
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
    handleError,
  } = useAxios();

  if (loading)
    return (
      <div className="container">
        <h1>Postagens</h1>

        <p>Carregando...</p>
      </div>
    );

  return (
    <div className="container">
      <h1>Postagens</h1>
      <hr />
      {data ? (
        <>
          <h2 className="post-title">{data.title}</h2>
          <p className="post-body">{data.body}</p>

          <div className="container-crud-btns">
            <button onClick={handleCreatePost} className="post-btn">
              Create post
            </button>

            <button onClick={handleUpdatePost} className="post-btn">
              Update post
            </button>

            <button onClick={handleDeletePost} className="post-btn">
              Delete post
            </button>

            <button onClick={handleError} className="post-btn">
              Error post
            </button>
          </div>
        </>
      ) : (
        <h2 className="post-title">Nenhum Post Disponível</h2>
      )}
      {error && <p>Ocorreu na requisição: {error}</p>}
    </div>
  );
}
```
Basicamente para utilizar o **useAxios** apenas o importamos no arquivo e utilizamos chamando a função `useAxios` desestruturando seu retorno que é um objeto contendo os dados e funções sobre o post.

*E esse é o resultado em tela*
> O CSS foi omitido pois não era o foco do post.

![paágina co posts](https://ik.imagekit.io/Nscmnt/CPT2205161812-630x350_MwV9uxzvV.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1652735776969)

Uffa !! o artigo ficou um pouco grande porém é o essencial sobre manipulação/requisições que precisamos ter para trabalhar com **axios**.


---

> Baseado no post : [How To Use Axios With React: The Definitive Guide (2021)](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)

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


