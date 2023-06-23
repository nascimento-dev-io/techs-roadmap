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
