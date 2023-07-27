## ESlint


ESLint é uma ferramenta para identificar e relatar padrões encontrados no código ECMAScript / JavaScript, com o objetivo de tornar o código mais consistente e evitar bugs.

> **NodeJS** é pre requisito para o uso do ESLint.

### Instalação e configuração

```bash
# instalação usando npm ou yarn

$ npm install eslint --save-dev

# or

$ yarn add eslint -D
```

Em seguida, você deve definir um arquivo de configuração e a maneira mais fácil de fazer isso é usar a flag **--init**, o uso do --init presume que você já tenha um ***package.json***. Se não, certifique-se de roda *npm init* ou *yarn init* antes.

```bash
$ npx eslint --init

# or

$ yarn run eslint --ini
```
Esse comando irá oferecer opções de como você quer realizar as correções mp código, informando também o ambiente em que você esta desenvolvendo, é possível extender *styleguides* como da **AirBnB** que são um conjunto de regras previamente desenvolvidos.

Depois disso, você pode executar o ESLint em qualquer arquivo ou diretório como este:

```bash
$ npx eslint yourfile.js

# or

$ yarn run eslint yourfile.js
```

### Arquivo de configuração

Após a execução `eslint --init`, você terá um `.eslintrc.{js,yml,json}` em seu diretório. Nele, você verá algumas regras configuradas assim:


```JSON
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```
Os nomes `"semi"` e `"quotes"`são os nomes das regras no ESLint. O primeiro valor é o nível de erro da regra e pode ser um destes valores:

- `"off"` ou `0` - desligue a regra
- `"warn"` ou `1` - ativar a regra como um aviso (não afeta o código de saída)
- `"error"` ou `2` - ativar a regra como um erro (o código de saída será 1).

Seu arquivo de configuração `.eslintrc.{js,yml,json}` também incluirá a linha:


```JSON
"extends": "eslint:recommended"
```
 E todas *stylesguides* que você extendeu no configuração inicial, é possível também criar um arquivo `.eslintignore` para ignora arquivos/pastas da analise.

<!-- *Exemplo de detecção* -->

<!-- ![eslint](https://ik.imagekit.io/Nscmnt/eslintError_1__Osjow-3Q_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654089437699) -->

Exemplos de regras:

- **indent** que indica 2 espaços de indentação e no código possui 6.
- **no-console** que orienta a não utilização de console.log no código final ( warning ).
- **quotes** no styleguide é definido apenas aspas simples no código temos aspas duplas.
- **no-multiple-empty-lines** não deixar linhas em branco ao final do arquivo.

Esse é apenas um pequeno exemplo de como o **eslint** identifica erros de acordo com padrões definidos, ele pode também além de identificar, corrigir o código realizando a formatação de acordo com as regras, para isso é necessário realizar configurações em seu editor.


> Maiores detalhes [Documentação Oficial](https://eslint.org/docs/user-guide/configuring/) !