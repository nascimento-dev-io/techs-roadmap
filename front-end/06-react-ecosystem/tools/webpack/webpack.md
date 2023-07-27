## Webpack 

Webpack é um bundler JS, ele é usado para compilar módulos JavaScript.

### Instalação

Na pasta do seu projeto apos criar o projeto node, criando o arquivo `package.json`, instale o `webpack` e` webpack-cli` ferramenta usada para executar o webpack na linha de comando

```bash
# inicia um projeto node
npm init -y

npm install --save-dev webpack

# or specific version

npm install --save-dev webpack@<version>

npm install --save-dev webpack-cli

```

Com o entry point do arquivo do package definido corretamente no index na aplicação, o comando `npx webpack` pode ser utilizado para gerar o bundle que padrão é ./dist/main.js, de forma geral utilizando um arquivo `webpack.config.js` para definir todas as configurações que o webpack precisa para criar seu grafo de dependências com loaders corretamente setado para os variados tipos de arquivos da aplicação, além disso é possivel utilizar também um servidor do webpack para hot reload conforme veremos em breve.

### Arquivo de configuração

O arquivo de configuração do webpack é criado na raiz do projeto com configurações que indicam ponto de entrada do projeto, saida, loaders que definem o que será feito com determinado tipo de arquivo, plugins que posssuem variadas finalidades...

```cmd
# usando o arquivo de configuração

npx webpack --config webpack.config.js
```

Se um webpack.config.js estiver presente, o comando webpack o seleciona por padrão. Usamos a opção --config aqui apenas para mostrar que você pode passar uma configuração de qualquer nome. Isso será útil para configurações mais complexas que precisam ser divididas em vários arquivos.

Podemos criar também um script NPM no arquivo package.json ao invés de utilizar o webpack sempre na linha de comando.

```JSON
"scripts": {
    "dev": "webpack",
  }
```

- Utilizando assim o comando do script executando o arquivo padrão do webpack, podendo também criar variáções com arquivos diferentes alterando o mode por exemplo.

```
npm run dev
```

### Entry

O entry indica qual módulo webpack deve usar para começar a construir seu gráfico de dependência interna . O Webpack descobrirá de quais outros módulos e bibliotecas esse ponto de entrada depende (direta e indiretamente).

### Output

A propriedade output informa ao webpack onde emitir os pacotes que ele cria e como nomear esses arquivos. O padrão é ./dist/main.js para o arquivo de saída principal e para a pasta ./dist para qualquer outro arquivo gerado.

### Mode

Esse parâmetro mode pode ser definido como development, production ou none, com o mode você pode habilitar as otimizações integradas do webpack que correspondem a cada ambiente. O valor padrão é production.

### Devtool

Para facilitar o rastreamento de erros e avisos, o JavaScript oferece mapas de origem , que mapeiam o código compilado de volta ao código-fonte original. Se um erro se originar de b.js, o mapa de origem dirá exatamente isso.

### DevServer

webpack-dev-server oferece um servidor web com hot reload e pode ser usado para ajudar no desenvolvimento aplicativo com maior produtividade.

```
# instalando o servidor
npm install --save-dev webpack-dev-server
```

Apartir de agora você pode criar um novo script que irá monitorar as alterações no projeto além de servir com o live reload atualizando a página em tempo real.

Os script podem ser usados com sintaxes diferentes dependendo de como você o chama usando API ou CLI.

```JSON
...
"scripts": {
    "dev": "webpack serve --open",
    "build": "webpack-dev-server --mode production"
  }
```

### Loaders

O webpack só entende arquivos JavaScript e JSON. Os loaders permitem que o webpack processe outros tipos de arquivos e os converta em módulos válidos que podem ser consumidos por seu aplicativo e adicionados ao gráfico de dependência.

- Os loaders têm duas propriedades na configuração do webpack:

- A propriedade **test** identifica qual arquivo ou arquivos devem ser transformados.

- A propriedade **use** indica qual loader deve ser usado para fazer a transformação.

Os Loaders são responsáveis por 'tratar' outros tipos de arquivos além do JS que são importandos dentro do javascript, como por exemplo, css, imagens, fonts...

Existem loaders para diversos tipos de arquivos em um projeto, esse loaders são adicioando via pacotes npm, no arquivo de configuração eles são inserido na como objetos dentro da propriedade **rules** que por sua vez fica dentro de **module**, confirme dito acima esse objeto possue 2 propriedade principais que define a expressão regular para determinar quais arquivos ele deve procurar e outra que defini qual loader específico para o tratamento.

### Plugins

Enquanto os loaders são usados ​​para transformar certos tipos de módulos, os plug-ins podem ser aproveitados para realizar uma ampla gama de tarefas como otimização de pacote, gerenciamento de assets e injeção de variáveis ​​de ambiente.

Para usar um plugin, você precisa, require() - importa-lo e adicioná-lo ao array de plugins. A maioria dos plug-ins é personalizável por meio de opções. Já que você pode usar um plugin várias vezes em uma configuração para diferentes propósitos, você precisa criar uma instância dele chamando-o com o operador new.

*Exemplo de arquivo de configuração*

```js
// O módulo path serve para manipular caminhos de arquivos com isso pode 'corrigir' possíveis erros de caminho de diretórios em s.o diferentes.
const path = require("path");

//Importando o Plugin...
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // ponto de entrada para o webpack criar o gráfico de dependências...
  entry: path.resolve(__dirname, "src", "index.js"),

  // saida após o processamento dos módulos...
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  // defini o mode final de saida, no modo development a saida não é minificada, além de melhorias para debug...

  mode: "development",

  // auxilia no debug mostrando o ponto exato do erro...

  devtool: "inline-source-map",

  // servidor de desenvolvimento com hot reload...

  devServer: {
    static: path.join(__dirname, "./public"),
  },

  // adicionando as regras e loaders correspondentes...

  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },

  // adicionando o plugin htmlwebpackplugin...

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
```
...o weback é muito extensível e existem inúmeras configurações tanto para o server quanto para o webpack em geral, você pode checar a documentação [aqui](https://webpack.js.org/guides/getting-started/).

> Acesse o arquivo de configuração do webpack [aqui](./webpack.config.js)
