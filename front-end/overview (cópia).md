# Programação funcional

Programação funcional é um paradigma de programação que tem o foco na funções, muito influênciada pela matemática f(x), esse paradgma foi criado por volta dos anos 50 e vem se popularizando atualmente devido ao crescimento e disponibilidade de recursos (memória/processamento) que temos atualmente, vamos ver os principais conceitos a seguir.

### Overview do principais conceitos

#### Funções Pura x Funções Impuras

O conceito de função pura esta ligado no seu input e output, em uma função pura dado o mesmo input sempre retornará o mesmo output, isso implica em não gerar side effect que dificulta manutenção da aplicação, além de dificuldado em criação de testes, enquanto um função impura dado o mesmo input pode gerar output diferente, ou seja em seu processamento essa função pode alterar partes do código que poderá causar efeitos colaterais na aplicação, função pura é a base da programação funcional.

#### First-class function 

Funções como 'cidadão de primeira linha' significa que linguagens que implementa essa característica tratam funções como se fosse variáveis no sentido de, atribuir função a variável, passar função como parâmentro de outra função e retornar função.

#### Higher-order function

É uma função que opera sobre outras função, podendo recebe-las como parâentro ou retornar um função como resultado, essas funções nos permitem fazer abstrações não apenas dos valores mas também das ações.

#### Currying

É uma técnica que transforma uma função com múltiplos parâmentros em uma sequência de funções que aceitam apenas um parâmentro. A princípio parece que estamos apenas adicionando mais dificuldade sem nenhum ganho. Porém temos uma grande vantagem: transformar o código em pequenos pedaços mais expressivos e com maior reuso.

#### Compose

Podemos compor funções pequenas para gerar outras mais complexas de forma bem fácil em JavaScript. A vantagem é o poder de usar essas funções mais complexas, de forma simples, em toda aplicação. Ou seja, aumentamos o reuso.

#### immutability

Imultabilidade é um conceito importante na programação funcional, diz respeito a como lidamos com os dados, sempre que um dado precisa ser atualizado utilizando o conceito de criar um novo dado baseado no dado anterior 'evoluindo' a informação, evitando realizar alterações que podem causa effeitos indesejados, isso tem relação a passagem por valor e referência, no caso de dados complexos que são passados por referência a evolução desse dado evita efeitos colaterais.



