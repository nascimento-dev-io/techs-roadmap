## TypeScript

Typescript é um **superset** do JavaScript, com ele você adiciona tipagem estática ao JS.

O compilador **tsc** realiza a checagem de tipos em runtime gera código Javascript que é o que o browser reconhece.

### Vantagens

- Evita resultados inesperados.
- Checagem de tipos no desenvolvimento evitando erros.
- Deixa a IDE/Editor poderosa ajudando nas tipagem/métodos/propriedades.

### Desvantagens

- Necessita ser compilado.
- Aprendizado inicial dos tipos e boas práticas.

### Mitos e Verdades

- [x] Typescript é o JS com tipos, não há a necessidade de aprender tudo de novo.
- [x] Adoção pode ser feita de forma gradual, não precisa reescrever todo o código numa migração.
- [x] A adoção do typescript não isenta o uso de testes, use em conjunto.
- [x] É fundamentado em OO porém funciona em qualquer paradigma.
- [x] Não é muito verboso, não precisa tipar tudo, existe a inferência baseado no retorno de uma função ou valor atribuídos na inicialização de uma variável.
- [x] Pode ser utilizado em projetos grandes ou pequenos, ajuda na escalabilidade.
- [x] Não é a mesma coisa que propTypes, pois gera erros e não apenas warnings referente a tipos passados.

### Instalação

- Para instalar o typescript é necessário que ja tenha o nodejs instalado.

```bash
 npm install -g typescript
```

O compilador typescript pode ser chamado como **tsc** em linha de comando, **--watch** monitora as alterações.

```bash
tsc <nomeDoArquivo> --watch
```

Podemos criar um arquivo **TSconfig**, podemos usar o comando **tsc --init** para a criação do arquivo de configuração do compilador.

```bash
tsc --init
```

Nesse arquivo existe inúmeras opções que podemos setar para o **tsc**, como por exemplo pasta de destino do arquivo gerado, target do JS para compatibilidade, entre outros.

Visite https://aka.ms/tsconfig.json mais informações sobre o arquivo de configuração do typescript.

### Tipos

Vamos conhecer os tipos mais comuns enquanto estamos desenvolvendo nossas aplicações.

```ts
// boolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary...)
let total: number;
total = 0xff0 || 10 || 102.5;

// array (type[] || Array<type>)
let items: number[];
items = [1, 3, 5, 10];

let platform: Array<string>;
platform = ["linux", "windows", "mcOS"];

// tuple - 'array' com tamanho e tipos definidos.
let title: [number, string];
title = [1, "foo"];

// enum - conjunto de chave valor.
enum Colors {
  white = "#fff",
  black = "#000",
}

// any - permite qualquer valor e deve ser evitado
let an: any;
an = [];
an = 10;

// void - sem retorno.
const logger = (): void => console.log("log");

// null e undefined - null: sem valor. | undefined: não definido.
type Bla = string | undefined;

// never - nunca vai retornar
function error(): never {
  throw new Error("error");
}

// object - qualquer coisa que não seja tipo primitivo é um objeto.
let cart: object;
cart = {
  key: "value",
};

// Inferência de tipo - baseado no retorno ou valor inicial de uma variável o TS defini o seu tipo.

let newMessage = "hello there"; // tipo definido como string => newMessage: string

// O TS ja define o 'e'como MouseEvent trazendo o autocomplete de forma automática.
window.addEventListener("click", (e) => console.log(e.target));
```

### type Alias são definição de tipos personalizados.

```ts
type Uid = string | number; // definindo 2 tipos para o uid.

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

console.log(logDetails(100, "PS5"));

// Podemos também definir quais exatamente são as opções aceitas no type alias.
type ConsolePlatform = "PS5" | "Xbox" | "PC";

function renderConsoleType(consolePlatform: ConsolePlatform) {
  console.log(`The Console é ${consolePlatform}`);
}

renderConsoleType("PS5");
```

### Criando type mais complexos - AccountInfo

```ts
type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 254,
  name: "Nascimento",
  email: "nascimento.dev.io@gmail.com",
};

// CharInfo

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "Nscmnt",
  level: 125,
};
```

### Criando um type com a intersecção dos tipos anteriores.

```ts
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 254,
  name: "Loki",
  nickname: "lksCat",
  level: 124,
};
```

### Interface descrevem estrutura de objetos.

Você ter o controle de propriedades para melhor controle como :

- **readonly** - somente leitura |
- **?** - usado para propriedade opcional.
- **extends** é usado para extender interface ( herança )

Quando um método é definido como opcional, ele pode ser _undefined_, nesse caso é necessário checa se ele existe

```ts
interface Game {
  id?: string | number;
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilar?: (title: string) => void;
}

const tlou: Game = {
  id: 528,
  title: "The Last Of Us",
  description: "The Best game  in the World",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilar: (title) => {
    console.log(`Similar game to ${title}: Uncharted, A plague Tale, Metro`);
  },
};

if (tlou.getSimilar) tlou.getSimilar(tlou.title);
```

### Estendendo Game a DLC

```ts
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: "The Last Of Us - Left Behind",
  description: "You Play Ellie before the original game",
  genre: "Action",
  platform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"],
};
```

### Criação de class baseado em interface

Nesse caso a classe precisa implementar o que tiver na interface.

```ts
class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
```

## Diferenças entre Interfaces e Types

Os 2 são usados para praticamente as mesmas coisas, geralmente se utiliza interface para definir objetos mais complexos.

### Definição

```ts
// type
type Game = {
  title: string;
};

type DLC = {
  extra: string;
};

// interface
interface Game {
  title: string;
}

interface DLC {
  extras: string;
}
```

### Intersection

```ts
// type
type GameCollection = Game & DLC;

// interface
interface GameCollection extends Game, DLC {}
```

### Function

```ts
// type
type getSimilars = (title: string) => void;

// interface
interface getSimilars {
  (title: string) => void
}
```

### Diferenças

```ts
// types permite tipos primitivos, interfaces não permitem.

type ID = string | number;

// type permite definição de tuplas, interfaces não permitem.

type Tuple = [number, number];

// interface uni múltiplas declarações com o mesmo nome, type gera erro nesse tipo de declaração.
interface JQuery {
  a: string
}

interface JQuery {
  b: string
}

const $: JQuery = {
  a: 'foo",
  b: 'bar'
  }
```

**Interfaces** são mais indicado quando você quer que seu projeto seja mais extensível, como a criação de uma lib ou esteja trabalhando com orientação a objetos pois se tratar de um conceito mais comum nesse paradigma.

**Types** são mais simples de se utilizar, menos código para determinadas situações como intersection, trabalha com tipos primitivos, type é indicado na maioria das vezes.

## Criação e tipos em classes

```ts
class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

const jn = new UserAccount("Jorge Nascimento", 32);

console.log(jn);
jn.logDetails();
```

### Estendendo classes e modificadores.

- **readonly** - acessível apenas para leitura fora da classe.
- **private** - acessível apenas dentro da classe.
- **protected** - acessível dentro da classe e subclasses apenas.
- **public** - default - pode ser acessado e alterado fora da classe.

- **getters e setters** - métodos para acesso e alteração em classes.

```ts
class CharAccount extends UserAccount {
  nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  set setNickname(n: string) {
    this.nickname = n;
  }
}

const loki = new CharAccount("Loki", 25, "lksCat", 125);
loki.logDetails();
console.log(loki.getLevel);
loki.setNickname = "lkCat";
console.log(loki.nickname);
```
