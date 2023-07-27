## Decorators em Typescript

Em TypeScript os decoradores são uma funcionalidade poderosa que permitem adicionar funcionalidades extras a classes, métodos, propriedades e parâmetros de função. Eles são comumente usados em frameworks e bibliotecas para estender o comportamento de classes e funções de uma maneira declarativa.

### Utilizando Decoradores

#### Passo 1: Configuração

Para começar, é importante ter uma configuração TypeScript que permita o uso de decoradores. No seu arquivo `tsconfig.json`, verifique se a opção `"experimentalDecorators": true` está habilitada:

```ts
  {
  "compilerOptions": {
    "target": "es6",
    "experimentalDecorators": true
  }
}
```

#### Passo 2: Criando um Decorador

Vamos começar criando um decorador simples que exibe uma mensagem antes e depois da execução de um método. Neste exemplo, criaremos um decorador chamado `logMethod`.

```ts
// Definição do Decorador
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Antes da execução de ${key}`);
    const result = originalMethod.apply(this, args);
    console.log(`Depois da execução de ${key}`);
    return result;
  };

  return descriptor;
}
```

#### Passo 3: Aplicando o Decorador

Agora que temos nosso decorador, vamos aplicá-lo a um método em uma classe:

```ts
class MinhaClasse {
  @logMethod
  soma(a: number, b: number) {
    return a + b;
  }
}

const minhaInstancia = new MinhaClasse();
console.log(minhaInstancia.soma(2, 3));
```

Ao executar o código acima, você verá a seguinte saída no console:

```shell
  Antes da execução de soma
  Depois da execução de soma
  5
```

Isso demonstra que o decorador `logMethod` foi aplicado ao método `soma` da classe `MinhaClasse` e funcionou conforme o esperado.

### Criando Decoradores com Argumentos

Decoradores também podem ter argumentos. Vamos criar um decorador que aceita um argumento para definir a mensagem de log.

```ts
function logMessage(message: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Mensagem: ${message}`);
      const result = originalMethod.apply(this, args);
      return result;
    };

    return descriptor;
  };
}
```

Agora, podemos aplicar esse decorador à nossa classe da seguinte maneira:

```ts
class MinhaClasse {
  @logMessage("Executando a operação de soma")
  soma(a: number, b: number) {
    return a + b;
  }
}

const minhaInstancia = new MinhaClasse();
console.log(minhaInstancia.soma(2, 3));
```

Ao executar o código, a saída será:

```shell
Mensagem: Executando a operação de soma
5
```

Decoradores são uma funcionalidade poderosa, mas é essencial usá-los de forma adequada. Eles podem tornar o código mais complexo e difícil de manter se usados de maneira inadequada.

> Podemos utiliza decorator em classes, métodos, propriedades e parâmetros de função para mais detalhes clicando [aqui](./code/examples.ts).
