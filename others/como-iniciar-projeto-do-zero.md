## Como iniciar um projeto do zero ( baseado na live do JSRaiz )

Os principais erros que cometemos ao iniciar um projeto:

- _Querer começar pelo código_ - é importante antes saber e entender o que o projeto pede ( escopo ), seus requisitos, prioridades.
- _Querer criar tudo do ZERO, reinventar a roda_ - existem soluções que podem resolver seu problema, com maturidade, testada, segura e que reinventa pode levar tempo e causar problemas sem necessidade.

**Muitas vezes o projeto não é tão do zero assim!** - Existem estruturas que podem ser utilizadas ao iniciar um projeto.

- Boilerplate
- Scaffolding
- Frameworks

## Escopo do projeto

- E-commerce
- Desafio técnico
- Landing page
- Web App
- Lib/Framework open source

**DICA: Se você quer empreender com um e-commerce ou fazer um freelancer do tipo, utilize plataformas prontas!**

**Público alvo (Direciona a tecnologia e recursos que você pode utilizar)** - Estudar e entender para quem é direcionado a solução.

- Acessibilidade em geral (deficiência | limitações motoras ) ?
- Navegador moderno?
- Último dispositivo (iphone, android) ?
- - CPU, memória e GPU de alta performance.
- Qualidade de internet.

**Devices** - Para qual plataforma se destina?

- Notebook
- Smartphone
- Tablet
- TV
- Vídeo game

**Performance**

- Perdendo acesso você perde dinheiro, velocidade de carregamento de página e a boa experiência do usuário - UX - é fundamental para soluções web.

**Manutenabilidade**

- Projeto bem estruturado, com bons padrões para que seu código seja extensível com o tempo.

**Escalabilidade**

- Microfrontends - Microserviços - Projeto pode escalar de acordo com o crescimento do seu projeto.

## Tecnicamente falando

- Node/NVM
- NPM
- Git (git flow?)
- Versionamento (https://semver.org)
- Documentação

## Framework/lib (Quando eu sei que preciso?)

- Você precisa de rotas client-side?
- Precisa de sincronização e persistência de dados no client?
- Precisa de uma estrutura e consistência de código?
- Preciso escrever muito HTML dentro do JavaScript? (muito manipulação de DOM)
- É uma aplicação com alto nível de segurança e qualquer bug pode se tornar algo realmente crítico?
- Proficiência do time

**Como decidir entre libs/frameworks que fazem praticamente a mesma coisa**

- Vulnerabilidade
- Quem mantém (credibilidade?)
- Empresas que usam
- Quantidade de ferramentas
- Suporte
- Compatibilidade
- Proficiência do time

## Arquivos e estrutura

**Ponto de entrada**

(Famoso `index.js`, `server.js`, `boostrap.js`)

**Estrutura**

- Alguns patterns óbvios (repositories, services, components, tests, utilities/helpers (app isomórfica?))
  - duck pattern

**SETUP Projeto (Vale uma LIVE sobre o assunto)**

- Compiladores (.babelrc)
- ESLint
- Scripts para automatizar processos: instalação dep, build (local, dev, qa, prod), deploy, etc.
- Rodar projeto/watch
- Module bundler (webpack, rollup, parcel)

## Como sair da tela branca

**Quebre em funcionalidades**

- Priorizar por importância (Entrega gradual das funcionalidades)

**Quebrar em tarefas (Trello) [Dividir para conquistar]**

- Priorizar por importância
- Orçar o tempo pra cada tarefa?

**Refatore**, **refatore** e **refatore** !!

Evite o Code smell - **Speculative** **Generality** - Especular de forma demasiada sobre possibilidade de realizar tudo da melhor forma possível.
