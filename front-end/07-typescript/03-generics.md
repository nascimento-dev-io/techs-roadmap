## Generics em TypeScript

Em TypeScript, os "Generics" são uma ferramenta poderosa que permitem criar componentes reutilizáveis e flexíveis, permitindo que funções, classes e interfaces trabalhem com vários tipos de dados de forma segura durante a compilação.

Os Generics são representados pelo símbolo `"<>"`, seguido por um nome de tipo genérico (por convenção, geralmente utiliza-se a letra `"T"`, mas qualquer nome pode ser utilizado). Vamos ver alguns exemplos para entender melhor como funcionam.

### Função com Generics

Suponha que desejamos criar uma função que retorne o primeiro elemento de um array, independentemente do tipo de dado presente no array. Para isso, podemos usar Generics.

```ts
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

// Uso da função com diferentes tipos de arrays
const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["a", "b", "c"];

console.log(getFirstElement(numArray)); // Saída: 1
console.log(getFirstElement(strArray)); // Saída: "a"
```

Neste exemplo, a função `getFirstElement` usa um tipo genérico `T`, que é inferido com base no tipo do array passado como argumento. Dessa forma, podemos obter o primeiro elemento independentemente do tipo do array.

### Classe com Generics

Vamos criar uma classe genérica para representar uma caixa (box) que pode conter qualquer tipo de item.

```ts
class Box<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

// Uso da classe Box com diferentes tipos de dados
const numberBox = new Box<number>();
numberBox.addItem(1);
numberBox.addItem(2);
numberBox.addItem(3);
console.log(numberBox.getItems()); // Saída: [1, 2, 3]

const stringBox = new Box<string>();
stringBox.addItem("apple");
stringBox.addItem("banana");
stringBox.addItem("orange");
console.log(stringBox.getItems()); // Saída: ["apple", "banana", "orange"]
```

Neste exemplo, a classe `Box` usa um tipo genérico `T`, que é utilizado para especificar o tipo dos itens que podem ser armazenados na caixa. Quando criamos uma instância da classe `Box`, podemos definir o tipo específico dos itens que queremos armazenar.

### Interface com Generics

Vamos criar uma interface genérica que representa um par de valores.

```ts
interface Pair<T, U> {
  first: T;
  second: U;
}

// Uso da interface Pair com diferentes tipos de valores
const numberAndString: Pair<number, string> = { first: 42, second: "hello" };
const booleanAndArray: Pair<boolean, number[]> = {
  first: true,
  second: [1, 2, 3],
};
```

Neste exemplo, a interface Pair é genérica e possui dois parâmetros de tipo, `T` e `U`, que representam os tipos dos valores do primeiro e segundo elemento do par, respectivamente. Assim, podemos criar pares com diferentes tipos de valores.

Os Generics são uma ferramenta poderosa para criar código flexível e reutilizável, permitindo que suas funções e classes trabalhem com diversos tipos de dados sem perder a segurança de tipo que o TypeScript oferece.
