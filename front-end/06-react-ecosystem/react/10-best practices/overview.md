## Boas Práticas e Conversões em React

Em qualquer linguagem, arquitetura, código, existem padrões ou conversões que a comunidade adotam ou a própria doc recomenda que torna o código mas semântico e fácil de manter é um exemplo. Vamos listar aqui principais conceitos relacionado ao desenvolvimento em React.


### Padrões na estrutura do projeto

Algumas ferramentas são importantes para padronizar o código principalmente quando estamos trabalhando em equipe, um código formatado e com regras definidas ajuda os desenvolvedores no entendimento e debugger.

**Vamos ver s principais**
- [EditorConfig](https://editorconfig.org/) - uma extensão no [Vs Code](https://code.visualstudio.com/) que padroniza tipo de quebra de linha, remoção de espaços, indentação e etc.
- [EsLint](../../tools/eslint/eslint.md) que definem regras de padronização no código, existem styles guides famosos como o AirBnB, temos um introdução a essa ferramenta.


### Boas práticas de código
- **Clean Code** - Deixa o código de forma que outro desenvolvedor entenda, cuidado com nomes de variáveis e funções que tenham significado, dividindo o código em pequenas partes com componentização, melhorando a flexibilidade e manutenabilidade.
- **Funções** - Criação de funções com nomes semânticos exemplo, quando lidar com evento usar o prefixo **handle**[event] quando passado via props utilizar prefixo **on**[event], a descrição do que uma função ou variável faz ajuda no entendimento do código.