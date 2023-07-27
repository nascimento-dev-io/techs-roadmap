## Prettier

Prettier é um formatador de código opinativo, que pode ser utilizado integrado ao ESLint, fazendo assim o papel do formatter baseado em regras do eslint como utilizar aspas simples, ponto e virgula ao final...

```bash
# instalação
$ yarn add -D prettier

```

O mais comum é utilizar o prettier em conjunto com um linter como o ESLinter para isso é necessário instalar o `eslint-config-prettier`.

### Arquivo de configuração

Geralmente usamos um arquivo `.prettierrc.json` para definir algumas regras de formatação de código.

```JSON
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

Existem várias configurações que podem ser adicionadas a esse arquivo, geralmente é utilizado o comando de salvar para que o prettier formate o arquivo, inserindo essa opção nas configurações do editor de código.

- Maiores informações [Documentação](https://prettier.io/docs/en/index.html)