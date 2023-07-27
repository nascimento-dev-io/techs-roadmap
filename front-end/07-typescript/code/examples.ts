// Lista com exemplos de tipagens simples em Typescript

// tipos básicos

const userName: string = "Jorge";
console.log(`string ${userName}`);

const userAge: number = 34;
console.log(`number ${userAge}`);

const userIsDeveloper: boolean = true;
console.log(`boolean ${userIsDeveloper}`);

const isAvailable: null = null;
console.log(`null ${isAvailable}`);

const notFound: undefined = undefined;
console.log(`undefined ${notFound}`);

const anywhere: any = "anywhere";
console.log(`any ${anywhere}`);

const tuple: [string, number] = ["Jorge", 34];
console.log(`tuple ${tuple}`);

enum Color {
  Red,
  Green,
  Blue,
}
console.log(`enum ${Color.Blue}`);

// tipos objetos - complexos
const user: object = {
  // anywhere object type
};
console.log(`object ${user}`);

type User = {
  name: string;
  age: number;
};

const user2: User = {
  name: "Jorge",
  age: 34,
};
console.log(`type alias ${user2.name} ${user2.age}`);

interface IUser {
  name: string;
  age: number;
}

const user3: IUser = {
  name: "Jorge",
  age: 34,
};

console.log(`interface ${user3.name} ${user3.age}`);

// Generics

function add<T>(a: T, b: T): T {
  return a + b;
}

console.log(add(1, 2));

class Box<T> {
  private data: T;
  constructor(data: T) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const box = new Box<string>("Jorge");
console.log(box.getData());

// Decorators

function logger(prefix: string) {
  return function (target: any) {
    console.log(`prefix: ${prefix} target: ${target.name}`);
  };
}

@logger("Awesome")
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const userObject = new Person("Jorge");
console.log(userObject);

// Class decorator

function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setAPIVersion("1.0.0")
class API {}
console.log(new API()); // => API { version: '1.0.0' }

// Property decorator

function minLength(length: number) {
  return (target: any, key: string) => {
    let prop = target[key];

    const getter = () => prop;
    const setter = (value: string) => {
      if (value.length < length) {
        console.error(
          `${key} deve ter no mínimo ${length} caracteres e possui ${value.length} caracteres!`
        );
        return;
      }

      prop = value;
    };

    Object.defineProperties(target, {
      [key]: {
        get: getter,
        set: setter,
      },
    });
  };
}

class Movie {
  @minLength(5) // validando o tamanho mínimo de propriedade
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const movie = new Movie("The Lord of the Rings");
console.log(`movie is ${movie.title}`);

// Method decorator

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }

  //  esperar um tempo um tempo para executar o método
  @delay(1000)
  greet() {
    console.log(`Hello ${this.greeting}`);
  }
}

const pessoa = new Greeter("Pessoinha!");
console.log(pessoa);
pessoa.greet();
