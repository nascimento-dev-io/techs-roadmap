## React router DOM

React router DOM é uma biblioteca que lida com rotas em React/React-Native, em uma app SPA ( single Page Application ) sua principal característica é ao alternar entre views/página não o recarregamento, isso melhora o desempenho e experiência do usuário, essa lib lida então com as rotas, url, rotas aninhadas e disponibiliza também hooks para facilitar o acesso a algumas informações da rota e também com redirecionamento de forma programática.

> Os exemplos serão feito utilizando a versão 6.

### Instalação

Após iniciar um projeto com um template como o [CRA](https://create-react-app.dev/), vamos instalar o react router dom.

```bash
yarn add react-router-dom
```
### Principais componentes
Vamos conhecer os principais componentes que usamos para criar as rotas:

- `BrowserRouter` é a interface recomendada para executar o React Router em um navegador da web. A **BrowserRouter** armazena a localização atual na barra de endereços do navegador usando URLs limpas e navega usando a pilha de histórico integrada do navegador.
- `<Routes>`e `<Route>` são as principais maneiras de renderizar algo no React Router. Você pode pensar em uma `<Route>`como uma espécie de **if**; se o **path** corresponder ao URL atual, ele renderizará seu **element**. A prop **caseSensitive** `<Route caseSensitive>` determina se a correspondência deve ser feita com distinção entre maiúsculas e minúsculas (o padrão é false).

- Sempre que a localização muda, `<Routes>`examina todos os seus children <Route>elementos para encontrar a melhor correspondência e renderiza essa ramificação da interface do usuário. 
- `<Route>` os elementos podem ser aninhados para indicar a interface do usuário aninhada, que também corresponde a caminhos de URL aninhados. As rotas pai renderizam suas rotas filhas renderizando um arquivo <Outlet>.
- `Link` é um elemento que permite ao usuário navegar para outra página clicando ou tocando nela. Em react-router-dom, a `<Link>`renderiza um elemento acessível `<a>` com um real **href** que aponta para o recurso ao qual está vinculando. Isso significa que coisas como clicar com o botão direito em um `<Link>` funciona como você esperaria.
- `<Outlet/>` deve ser usado em elementos de rota pai para renderizar seus elementos de rota filho. Isso permite que a interface do usuário aninhada apareça quando as rotas filhas são renderizadas. Se a rota pai corresponder exatamente, ela renderizará uma rota de índice filho ou nada se não houver nenhuma rota de índice.

### Criando o componente de rotas
Como exemplo básico vamos criar 3 páginas e definir as rotas, uma dessas página é a de não encontrado, quando uma url não existe na app,

*Vamos criar um arquivos para definir as rotas*
```jsx
//  routes.js
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export const RoutesApp = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};
```
Aqui temos um arquivo **routes.js** onde importando os componentes ja citados para criar a definição das rotas, temos também o importe dos arquivos de pages que são as view que serão renderizado de acordo com a rotas, **'/ '** página `Home`, **'/about '** página `About` e no caso de nenhuma **path** dê match com os definidos a página `NotFound` será exibido.


### Adicionando um menu de navegação
Agora vamos criar um menu para alternar entre as páginas, o menu sera criado em um componente principal, que poderia ser o `App`que ja vem criado no template, esse componente precisa ser de hierarquia superior do aplicativo.

```jsx
//  RoutesExample.js
import { BrowserRouter, Link } from "react-router-dom";
import { RoutesApp } from "./routes";

export const RoutesExample = () => {
  return (
    <BrowserRouter>
      <header>
        <nav className="nav-routes">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/asdf">Other</Link>
            </li>
          </ul>
        </nav>
      </header>
      <RoutesApp />
    </BrowserRouter>
  );
};
```
Aqui temos o componente de maior hierarquia da App, definimos então o **BrowserRouter** como wrapper, criamos um menu que possui os **Link** que define na props **to** o recurso que deve ser acessado, nesse caso as páginas **Home**, **About** e uma que não existe ( **NotFound** ).

> *resultado do exemplo*:
[ aqui ](https://ik.imagekit.io/Nscmnt/React_App_-_26_May_2022_E1ZBDrgwO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1653580993302)

### Rotas aninhadas ( nested routes )

Podemos criar rotas dentro de rotas, para isso precisamos criar filhos para uma determinada rota, onde esse componente possuir rotas internas, precisamos também fazer uso do `<Outlet/>` para indicar onde os elementos das sub-rotas irão ser renderizado no componente pai.

*Vamos entender:*

```jsx
// routes.js
...
 <Route path="/about" element={<About />}>
  <Route path="route-a" element={<SubRouteA />} />
  <Route path="route-b" element={<SubRouteB />} />
</Route>
```

Dentro do arquivo routes criamos sub-rotas para a rota **About**, `<SubRouteA />` e  `<SubRouteA />` são pages ou componentes ( também importando em routes ), nesse caso criei 2 páginas simples, apenas informando que aquele é a sub-rota correspondente, usei uma animação apenas para melhora a visualização da alteração das rotas.

No componente **About** criamos os **Link** com as rotas correspondente e logo abaixo inserimos o `<Outlet/>` que define onde essa sub-rota irá renderizar.

*Dessa forma:*
```jsx
// About.js
...
<nav>
  <Link to="route-a">Sub-rota a</Link> |
  <Link to="route-b">Sub-rota a</Link>
</nav>
<Outlet />
</>
```

> *resultado do exemplo*:
[ aqui ](https://www.loom.com/share/995b22012f4b4440ab9f12e359e456af)

### Rotas privadas
Para criar rotas privadas criamos um componente que checa se um usuário esta logado, e caso esteja retorna o componente desejado do contrário o usuário pode ser redirecionado a página de login por exemplo.

```jsx
// ProtectedRoute.js
import React from "react";

export const ProtectedRoute = ({ children }) => {
  // lógica para checar usuário logado
  const logged = true;

  return logged ? children : <p>Você não esta logado</p>;
};
```
No exemplo o componente `<ProtectedRoute>` retorna o **children** que é um componente definido como filho no arquivo de rotas, veja o exemplo abaixo:

```jsx
...
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```
Adicionamos esse código no arquivo de rotas e temos então um rota que so sera acessado caso o **ProtectedRoute** retorne **true** em sua lógica para identificar se um usuário esta logado, geralmente validando algum token no localStorage.

### Principais hooks do react-router-dom
A lib disponibiliza alguns hooks para lidar com redirect, parâmetro da URL, o history do navegador entre outros, vamos conhecer os principais.

- **useLocation** retorna o objeto location atual. Isso pode ser útil se você quiser realizar algum efeito colateral sempre que a localização atual mudar.
- **useNavigate**  retorna uma função que permite navegar programaticamente, por exemplo, após o envio de um formulário.
- **useParams** retorna um objeto de pares de chave/valor dos parâmetros dinâmicos da URL atual que foram correspondidos pelo `<Route path>`. As rotas filhas herdam todos os parâmetros de suas rotas pai.

Conhecemos então o essencial da lib que é a mais utilizada junto ao React com a finalidade de roteamento, com esses conhecimentos temos o básico necessário para lidar com rotas, sinta-se a vontade a explorar a documentação oficial para ter informações mais aprofundadas e conceitos avançados.

**Obrigado por ler!**

---
> Documentação Oficial - [Tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial) 

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






