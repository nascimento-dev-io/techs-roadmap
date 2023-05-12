## Linguagens de Programação

A linguagem de programação é um método padronizado, formado por um conjunto de regras **sintáticas** e **semânticas**, de implementação de um código fonte - que pode ser **compilado** e transformado em um programa de computador,ou usado como script **interpretado** - que informará instruções de processamento ao computador. Permite que um programador especifique precisamente quais os dados que o computador irá atuar, como estes dados serão armazenados ou transmitidos e, quais ações devem ser tomadas de acordo com as circunstâncias. Linguagens de programação podem ser usadas para expressar **algoritmos** com precisão.

Uma das principais metas das linguagens de programação é que programadores tenham uma maior produtividade, permitindo expressar suas intenções mais facilmente do que quando comparado com a linguagem que um computador entende nativamente **(código de máquina)**. Assim, linguagens de programação são projetadas para adotar uma sintaxe de nível mais alto, que pode ser mais facilmente entendida por programadores humanos. Linguagens de programação são ferramentas importantes para que programadores e engenheiros de software possam escrever programas mais organizados e com maior rapidez.

Linguagens de programação também tornam os programas menos dependentes de computadores ou ambientes computacionais específicos (propriedade chamada de portabilidade). Isto acontece porque programas escritos em linguagens de programação são traduzidos para o código de máquina do computador no qual será executado em vez de ser diretamente executado.

O conjunto de palavras (lexemas classificados em tokens), compostos de acordo com essas regras, constituem o código fonte de um software. Esse código fonte é depois traduzido para código de máquina, que é executado pelo microprocessador..

> As linguagens de programação podem ser classificadas de diversas formas - [Saiba mais](https://universidadedatecnologia.com.br/linguagem-de-programacao-classificacoes/#:~:text=Linguagens%20de%20programa%C3%A7%C3%A3o%20s%C3%A3o%20normalmente,suporte%20a%20orienta%C3%A7%C3%A3o%20de%20objetos.)

### Lexemas - gramática

Um **lexema** é uma sequencia de caracteres no programa fonte que casa com o padrão para um **token** e é identificado pelo analisador léxico como uma instância desse token. Lexemas podem ter atributos como número da linha em que se encontra no código fonte e o valor de uma constante numérica ou um literal.

Os lexemas desempenham um papel importante nas linguagens de programação de computadores. Um caractere perdido ou um símbolo mal colocado pode interromper uma operação inteira. Durante a compilação do programa, a **análise léxica** é a tentativa do computador entender as sequências de caracteres no fluxo de entrada.

Cada lexema é analisado quanto à sua utilidade. Padrões específicos de sequências alfanuméricas compõem o que o computador reconhece como **tokens**. Esses tokens podem ser **identificadores**, **palavras-chave**, **operadores**, **símbolos especiais** ou **constantes**. Tokens válidos são usados ​​para **formar expressões** que fazem parte das instruções de um programa de computador.

Toda linguagem de programação possui uma gramática, essa define padrões que utilizamos para escrever nossos códigos, ou seja, as palavras reservadas da linguagem e as regras sintática definem regras que devemos seguir ao escrever nessa linguagem.

No processo de compilação a primeira fase é a análise léxica ( Scanner / Lexer ) que através dessas regras criam os **tokens** que são utilizado na próxima etapa de compilação a análise **sintática** ( verifica se a forma de escrita esta correta dentro do que a linguagem define ) e **semântica** ( diz respeito ao significado das palavra, tipos, variáveis, funções, erros de incompatibilidades ) -> ( Parser ).

> [Gramática léxica do JavaScript](https://262.ecma-international.org/13.0/#sec-ecmascript-language-lexical-grammar)

### Compilação

O compilador é um software que converte um programa escrito em uma linguagem de alto nível (Source Language) em uma linguagem de baixo nível ( Programa Objeto ).

image 01

- **Cross Compiler** que roda em uma máquina 'A' e produz um código para outra máquina 'B'. Ele é capaz de criar código para uma plataforma diferente daquela em que o compilador está sendo executado.
- **Source-to-source** _transpiler_ é um compilador que traduz o código-fonte escrito em uma linguagem de programação no código-fonte de outra linguagem de programação.

Sabemos que um computador é um conjunto lógico de Software e Hardware. O hardware conhece uma linguagem que é difícil para nós entendermos, portanto, tendemos a escrever programas em uma linguagem de alto nível, que é muito menos complicada para compreendermos e mantermos em mente. Agora, esses programas passam por uma série de transformações para que possam ser prontamente utilizados pelas máquinas. É aqui que os sistemas de procedimentos linguísticos são úteis.

Um tradutor ou processador de linguagem é um programa que traduz um programa de entrada escrito em uma linguagem de programação em um programa equivalente em outra linguagem. O compilador é um tipo de tradutor, que pega um programa escrito em uma linguagem de programação de alto nível como entrada e o traduz em um programa equivalente em linguagens de baixo nível, como linguagem de máquina ou linguagem assembly. O programa escrito em uma linguagem de alto nível é conhecido como programa fonte, e o programa convertido em linguagem de baixo nível é conhecido como programa objeto (ou destino). Além disso, o compilador rastreia os erros no programa fonte e gera o relatório de erros. Sem compilação, nenhum programa escrito em linguagem de alto nível pode ser executado. Após a compilação, apenas o programa em linguagem de máquina é carregado na memória para execução. Para cada linguagem de programação, temos um compilador diferente; no entanto, as tarefas básicas executadas por cada compilador são as mesmas.

### Fases de um compilador

Existem duas fases principais de compilação, que por sua vez possuem muitas partes. Cada um deles recebe informações da saída do nível anterior e trabalha de maneira coordenada.

**Fase de Análise**: Uma representação intermediária é criada a partir do código-fonte fornecido:

1. Analisador Lexical
2. Analisador de Sintaxe
3. Analisador semântico
4. Gerador de Código Intermediário

image 2

O analisador léxico divide o programa em “tokens”, o analisador sintático reconhece “frases” no programa usando a sintaxe da linguagem e o analisador semântico verifica a semântica estática de cada construção. Gerador de Código Intermediário gera código “abstrato”.

**Fase de Síntese**: O programa de destino equivalente é criado a partir da representação intermediária. Tem duas partes:

1. Otimizador de código
2. Gerador de código

Image 3

O Code Optimizer otimiza o código abstrato e o Code Generator final traduz o código intermediário abstrato em instruções de máquina específicas.

**Tabela de Símbolos** – É uma estrutura de dados sendo utilizada e mantida pelo compilador, composta por todos os nomes dos identificadores juntamente com seus tipos. Isso ajuda o compilador a funcionar sem problemas, encontrando os identificadores rapidamente.

A análise de um programa fonte é dividida principalmente em três fases. Eles são:

1. **Análise Linear**

- Isso envolve uma fase de varredura em que o fluxo de caracteres é lido da esquerda para a direita. É então agrupado em vários tokens com um significado coletivo.

2. **Análise Hierárquica**

- Nesta fase de análise, com base em um significado coletivo, os tokens são categorizados hierarquicamente em grupos aninhados.

3. **Análise Semântica**
   Esta fase é usada para verificar se os componentes do programa fonte são significativos ou não

<!-- ## Linguagens Compilados x Interpretadas ( akitando basead )

compilar é o processo de pegar um código fonte texto, por exemplo em C, passar por uma ferramenta como o "cc", que vai cuspir um binário que o sistema operacional vai conseguir executar diretamente.

Um interpretador é um programa que vai pegar ou o arquivo texto do código ou uma representação intermediária, como esse ".class" e vai traduzir pro binário de máquina que, aí sim, o sistema operacional e o processador vão entender.

analise lexa

gramatica da linguagem.

O objetivo é quebrar seu código fonte, que é um texto, em uma listona de tokens e depois usar a gramática pra organizar esses tokens em uma estrutura de dados que podemos manipular programaticamente.

O objetivo é transformar seu código em uma árvore, mais especificamente uma Parse Tree.

tokenizar é feito por um lexer, e a segunda parte de pegar os tokens e transformar em árvore é feita por um parser.

- AST

compilador / Interpretar essa árvore

!! Criar diagramas do fluxos

> Não importa que sintaxe de linguagens você ache mais bonita ou mais elegante ou mais produtiva. Não importa se você gosta de usar chaves pra delimitar funções como no Java ou se prefere usar identação como em Python. Não importa se prefere dividir tudo em várias pequenas funções de poucas linhas ou prefira o jeito go-horse de entuchar o máximo de linhas dentro de uma função. Não importa se gosta ou não de colocar comentários detalhados antes de cada função. Tudo isso é totalmente irrelevante pro computador

Depois que seu código for parseado e compilado, o que vai sobrar são instruções de máquina.

Transpiler - Transformando código / Linter ...

https://pt.wikipedia.org/wiki/Linguagem_de_programa%C3%A7%C3%A3o#cite_note-3
https://johnidm.gitbooks.io/compiladores-para-humanos/content/
https://www.geeksforgeeks.org/introduction-of-compiler-design/?ref=lbp -->
