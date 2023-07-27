## Tipos Básicos em TypeScript

Em TypeScript, existem várias tipagens básicas que podem ser usadas para declarar os tipos de variáveis. Abaixo estão alguns exemplos dos tipos mais comuns:

`number`: Representa números, tanto inteiros como de ponto flutuante.
Exemplo:

```ts
let age: number = 30;
let price: number = 9.99;
```

`string`: Representa sequências de caracteres, texto.

```ts
let name: string = "John Doe";
let greeting: string = "Hello, TypeScript!";
```

`boolean`: Representa valores verdadeiro (true) e falso (false).

```ts
let isReady: boolean = true;
let isPlaying: boolean = false;
```

`array`: Representa uma coleção de elementos do mesmo tipo.

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
```

`tuple`: É um array com um número fixo de elementos, em que cada elemento pode ter um tipo diferente.

```ts
let person: [string, number] = ["Alice", 30];
```

`enum`: Permite definir um conjunto de valores nomeados com um valor numérico associado.

```ts
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Blue;
console.log(favoriteColor); // Saída: 2
```

`any`: Permite que uma variável aceite qualquer tipo de valor. É usado quando o tipo não é conhecido ou quando estamos migrando um código JavaScript existente para TypeScript.

```ts
let data: any = 42;
data = "hello";
data = [1, 2, 3];
```

`void`: Representa a ausência de um tipo de valor. É comumente usado como o retorno de funções que não retornam nenhum valor.

```ts
function sayHello(): void {
  console.log("Hello!");
}

sayHello(); // Saída: Hello!
```

`null` e `undefined`: Tipos que têm valores null e undefined, respectivamente.

```ts
let x: null = null;
let y: undefined = undefined;
```

`never`: Representa o tipo de valores que nunca ocorrem, geralmente usado para funções que lançam exceções ou entram em um loop infinito.

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Código que nunca termina
  }
}
```
