## Babel - Transpiler Javascript
Babel é um transpiler/compiler Javascript, isso significa que sua função é transformar código Javascript moderno em versão compatíveis com browser mais antigo, porém essa não é sua única funcionalidade, existe inúmeros [**plugins**](https://babeljs.io/docs/en/plugins) com finalidades diversas e [**preset**](https://babeljs.io/docs/en/presets) que é um conjunto de **plugins**, preset comuns são utilizado para código **React** e **Typescript**.

***Vamos a um guia de uso***.

> Antes de tudo inicie um projeto node com **npm init -y** e crie um diretório chamado **src** ( onde ficara seu código ).

**Instalação**
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

>  [@babel/core](https://babeljs.io/docs/en/babel-core) possui as funcionalidades principais do babel.

> [@babel/cli](https://babeljs.io/docs/en/babel-cli) é uma ferramenta que permite usar o babel a partir do terminal.

> [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) é um conjunto plugin para lidar com compatibilidades entre versões de códigos, para que seja possível browser mais antigos entendam novas funcionalidades do JS.

- Após a instalação crie um arquivo de configuração chamado **babel.config.json** (requer v7.8.0 e acima) na raiz do seu projeto.

> Opções para arquivo de configuração veja [aqui](https://babeljs.io/docs/en/configuration).

```json
{
  "presets": [
      ["@babel/preset-env", {
        "targets": {
          "browsers": ["last 2 versions"]
        }
      }],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ]
}
```

- Execute este comando para compilar todo o seu código do diretório **src** para **dist**.

```bash
./node_modules/.bin/babel src --out-dir dist

# or

npx babel src --out-dir dist
```
*Um exemplo de transpile de código seria:*
```js
const fn = () => 1;

// converted to

var fn = function fn() {
  return 1;
};
```

> Para maiores detalhes sobre config. do **preset/env** acesse a [documentação](https://babeljs.io/docs/en/babel-preset-env).


Como sabemos tanto a sintaxe **JSX** do React quanto a do **typescript** não são compreendido pelos browsers, para isso existem preset's do babel para lidar com o transpiler desses código. 

> [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) |  [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)

> Lib's como **React** utilizam o babel junto ao webpack por baixo dos panos com essa finalidade.

Basta realizar a instalação e adicionar os preset no arquivo de configuração do babel para que a funcionalidade se ja adicionada.

#React
```json
{
  "presets": ["@babel/preset-react"]
}
```

#Typescript
```json
{
  "presets": ["@babel/preset-typescript"]
}
```

*Exemplo de transpile JSX para função do react*

```jsx
import React from "react";

const App = () => {
  const name = "Jorge";
  return <p>My name is {name}</p>;
};

export default App;

// converted to

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  var name = "Jorge";
  return /*#__PURE__*/_react.default.createElement("p", null, "My name is ", name);
};

var _default = App;
exports.default = _default;
```
Então com isso temos um boa noção da funcionalidade do **babel**, para funcionar junto com typescript é necessário instalação e configuração do compilador **tsc** para lidar com checagem de tipos e configurações adicionais em caso de projeto maiores, para saber mais leia a documentação do **Babel**


> [Documentação Babel](https://babeljs.io/docs/en/) | 
> [Babel e Typescript](https://www.typescriptlang.org/pt/docs/handbook/babel-with-typescript.html)
