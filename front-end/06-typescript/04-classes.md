## Class em TypeScript

Em TypeScript, a programação orientada a objetos é suportada, e isso envolve o conceito de classes, **modificadores de acesso (access modifiers)** e **herança (inheritance)**. Vamos explicar cada um deles e fornecer exemplos de código para ilustrar o seu uso:

**Classe (Class):**

Uma classe é um modelo ou uma estrutura que descreve um objeto, definindo suas propriedades e comportamentos. Em TypeScript, as classes podem ser usadas para criar objetos reutilizáveis e organizar a lógica do programa de maneira mais clara e modular.

Exemplo de código:

```ts
class Animal {
  // Propriedades
  name: string;
  age: number;

  // Construtor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Método
  makeSound() {
    console.log("Animal is making a sound.");
  }
}

// Criando uma instância da classe Animal
const animal1 = new Animal("Leo", 3);
console.log(animal1.name); // Saída: "Leo"
animal1.makeSound(); // Saída: "Animal is making a sound."
```

**Modificadores de acesso (Access Modifiers):**

Os modificadores de acesso em TypeScript permitem controlar o acesso a propriedades e métodos de uma classe a partir de outras partes do código. Existem três modificadores de acesso principais:

- **public**: A propriedade/método é acessível de qualquer lugar, é o padrão quando nenhum modificador é fornecido.
- **private**: A propriedade/método só pode ser acessado dentro da própria classe e não é visível fora dela.
- **protected**: A propriedade/método é acessível dentro da própria classe e também nas classes derivadas (subclasses).

Exemplo de código:

```ts
class Person {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Employee extends Person {
  private salary: number;

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  public showSalary() {
    console.log(`My salary is $${this.salary}.`);
  }
}

const john = new Person("John", 30);
// john.name; -> Erro: 'name' é privado e só pode ser acessado na classe 'Person'.
// john.age; -> Erro: 'age' é protegido e só pode ser acessado na classe 'Person' e suas subclasses.
john.introduce(); // Saída: "Hi, I'm John and I'm 30 years old."

const employee1 = new Employee("Alice", 25, 50000);
// employee1.age; -> Erro: 'age' é protegido e só pode ser acessado na classe 'Person' e suas subclasses.
employee1.introduce(); // Saída: "Hi, I'm Alice and I'm 25 years old."
employee1.showSalary(); // Saída: "My salary is $50000."
```

**Herança (Inheritance):**

A herança é um conceito fundamental da programação orientada a objetos, onde uma classe (subclasse) pode herdar propriedades e comportamentos de outra classe (superclasse). Em TypeScript, usamos a palavra-chave `extends` para criar uma relação de herança entre classes.

Exemplo de código:

```ts
class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public draw() {
    console.log(`Drawing a shape with color ${this.color}.`);
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  public getRadius() {
    return this.radius;
  }

  public draw() {
    console.log(
      `Drawing a circle with color ${this.color} and radius ${this.radius}.`
    );
  }
}

const circle1 = new Circle("blue", 5);
console.log(circle1.getColor()); // Saída: "blue"
console.log(circle1.getRadius()); // Saída: 5
circle1.draw(); // Saída: "Drawing a circle with color blue and radius 5."
```

Neste exemplo, a classe `Circle` herda da classe `Shape`. A classe Circle também redefine o método `draw`, o que é conhecido como _sobrescrita (override)_ do método da classe pai (`Shape`).

> TypeScript possui todos os recursos para lidar com POO, tais como polimorfismo, herança, interfaces e classes abstratas.
