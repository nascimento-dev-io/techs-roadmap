# Compiladores são os novos frameworks [Maratona Raiz #1]

-- https://www.notion.so/Compiladores-s-o-os-novos-frameworks-Maratona-Raiz-1-34bd4b8a136e433d9f9be124cd02cb85

O que vamos aprender na aula de hoje?

- Entender um pouco sobre como compiladores funcionam
- Compreender um pouco a magia das ferramentas atuais (bastidores)
- Entender de vez o que é e como funciona Babel JS, seus plugins e presets
- Como criar plugin babel (transformar um código em outro)
- Como criar plugin ESLint (para reclamar do seu código)

## Introdução

Hoje temos diversas ferramentas para desenvolver no front-end. Antigamente, bastava um index.html, style.css e main.js que estava tudo certo.

Afinal, isso é bom ou ruim?

**A gente saiu disso**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f6ee877-eab2-4776-a3f0-5a08cfc19c0b/perf-ou-dev.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f6ee877-eab2-4776-a3f0-5a08cfc19c0b/perf-ou-dev.png)

**E foi para**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69a45b2e-aa25-4fcd-819a-8757fdb8ff5e/perf-e-dev.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69a45b2e-aa25-4fcd-819a-8757fdb8ff5e/perf-e-dev.png)

Graças a isso, podemos hoje ter coisas como:

- JSX
- Imports/Exports gerando bundle
- Templates otimizados (antes era parseado no front)
- Minificadores
- Analisadores estáticos
- Muitos outros!

> Hoje o código que fazemos fica muito diferente do código que roda no navegador.

O que chamamos de frameworks web está se transformando, vindo de bibliotecas runtime para dentro de otimizados compiladores. O maior exemplo de todos é o Svelte, hoje em dia.

<aside>
✅ Hoje vamos entender um pouco mais os bastidores de como tudo isso é possível e assim entender com mais fluidez cada ferramenta dessa que surge, e quem sabe, você até desenvolver a sua ferramenta, sua própria sintaxe e o céu é o limite

</aside>

## Questionamentos

- O navegador não conhece JSX, como a gente consegue escrever nosso código com essa sintaxe e no fim o navegador compreender?
- Crio meus vue-components, sei que o navegador não conhece mas como a gente programa isso?
- Como o TypeScript vira JavaScript de forma que o navegador entenda?
- Como que o TS sabe os erros que estão tendo no código durante o desenvolvimento?
- Como ESLint sabe exatamente a posição do erro de código?
- Como ocorre a minificação de um código?
- Como faço para debugger uma aplicação feita em TypeScript no navegador, sendo que o código final é puro JS e está minificado?
- Como o Webpack (module bundler) consegue gerar um arquivo JS com base nos imports/exports?
- Onde o babel se relaciona com tudo isso?

---

## Compiladores

### AOT vs JIT

**Compilação AOT** é quanto seu código é compilado antes de ser executado. Exemplo C que vira código binário antes do programa ser executado

**Compilação JIT** é aquele que o código vai sendo compilado no momento da execução. Exemplo é o próprio JavaScript que (antigamente apenas interpretado) que o navegador baixa, já vai compilando e executando no momento

<aside>
🔥 Vamos focar no AOT (ou build time) que é onde o JS se transformou com surgimento do Node

</aside>

<aside>
⚠️ Não confunda build time com AOT e Run time com JIT

</aside>

### AOT (Ahead of time)

Permite justamente usar coisas como JSX, Vue components, analises estáticas e TypeScript

### Compilação VS Transpilação (Compilers VS Transpilers)

A maior parte das 'compilações' são feitas de JS → JS

Geralmente chamamos de transpilação quando temos uma 'compilação' que gera o mesmo nível de código

### AST (Abstract Syntax Tree)

Durante a compilação (ou transpilação), existe uma etapa intermediária chamada AST. O seu código não é transformado diretamente para a etapa final, ele gera um intermediário.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee328a63-7f56-4e4b-8603-1f118353b15e/001-flow-compiler.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee328a63-7f56-4e4b-8603-1f118353b15e/001-flow-compiler.drawio.png)

### O que é AST

É de fato uma árvore que representa a estrutura do seu código. Como se fosse a árvore DOM.

[[[ VER NO GOOGLE IMAGES "DOM TREE HTML"]]](https://www.google.com/search?q=dom+tree+html&safe=strict&sxsrf=ALeKk02as2Q_JRdOlBm8DgcLBifJdF6gYQ:1615908260916&source=lnms&tbm=isch&biw=1536&bih=796#imgrc=P-P0NIElnMrXOM&imgdii=xoMI2v_TbBRcnM)

[[[ VER NO GOOGLE IMAGES "AST ABSTRACT SYNTAX TREE JAVASCRIPT"]]](https://www.google.com/search?q=ast+abstract+syntax+tree&tbm=isch&safe=strict&chips=q:ast+abstract+syntax+tree,online_chips:javascript&hl=pt-BR&sa=X&ved=2ahUKEwiureGfkLXvAhXkANQKHT7cBnYQ4lYoA3oECAEQHQ&biw=1519&bih=796)

<aside>
💡 O termo "abstrato" se dá ao fato de a árvore não representar os detalhes da real sintaxe do código, apenas a estrutura e as partes relacionadas

</aside>

### Porquê não transformar direto no código final?

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93eef0a9-d10b-42f3-a4c4-1146da5a557b/002-quem-atua-ast.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93eef0a9-d10b-42f3-a4c4-1146da5a557b/002-quem-atua-ast.drawio.png)

AST é vastamente utilizado pelas ferramentas de linguagem: Linters, compiladores, minficadores, ferramentas de refatoração, etc.

**Qual a principal vantagem dessa abordagem?**

- Com apenas um PARSER, você pode trabalhar a AST para gerar qualquer outro código

**EXEMPLO**

Imagina o JSX que foi criado para trabalhar com React. Hoje muito utilizado no React, porém, também é possível utilizar o JSX no Vue, no Preact, Inferno JS entre outros (incremental dom)!

Já pensou se pra cada lib que quiser utilizar JSX, vai ter que rescrever ou adaptar todo o parser?

É muito trabalhoso. Escrever parsers são sempre complicados! Envolve no geral, muita expressão regular, métodos de string, concatenações, etc.

Então, nesse exemplo, a gente pega exatamente o mesmo parser primeiramente criado, gera a AST e a partir da AST a gente adapta e transforma no código que precisamos!

**Ou seja, temos grandes benefícios. Os principais são:**

- Desacoplamento da sintaxe final
- Relacionamento 1.N (Um código pode virar vários outros)

### Vamos dar uma olhada

[→ AST Explorer](https://astexplorer.net/)

Você vai notar que temos que escolher o **parser** e o **transformer,** depois de escolher a linguagem.

**Voltando**...

### Padronização de AST

Nesse momento, talvez você esteja se perguntando se existe uma padronização para gerar um AST.

> _Se eu for escrever um Parser, como sei como o AST deve se assemelhar?_

Bom, naturalmente você precisa conhecer mais sobre AST e suas regras e tal.. Porém, existe uma padronização para escrever AST voltando para ES (EcmaScript), ela está especificada no [EStree](https://github.com/estree/estree)

<aside>
💡 Alguns parsers adicionam mais informações ou tem sutis diferenças

</aside>

**RESUMO**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f9187c1-6f53-4b6e-963b-4d857bb4a6aa/003-ast-estree-sourcemap.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f9187c1-6f53-4b6e-963b-4d857bb4a6aa/003-ast-estree-sourcemap.drawio.png)

**Webpack**

O Webpack, assim como outros module bundlers, utilizam parsers para identificar os imports/exports e assim gerar a árvore de dependências para construir seu bundle.

[Webpack utilizando Acorn parser](https://github.com/webpack/webpack)

### Etapas da compilação/transpilação

Então vamos entender quais são as etapas de como entra um código e sai o outro

**Visão geral**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f233d9c-538d-4a0f-ad72-9a00449d1ede/004-etapas-compilacao-01.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f233d9c-538d-4a0f-ad72-9a00449d1ede/004-etapas-compilacao-01.drawio.png)

**Etapa 1)**

Acontece o parser do JavaScript para o AST

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b779115c-130f-4db6-ae83-40538ba4d65b/005-etapas-compilacao-2.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b779115c-130f-4db6-ae83-40538ba4d65b/005-etapas-compilacao-2.drawio.png)

**Etapa 2)**

Com AST gerado, você pode modificar de acordo com a necessidade. Esse novo AST que vai ser posteriormente transformado em JavaScript novamente.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c8f4e93-07bc-4145-8816-8a7fe3112249/006-etapas-compilacao-03.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c8f4e93-07bc-4145-8816-8a7fe3112249/006-etapas-compilacao-03.drawio.png)

**Etapa 3)**

Etapa de gerar para código o AST

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dfe6b252-088c-4f8a-b57d-d18e8fa8df8f/007-etapas-compilacao-04.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dfe6b252-088c-4f8a-b57d-d18e8fa8df8f/007-etapas-compilacao-04.drawio.png)

> Beleza... Agora que sei como funciona as etapas, como por em prática?

## Babel JS

É aí que entra o babel! Vai nos ajudar nesse processo.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a712626d-4993-4bbc-b646-4e447193b556/008-babel.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a712626d-4993-4bbc-b646-4e447193b556/008-babel.drawio.png)

Podemos ver o Babel com dois pontos de vista:

1. Como usuário utilizador da ferramenta Babel
2. Como o desenvolvedor de transpilers e parsers

[Temos um exemplo do caso 1 na LIVE 30 onde fizemos um setup do zero com babel, webpack, eslint, react, styled-component e outros gerando bundle para dev e prod](https://github.com/programadorabordo/setup-frontend-do-zero)

<aside>
💡 Vou liberar essa LIVE por 1 semana, link vai ficar na descrição do vídeo!

</aside>

Dessa vez, vamos utilizar ele como **segundo cenário**

[Acessar site babel](https://babeljs.io/)

- Nesse cenário Babel funciona como um conjunto de ferramentas (toolchain)

_Explicando melhor essa imagem da relação do Babel_

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53e955f7-3cba-4efe-93ac-585b3f390bdf/008-babel.drawio.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53e955f7-3cba-4efe-93ac-585b3f390bdf/008-babel.drawio.png)

### Criando primeiro plugin Babel

<aside>
⚠️ Vou fazer pelo próprio AST Explorer para o vídeo ainda não ficar mais longo. Pra fazer na 'unha', você só precisa baixar os pacotes necessários para testar (Mostrar sessão babel-transverse na doc), criar a function que o babel espera (na forma que vamos fazer agora) e pronto.

</aside>

→ Um pouco sobre o Tree transversal e Visitor Pattern

→ Types do babel

→ Explicar sobre os nodes

→ Explicar sobre path

**[Babel Handbook](https://github.com/jamiebuilds/babel-handbook)**

→ Sessão de replacing, etc.

**Exemplo prático 1**

- Transformar function async em promise

**Exemplo 2**

- JSX → Olhar especificação AST do JSX
  - [Padronização AST do JSX](https://github.com/facebook/jsx/blob/master/AST.md)

### Stages, plugins e presets do babel

- Babel é vastamente utilizado para experimentar novas funcionalidades do JavaScript
- [Github TC39](https://github.com/tc39)
- [Estagios de implementação](https://babeljs.io/docs/en/presets) (plugins e presets)
  - Cada transformação é um plugin (ex: arrow → fn, async await → promise)
  - Preset é um conjunto de plugin

### [Sucrase compiler](https://github.com/alangpierce/sucrase)

- Utiliza Babel como inspiração

### ESLint

**Exemplo 1**

Plugin ESLint

[Acessar site ESLint](https://eslint.org/)

- Mensagens de erro
- Opções de sugestão
- Opções de fix

**Refs:**

[https://github.com/estree/estree](https://github.com/estree/estree) → padrões ast

[https://babeljs.io/docs/en/babel-parser](https://babeljs.io/docs/en/babel-parser) → babel e seu próprio parser (antigo babylon)

[https://github.com/facebook/jsx/blob/master/AST.md](https://github.com/facebook/jsx/blob/master/AST.md)

[https://www.npmjs.com/package/css-tree](https://www.npmjs.com/package/css-tree)

[https://github.com/inikulin/parse5](https://github.com/inikulin/parse5)

[https://github.com/jamiebuilds/babel-handbook](https://github.com/jamiebuilds/babel-handbook)

[https://lihautan.com/manipulating-ast-with-javascript/](https://lihautan.com/manipulating-ast-with-javascript/)

[https://lihautan.com/the-svelte-compiler-handbook/](https://lihautan.com/the-svelte-compiler-handbook/)

[https://www.twilio.com/blog/abstract-syntax-trees](https://www.twilio.com/blog/abstract-syntax-trees)
