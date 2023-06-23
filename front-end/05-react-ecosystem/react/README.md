## React

React é uma biblioteca de código aberto para criação de interfaces de usuários, 
é baseada em JavaScript e foi desenvolvida inicialmente pelo Facebook e posteriormente teve seu código aberto.

> Vamos abordar os principais tópicos para se tornar um desenvolvedor React. 

### O que aprender antes de iniciar no React

React é baseado em JavaScript, você precisa estar familiarizado a base de JS além de outras tecnologias que vão impulsionar seu aprendizado na lib.
  

### HTML

O HTML é a linguagem de marcação que fornece a estrutura de uma página da web. Em React é utiliza o o JSX que é uma sintaxe similar ao HTML para criação dessa estrutura. É importante esta familiarizado com a linguagem, **tags**, **semânticas** e **acessibilidade**.

 - [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

### CSS

CSS é a linguagem de estilização que possui um escopo muito extenso, é importante aprender principais conceitos como **Seletores**, **Box Model**, **FlexBox**, **Grid**, **Positions**, **Units**...

 - [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

### Javascript
JavaScript é a linguagem por trás do React, logo você precisar entender alguns conceitos importantes da linguagem para ter uma curva de aprendizagem menor, e ter uma conhecimento base para aprendizado de outras lib's quando for necessário.

 - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

### Git - Github

Git é uma ferramenta de controle de versão que ajuda você a gerenciar melhor seu código-fonte, aprender o básico da ferramenta é muito importante para o ecossistema de desenvolvimento, junto ao git é igualmente importante aprender sobre hospedagem/compartilhamento em nuvem do seu código nesse caso o github é o mais popular.

 - [Git - Github](https://git-scm.com/doc)


### Ecossistema NPM

É importante aprender sobre npm, yarn e nvm, gerenciadores de pacotes e versão do nodeJS irão ajudar a executar e gerenciar aplicações de forma local. 

 - [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)
 - [NVM](https://github.com/nvm-sh/nvm)

### Hospedagem

Aprender sobre hospedagens faz parte de conhecimento comum para um desenvolvedor, para hospedagem de forma simples em React temos a [Vercel](https://vercel.com/) e [Netlify](https://www.netlify.com/) que são populares e você pode hospedar seu projeto com poucos cliques.

## React

É uma biblioteca de interface de usuário declarativa e baseada em componentes.

### Ambiente de desenvolvimento

Existe várias formas de configurar um ambiente de desenvolvimento para react, o mínimo é usar a [CDN](https://pt-br.reactjs.org/docs/cdn-links.html) porém essa forma não é sustentável, e também se faz necessário configurações adicionais com ferramentas que auxiliam no build do projeto como [Babel](https://babeljs.io/docs/en/) e [Webpack](https://webpack.js.org/concepts/).

A forma recomendada é utilizando ferramenta como [Create React App](https://create-react-app.dev/) que fornece um ambiente de desenvolvimento com todas as configurações necessárias para iniciar a criação do seu projeto, como arquivos de configuração, repositório git inicializado, webpack e babel ja configurados, além claro de todas dependências iniciais prontas para uso.

### JSX

O ReactJS permite que a lógica da interface do usuário seja combinada com a lógica de renderização, eventos, manipulação de mudanças de estado e muito mais. Este acoplamento é para encorajar as práticas de construção de componentes independentes.

JSX é uma sintaxe que se parece HTML, mas também tem o poder de JavaScript. Essa sintaxe ajuda os desenvolvedores a escrever a lógica da interface do usuário com todos os elementos necessários, como busca de dados, condições, loops, expressões etc.

- [JSX With Code Example](./JSX/JSX.md)

### Componentes

React é baseado em componentes, criamos componentes independentes que são reutilizáveis, independentes e isolados. Um componente deve executar um trabalho de forma eficiente, é a junção desses componentes que constroem a aplicação.

No React é possível criar componentes usando classes ou funções, porém o uso de classes fora deixado de lado após a criação da API de hooks com a possibilidade de criação de componentes funcionais.

- [Components With Code Example](./02-Components//Componentes.md)


### Estado

Estados são dados privados do seu componente, react possui o useState função da [API de Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html) que manipula estados e esse é utilizado para renderizar e modificar informações.

- [State With Code Example](./03-States/Estados.md)

### Props

Props são os dados que é compartilhados entre componentes, esse são comente leitura, esses dados por padrão são sempre passado de pai para filhos em um fluxo unidirecional, e pode ser usado para tornar o fluxo de dados dinâmico.

- [Props With Code Example](./04-Props/Props.md)

### Listas e Keys

**Listas** são usadas para renderizar itens em um componente React, normalmente se utilizar a função ``map()`` para iterar sobre a lista e renderizar os resultados.

**Keys** ajuda a identificar qual item da lista foi alterado para informar ao React para renderizar novamente, a key é inserida como propriedade e com um valor único como um id no elemento pai que será renderizado.

### Métodos de Ciclo de Vida em React

Ciclo de vida de componentes são as fases que esse possui na interface, tendo sua fase de montar em tela, atualizar e desmontar, essas são podem ser gerênciada com hooks do React, que são **useState** e **useEffect** que gerencia estados nessas fases e seus efeitos.

- [Life Cycle With Code Example](./03-States/Estados.md)

<!-- Nível Intermediário -->

### Estilização em React

React suporta várias formas de estilização, como por exemplo, CSS de forma simples com arquivos .css, Saas ou pode utilizar bibliotecas de estilização como [TailwindCSS](https://tailwindcss.com/), [ChakraUI](https://chakra-ui.com/) e [React-Bootstrap](https://react-bootstrap.github.io/) entre outros, além disso é muito popular a abordagem de CSS in JS usando a sintaxe CSS com o poder do JS como o [Styled Components](https://styled-components.com/).

- [Styles With Code Example](./08-Styles/styles.md)

### Manipulação de formulários em React

Em React existe o conceito de formulários controlados, onde os input são controlados com estados React, isso concede um controle maior sobre esses elementos, é muito comum usar bibliotecas para criação e validação de formulário por exemplo, [React Hook Form](https://react-hook-form.com/), [Formik](https://formik.org/), [Unform](https://unform-rocketseat.vercel.app/quick-start/) entre outras.

- [Form With Code Example](./07-Forms/Forms.md)

### Manipulação de dados em React

Aprender a realizar chamadas a API's é algo crucial, pois a maioria das aplicações irão se comunicar com um backend para mostrar informações, realizar autenticações, validar dados e as formais mais usadas para esse fim são a [Fecth API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) e [Axios](https://axios-http.com/ptbr/docs/intro).

- [Axios With Code Example](../axios/Axios.md)

### Processo de reconciliação em React

O ReactJS usa o DOM virtual e o algoritmo de diferenciação para decidir quando e o que atualizar no DOM real para a renderização. Saber como funciona sob o capô o ajudará na depuração.

- [Virtual DOM With Code Example](./09-Reconcilia%C3%A7%C3%A3o%20e%20VitualDOM/overview.md)

### Hooks

Além dos Hooks **useState**, **useEffect** que gerencia o ciclo de vida o React possui outros hooks importantes que são utilizados para melhora de performance e contextos.

- [Hooks With Code Example](./06-Hooks/Hooks.md)


### Hooks personalizados

Hooks personalizados ajudam na reutilização. Você deve procurar oportunidades para extrair a lógica do componente para hooks reutilizáveis. O código torna-se limpo e modular com o uso de hooks personalizados.

- [Custom Hooks With Code Example](./06-Hooks/CustomHooks.md)

### Contexto em React

Contextos ajudam a evitar props drilling, ou seja, evitar passagem de dados entre muitos componentes, além de disponibilizar dados, estados e funções que podem ser consumidos entre todos os componentes ou por um grupo especifico e dessa forma também ajuda na manutenção e organização do código.

- [Contexto With Code Example](./06-Hooks/Hooks.md)


<!-- Nível Avançado -->

### Lazy Loading ( Carregamento lento )

O lazy loading permite o carregamento do código sob demanda, por exemplo, carregar o import de uma lib que é utilizada apenas em determinada tela de gráficos, isso ajuda no carregamento geral da aplicação diminuindo o tamanho do bundle, o React possui o recurso de **Dynamic Import** para essa finalidade.

### Portals em React

Você pode ter que usar Portals ao lidar com modais, diálogos ou dicas de ferramentas com melhor manipulação de eventos. Ele é suportado imediatamente no ReactJS.

### Gerenciamento de Estados em React

Em aplicações maiores você deve compartilhar informações entre componentes. Nem sempre Props e Context irão ser o suficiente.

Nesses casos existem soluções para gerênciamento de estados como [Redux](https://redux.js.org/) ou [Mobx](https://mobx.js.org/README.html).

- [ Redux With Code Example] - ``em desenvolvimento``

### Roteamento em React

O roteamento é necessário para aplicações de várias páginas. Também é útil marcar uma página específica ou ir e vir no aplicativo usando o botão **voltar** do navegador.

O [React Router](https://reactrouter.com/) é a solução de roteamento mais popular que ajuda no roteamento declarativo.

- [ Router With Code Example](../react-router/overview.md)

### Padrões em React

Existem vários padrões que você pode usar como soluções para problemas comuns no React.

Aprender padrões ajuda consideravelmente a resolver problemas sem reinventar a roda. Confira abaixo um site para encontrar os padrões ReactJS mais usados ​​documentados com exemplos.

- [Patterns With Code Example](https://reactpatterns.com/)

### Anti Padrões em React

Anti-Padrões são as práticas que você deve evitar usar nos aplicativos ReactJS. Você deve aprendê-los junto com os padrões úteis que você deve usar.

Você pode continuar aprendendo sobre acessibilidade, estruturas de teste e muitos outros conceitos avançados, conforme necessário.


- [React - Documentação Oficial](https://pt-br.reactjs.org/docs/getting-started.html)

> Baseado no post - [Learn ReactJS – Complete Roadmap](https://www.freecodecamp.org/news/react-fundamentals-for-beginners/)

>  *Este post tem como objetivo ajudar quem esta começando no aprendizado de React, além de servir como incentivo no meus estudos de React criado outros posts pra fixação do aprendizado.*

Me sigam nas redes sociais:

[Github](https://github.com/nascimento-dev-io) | [Linkedin](https://www.linkedin.com/in/nascimento-dev-io/)


