// Criação e tipos em classes.
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

// estendendo classes e modificadores.

// readonly - acessível apenas para leitura fora da classe.
// private - acessível apenas dentro da classe.
// protected - acessível dentro da classe e subclasses apenas.
// public - default - pode ser acessado e alterado fora da classe.

// getters e setters - métodos para acesso e alteração em classes.

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
