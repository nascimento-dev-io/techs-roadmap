## Paradigmas de Programação

Paradigmas de programação lida com a forma de como pensamos o desenvolvimento de softwares do ponto de vista de modelagem da resolução do problema na linguagem, a forma de como o código irá lidar com os dados.

Existem linguagem que implementas vários paradigmas, enquanto outro são mais focado em um determinado paradigma.

> Paradigmas são a base para o desenvolvimento dos padrões, que resolvem problemas comuns no desenvolvimento de software.

- Paradigma => Padrões arquitetural => Padrões de projetos.

Os principais paradigmas de programação são ` Funcional`, `Procedural`, `Orientação a Objetos` além de estilos de programação `Imperativa`, `Declarativa`.

### Declarativo x Imperativo

De forma resumida os estilos de programação difere no jeito de pensar resolução de problema, no **declarativo** você diz **_o que_** precisa ser feito e as funcionalidades da linguagem/framework lidam com detalhes de como realizar a solicitação de acordo com a lógica implementada, ja o **imperativo** informamos **_o como_** realizando assim todo o passo a passo de como resolver um determinada ação.

|         Declarativo          |          Imperativo           |
| :--------------------------: | :---------------------------: |
|        Foco na lógica        |         Foco no fluxo         |
|        Imúltabilidade        |      Estados mpultaveis       |
|            O que             |             Como              |
|  Menor quantidade de código  |  Maior quantidade de código   |
| Alto nível de escalabilidade | Baixo nível de escalabilidade |
|       Menos conhecido        |        Mais conhecido         |
|       Menos explicito        |        Mais explicito         |

---

**Código declarativo**

- **SQL** é um exemplo de linguagem declarativa é dito o que fazer porém não sabemos o como o processo é realizado.

```sql
  select * from user_accesses
```

**HTML** é outra linguagem onde usamos código declarativos, definimos as tag's e o navegador é responsável por realizar a renderização conforme suas características.

**Código Imperativo** é informado todo passo a passo de como obter a média das notas.

```js
const notas = [8, 5, 4.5, 9, 6, 10];

function media(notas) {
  let total = 0;
  for (let i = 0; i < notas.length; i++) {
    total += notas[i];
  }

  return total / notas.length;
}

const mediaTurma = media(notas);
console.log(`A média é ${mediaTurma}`);
```

**Resolução na forma declativa** criando funções menorem resolvendo algo mais especifico e sendo utilizado como parâmentros de outra função usando composição.

```js
const notas = [8, 5, 4.5, 9, 6, 10];

const somar = (a, b) => a + b;
const dividir = (a, b) => a / b;

const mediaTurma = dividir(notas.reduce(somar), notas.length);
console.log(`A média é ${mediaTurma}`);
```

### Procedural

O paradigma procedural é baseado em programação imperativa, seu surgimento foi marcado pelo artigo que deu fim ao Goto statement que lidava com desvios no código fazendo com que se tornasse o conhecido spaghetti code, ou seja, código com muitos desvios e de dificil compreenção.

A programação procedural utiliza modularição, ( rotinas ou função), com isso trata melhor gerenciamento de escopo, o que evita possiveis bug's no softwares causados por variáveis em escopo global, alguns exemplos de linguagens são **C**, **Pascal**, **Fortran**...

### Orientação a objetos

A programação orientada a objeto abstrai para o mundo do código uma visão mais próxima do mundo real, um objeto possui características e compormtamentos ( atributos e métodos).

> Orientação a objeto é focado em dados enquanto a procedural é focado em ação/verbo, o objeto possui um comportamento **_venda.finalizar()_** um procedimento recebe um aprâmentro **_finalizar(venda)_**, o foco é diferente nas abordagens.

Em **OO** objetos são criados apartir de classes, essas são modelos que representa um dado/objeto que será instânciado/criado, dessa forma temos os atributos ( características do objetos) e métodos ( comportamentos associado ao objeto), essa classe pode criar vários objetos seja necessário, seguindo sempre o "molde" a modelagem da classe.

> **OO** possui pilares que construi a base do paradigma que não serão tratados aqui mas que podem ser estudados em mais detalhes posteriormente, são eles, **Encapsulamento**, **Herança**, **Polimorfismo** e **Abstração**.

---

#### Valor x Referência

Existe um conceito importante em programação que é o como a linguagens tratam atribuição de valores, essa pode ser passado por valor ou por referência, e isso impacta na evolução dessas variáveis pois pode ter efeitos colaterais na manipulação das mesmas.

Na maiorias das linguagens os tipos primitivos são sempre passados por valor, ou seja, é feiot uma cópia em mémoria do valor e atribuido a nova variável, enquanto tipos complexos são passados por referência, isso significa que nesse caso é passado o endereço de memória e não o valor, o que faz com que as duas variáveis alterem o mesmo objeto, exemplo abaixo.

```js
const a = 10;
const b = a; // 10

const a = new Object(); // {}
const b = a; // 0ffx1254 ( exemplo )

b.name = 'Jorge';
console.log(a); // {name: 'Jorge'}
```

O compartillhamento de endereço de memória tem o foco em diminuir o consumo, uma vez que não era barato e nem existiam disponibilidade de muita memória para utilização no passado.
