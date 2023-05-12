## Qualidade de código - Code smells

Qualidade de código é fundamental a ser inserido no nosso dia dia, temos que ter buscar melhorar nosso código sempre que possível, dessa forma tornamos a vida mais fácil para nosso eu do futuro e para o profissional que dará manutenção futura nas nossas aplicações.

Vamos conhecer os principais _code smells_ que são códigos que precisam de atenção e melhoria para tornamos o código mas coeso, com melhor manutenibilidade, clareza e de forma mas profissional.

Os tópicos abordados são:

- **Long Parameter List**
- **Purposeless Conditions**
- **Magic Number - String**
- **Multiple Return Statements**
- **Condicional from Hell**
- **Repeat Reassign**
- **Duplication**
- **Shotgun Surgery**
- **Inappropriate Intimacy**

### Long Parameter List (Lista longa de parâmetros)

O primeiro assunto é sobre funções que são criadas com muitos parâmentros, nesses casos o ideal é que uma função seja o mais específica possível, realize uma tarefa única de forma eficiente, de forma geral uma função deve ter no máximo 3 parâmentros.

_Exemplo:_

```js
function Usuario(nome, email, dataNascimento, cidade, cpf) {
  console.log(nome, email, dataNascimento, cidade, cpf);
  // ...
}
```

Nesse exemplo simples temos um função com muitos parâmentros onde pode ocasionar erros na passagem dos mesmos ou em sua ordem, sendo possível nesse caso passar um objeto que contém os dados do usuários para serem manipulado na função.

```js
function Usuario(user) {
  console.log(user);
  // ...
}
```

### Purposeless conditions (Condições sem propósito)

Códigos onde existem lógicas que possuem retorno com um return **true** e **false** onde podemos realizar um retorno direto com uma expressão boolena pode ser refatorada.

_Exemplo:_

```js
function eDeMaior(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
```

Nesse caso como a expressão dentro do **if** já retorna um booleano podemos refatorar com retorno direto:

```js
function eDeMaior(idade) {
  return idade >= 18;
}
```

### Magic Numbers/Strings (strings ou número mágicos)

Número mágicos são aqueles valores que encontramos em códigos e não sabemos ao certo o que significa, é importante nomear esses números ou strings para que façam sentido no contexto do código e torne o código com manutenabilidade melhor tornando mais produtivo um futura refatoração.

_Exemplo:_

```js
const calcRandom = inputValue * 3.14159;
```

Em lugar de inserir os valores diretamente no na operação podemos da _nome aos bois_ e nomear o valor para que esse faça sentido.

```js
const PI = 3.14159;
const calcRandom = inputValue * PI;
```

### Multiple return statements (Declarações com múltiplos retornos)

Múltiplos retornos em um declaração pode deixar seu código difícil de ser lido e desmasiado complexo, o melhor nesses casos é refatorar para simplificar o entendimento e clareza na leitura do mesmo.

_Exemplo:_

```js
function getNome(nome) {
  if (nome !== null) {
    return nome;
  } else {
    return "Anônimo";
  }
}
```

Nesse caso podemos simplificar o retorno com uma expressão lógica ou utilizar o **nullish coalecing** que verifica se um valor é **null** ou **undefined**.

```js
// expressão lógica
function getNome(nome) {
  return nome || "Anônimo";
}

// nullish coalescing
function getNome(nome) {
  return nome ?? "Anônimo";
}
```

### Conditional from hell (Condicional do inferno)

Esse é o exemplo de código onde existe um excesso de encadeamento de statements **if** tornando o código difícil de ser mantido, difícil de entender e deve ser evitado.

_Exemplo:_

```js
if () {
  if () {
    if () {
      if () {
        if () {
          //...
        }
      }
    }
  } else if () {
    if () {
      //..
    }
  } else {
    //..
  }
}
```

### Repeat reassign (Repetição e reatribuição)

Temos aqui mais um exemplo que pode torna o código imprevisível e difícil de ser entendido. Sempre que possível devemos evitar repetir código e realizar reatribuição de valores, torna o código imutável ajuda na confiabilidade desse código.

_Exemplo:_

```js
let valorFinal = extraiPrecos(carrinhoItens);
valorFinal = aplicaDesconto(valorFinal);
valorFinal = aplicaTaxa(valorFinal);

console.log(valorFinal);
```

Nesse caso temos um calculo de valor final baseado em items de um carrinho de compras por exemplo, porém existe valores reatribuido a mesma variável e um código que pode ser refatorando usando **aninhamento** de funções ou mesmo com o **reduce**.

```js
//ninho
const valorFinal = aplicaTaxa(aplicaDesconto(extraiPrecos(carrinhoItens)));

//reduce
const valorFinal = [extraiPrecos, aplicaDesconto, aplicaTaxa].reduce(function (
  acc,
  func
) {
  return func(acc);
},
carrinhoItens);
```

### Shotgun Surgery (Cirurgia de espingarda)

Tem relação com código que quando alterado em um local é necessário alterar em vários outros devido a dependência entre eles. Esses casos podem ser refatorado como por exemplo de um **middleware** que realiza uma tarefa ( que no exemplo seria checar informações de cache ) que auxilia na execução de uma rota como no exemplo abaixo.

_Exemplo:_

```js
// buscando informação de cache
Lib.Router("/produtos", function (param) {
  const cache = getFromCache("/produtos");
  ///...
});

Lib.Router("/carrinho", function (param) {
  const cache = getFromCache("/carrinho");
  ///...
});

Lib.Router("/categorias", function (param) {
  const cache = getFromCache("/categorias");
  ///...
});
```

Utilizando um middleware que faz a busca no cache antes da rota ser acessada e disponibiliza esse valor para o próximo middleware da rota.

```js
Lib.Middlewares.add(getFromCache);

Lib.Router("/produtos", function (param) {
  // param.cache;
  ///...
});

Lib.Router("/carrinho", function (param) {
  // param.cache
  ///...
});

Lib.Router("/categorias", function (param) {
  // param.cache
  ///...
});
```

### Duplication (Duplicação)

Como o próprio nome diz é a repetição de código sem necessidade, podendo esse ser abstraído em uma função mais específica, lógicas reutilizáveis.

No exemplo temos um calculo para verificar se o cliente pode ter frete grátis na compra ( foi utilizado como uma função da lib [ramdajs](https://ramdajs.com/docs/) que verifica se um valor é maior que o outro ) que pode ser reutizada sempre que necessário.

```js
let frete = 16.9;

function renderizaCarrinho() {
  // ...
  if (totalProdutos >= 200) {
    frete = 0;
  }
  //...
}

function pagamento() {
  if (totalProdutos >= 200) {
    frete = 0;
  }
  total = totalProdutos + frete;
}
```

- Utilizando função auxiliar para reutilização de código.

```js
const VALOR_FRETE_GRATIS = 200;

const temFreteGratis = R.gte(R._, VALOR_FRETE_GRATIS);

function renderizaCarrinho() {
  // ...
  if (temFreteGratis(totalProdutos)) {
    frete = 0;
  }
  //...
}

function pagamento() {
  if (temFreteGratis(totalProdutos)) {
    frete = 0;
  }
  total = totalProdutos + frete;
}
```

### Inappropriate Intimacy (Intimidade inadequada)

Esse code smell são códigos que possuem acoplamentos entre si, ou seja, são interdepentes, o exemplo é e classes que dependem de instâncias de outra e que dessa forma torna o código fácil de 'quebrar' no caso de alteração de nome/implementação entre classes, isso pode também ocorrer com módulo, funções etc.

```js
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
}

class Product {
  constructor(name) {
    this.name = name;
  }

  addToCart() {
    this.shoppingCart.addItem(this.name);
  }
}

const shoppingCart = new ShoppingCart();

const product = new Product("Socks");

product.addToCart();

console.log(shoppingCart.items);
```

Nos caso de classes esse problema é geralmente contornado com injeção de dependência, onde a classe que depende da outra é passada no momento que é instânciada.

```js
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
}

class Product {
  constructor(name, shoppingCart) {
    this.shoppingCart = new ShoppingCart();
    this.name = name;
  }

  addToCart() {
    this.shoppingCart.addItem(this.name);
  }
}

const shoppingCart = new ShoppingCart();

const product = new Product("Socks", ShoppingCart);

product.addToCart();

console.log(shoppingCart.items);
```
