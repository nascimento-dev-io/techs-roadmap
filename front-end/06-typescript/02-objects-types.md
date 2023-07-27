## Tipos Objetos em TypeScript

Em TypeScript, existem basicamente 3 tipos para lidar com objetos:

### Object

O tipo object é um tipo primitivo em TypeScript que representa qualquer valor não primitivo, ou seja, qualquer valor que não seja **number**, **string**, **boolean**, **symbol**, **null** ou **undefined**. Isso inclui **objetos**, **arrays**, **funções** e outros tipos de dados complexos.

```ts
function printObject(obj: object) {
  console.log(obj);
}

const person = {
  name: "John",
  age: 30,
};

const colors = ["red", "green", "blue"];

printObject(person); // { name: 'John', age: 30 }
printObject(colors); // ['red', 'green', 'blue']
```

### Type Alias

Um type alias é uma maneira de criar um nome alternativo para um tipo existente ou para definir um novo tipo com base em tipos existentes. Isso pode ser útil para tornar o código mais legível, modular e reutilizável.

```ts
type Point = {
  x: number;
  y: number;
};

function printPoint(point: Point) {
  console.log(`x: ${point.x}, y: ${point.y}`);
}

const pointA: Point = { x: 10, y: 20 };
const pointB: Point = { x: 5, y: 12 };

printPoint(pointA); // x: 10, y: 20
printPoint(pointB); // x: 5, y: 12
```

Aqui estão variações de type alias que podem ser usados para criar tipos mais complexos.

`Union Type Alias:`

```ts
type MyBoolean = boolean | string;

const isActive: MyBoolean = true;
const status: MyBoolean = "active";
```

`Intersection Type Alias:`

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  jobTitle: string;
};

type EmployeeInfo = Person & Employee;

const john: EmployeeInfo = {
  name: "John Doe",
  age: 30,
  company: "ABC Corp",
  jobTitle: "Software Engineer",
};
```

`Tuple Type Alias:`

```ts
type Coordinate = [number, number];

const point: Coordinate = [10, 20];
```

`Mapped Type Alias:`

```ts
type Person = {
  name: string;
  age: number;
};

type PartialPerson = {
  [P in keyof Person]?: Person[P];
};

const partialInfo: PartialPerson = {
  name: "Alice",
};
```

> Esses são apenas alguns exemplos dos diversos usos de type aliases em TypeScript. Eles podem ser extremamente úteis para tornar o código mais legível e fácil de manter.

### Utility Types

Existem diversos tipos utilitários que podem ser usados para criar tipos mais complexos ou manipular tipos existentes de maneira mais conveniente. Abaixo estão alguns dos tipos utilitários mais comuns com exemplos de código:

`Partial<T>`:

Cria um tipo com todas as propriedades de **T** tornadas opcionais.

```ts
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Partial<Todo>, newTitle: string) {
  return { ...todo, title: newTitle };
}

const myTodo: Todo = {
  title: "Learn TypeScript",
  description: "Study TypeScript types",
};
const updatedTodo = updateTodo(myTodo, "Master TypeScript");
console.log(updatedTodo);
// Output: { title: "Master TypeScript", description: "Study TypeScript types" }
```

`Required<T>`:

Cria um tipo com todas as propriedades de **T** tornadas obrigatórias.

```ts
interface Options {
  name?: string;
  age?: number;
}

function createUser(options: Required<Options>) {
  return options;
}

const user = createUser({ name: "John", age: 30 });
console.log(user);
// Output: { name: "John", age: 30 }
```

`Readonly<T>`:

Cria um tipo com todas as propriedades de **T** tornadas somente leitura (imutáveis).

```ts
interface Point {
  x: number;
  y: number;
}

const p: Readonly<Point> = { x: 10, y: 5 };
// p.x = 20; // Erro! Não é possível modificar propriedades de um tipo somente leitura.
```

`Pick<T, K>`:

Cria um tipo contendo apenas as propriedades de **T** cujos nomes estão em **K**.

```ts
interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonNameAndAge = Pick<Person, "name" | "age">;

const personInfo: PersonNameAndAge = { name: "Alice", age: 25 };
console.log(personInfo);
// Output: { name: "Alice", age: 25 }
```

`Omit<T, K>`:

Cria um tipo contendo todas as propriedades de **T**, exceto as propriedades cujos nomes estão em **K**.

```ts
interface Car {
  make: string;
  model: string;
  year: number;
}

type NewCar = Omit<Car, "year">;

const myNewCar: NewCar = { make: "Toyota", model: "Camry" };
console.log(myNewCar);
// Output: { make: "Toyota", model: "Camry" }
```

> Esses são apenas alguns dos tipos utilitários disponíveis no TypeScript. Eles são úteis para criar tipos mais precisos, compreensíveis e seguros em suas aplicações.

### Interface

Uma interface é uma forma de definir a estrutura de um objeto em TypeScript. Ela descreve os tipos de propriedades e métodos que um objeto deve ter. As interfaces também podem ser usadas para definir tipos para funções.

```ts
interface Animal {
  name: string;
  age: number;
  speak: (sound: string) => void;
}

const dog: Animal = {
  name: "Buddy",
  age: 5,
  speak: (sound: string) => {
    console.log(`${sound} ${sound}`);
  },
};

const cat: Animal = {
  name: "Whiskers",
  age: 3,
  speak: (sound: string) => {
    console.log(`Meow!`);
  },
};

dog.speak("Woof!"); // Woof! Woof!
cat.speak("Meow!"); // Meow!
```

Note que os três tipos têm usos diferentes, embora possam se sobrepor em alguns cenários. O uso de type alias e interface é especialmente útil para criar estruturas mais complexas e legíveis, enquanto o tipo object é mais amplo e inclui qualquer valor não primitivo.
