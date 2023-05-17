# Git

O git é um sistema de controle de versão, os sistemas de controle de versão são ferramentas de software que ajudam as equipes de software a gerenciar as alterações ao código-fonte ao longo do tempo.

## Principais Comandos do Git

### Instalação

- Instalação usando como exemplo sistemas Linux ubuntu/debian.

```bash
# Para obter a versão estável mais recente para sistemas Debian / Ubuntu
$ apt-get install git

# Para Ubuntu, este PPA fornece a versão upstream estável mais recente do Git
$ add-apt-repository ppa:git-core/ppa
$ apt update
$ apt install git
```

### Configuração inicial

- Isto é importante porque cada commit usa esta informação, e ela é 'carimbada' de forma imutável nos commits que você criar.

```bash
# configura o usuário pode ser global ou local
$ git config --global user.name "Jorge Nascimento"

# configuração do email pode ser global ou local
$ git config --global user.email "nascimento.dev.io@gmail.com"

# listando configurações
$ git config --list
```

### Pedindo ajuda

- Mostra um manual do comando, com detalhes de argumentos que podem ser usados, sintaxe .. etc.

```bash
$ git help <verb> ||  git <verb> --help || $ man git -<verb>
```

### Iniciando um repositório

- Um novo sub diretório chamado **.git** é criado e contém todos os arquivos necessários de seu repositório.

```bash
# inicializa um novo repositório
$ git init
```

### Realizando clone de projetos remotos

- Podemos realizar cópia local de projetos que estão hospedados em hub's como o **github** por exemplo, para usamos o comando clone, podendo ser feito via https ou ssh.

```bash
# realiza o download do projeto remoto em um diretório com nome do projeto
$ git clone <repo-url> or <ssh-url>
```

### Adicionando arquivos para serem 'commitados'

- A partir desse momentos seus arquivos estão sendo monitorados, e ja pode utilizar o commit.
  Você pode adicionar arquivos para serem commitados de forma individual, com algum filtro ou utilizando o **.** ( ponto ) para inserir todos os arquivos de uma so vez.

```bash
# adicionando arquivos ao staged
$ git add *.js or $ git add .

# remove arquivos do staged
$ git restore --staged <file>
```

### Verificando o status dos arquivos

- Lista o status dos arquivos, que podem ser _não monitorados_, _modificados_, _deletados_, existe as variações do comando para deixa-lo curto.

**Legenda**

**??** - não rastreados

**A** - arquivos na area de stage

**M** - modificados

**MM** - staged e modificado

**D** - deletado

```bash
# lista sem filtros
$ git status

# lista os arquivo de forma resumida
$ git status -s or git status --short
```

### Visualizando alterações dentro e fora do stage

- O comando mostrará as diferença do que exatamente foi alterados nos arquivos que ainda não foram mandado para o stage e o que esta no stage pronto para o commit.

```bash
# compara arquivos que estão no stage e que ainda não foram submetidos
$ git diff

# compara as alterações que estão no seu stage com o seu último commit
$ git diff --staged

# mostra apenas os nomes dos arquivos alterados
$ git diff --name-only
```

### Fazendo commit das suas alterações

Uma vez que suas alterações estão no stage o comando git commit cria o snapshot, levando assim para o banco de dados do git, digitando apenas git commit sera aberto o editor padrão para que uma mensagem seja adicionado ao commit, utilizando o -v no momento da edição mostra o diff do código, utilizando o -m você insere a mensagem sem entrar no editor, -a adiciona a stage automaticamente.

O commit grava o snapshot que você deixou no stage, toda vez que você executa um commit, você está gravando um snapshot do seu projeto que você pode usar posteriormente para fazer comparações, ou mesmo restaurá-lo.

```bash
# cria o commit e insere msg diretamente no terminal
$ git commit -m <mensagem>

# adicionado as alterações e ja cria o commit
$ git commit -am <mensagem>
```

### Visualizando o histórico de commits

Lista o histórico de commits do mais recente para o mais antigo por padrão, esse comando lista cada commit com o seu checksum SHA-1, o nome e email do autor, data de inserção, e a mensagem do commit.

Existe muitos argumentos que pode ser utilizado para retornar exatamente aquilo que você esta procurando, mais detalhes nos exemplos do comando.

```bash
# lista commits de forma detalhada
$ git log

# commits de forma resumida em linha única
$ git log --oneline

# Mostra diferenças ( alterações ) entre os commits
git log -p -2
```

### Desfazendo as coisas

É possível voltar os arquivos para estados anteriores, em caso onde houve erros e algum arquivo tenha sido inserido no stage por engano, ou queremos desfazer um commit.

```bash
# desfaz e substitui o último commit
$ git commit --amend -m <message>

# desfaz alterações desde último commit
$ git checkout arquivo.txt

# retira o arquivo do stage
$ git reset <file>

# desfaz o ultimo commit com as opções de flog.
# flag --soft não altera os arquivos e retorna ao estado do stage
# flag --mixed não altera os arquivos e retorna ao estado do working directory
# flag --hard desfaz alterações realizada após o commit especificado
$ git reset HEAD~1 or  git reset <hash>

# O revert cria um novo commit que faz o revert ( exclui todas as alterações ) do commit especificado.
$ git revert <hash>
```

### Branch - Manipulando ramificações ( local )

Branch significa que você diverge da linha principal de desenvolvimento e continua a trabalhar sem alterar essa linha principal, após terminar a feature nessa nova linha você pode unir (merge) a linha principal as nova funcionalidade.

```bash
# cria uma nova branch / crie e alterna para branch criada.
$ git branch <name> or git checkout -b <name>

# lista as branch local | lista locais e remotas
$ git branch --list | git branch -a

# renomeando a branch
$ git branch -m novo-nome

#remove uma branch
$ git branch -d <name>
```

### Unindo branches ( merge e rebase )

Se você unir 2 branch's e existam divergência em relação ao antecessor em comum da main, ou seja tenha novos commits que divergem o ancestral em comum, o git cria uma novo commit ( commit de merge ) que aponta para o último commit da branch secundária e o último da main. ( three-way merge), em caso de existir conflitos, ou seja, mesmo arquivos foram modificados nas 2 branch's é necessário a correção do conflito e gerar um novo commit seguido do merge, existe também o comando **rebase** que muda a forma de unir as branch, nesse caso o histórico de commit da branch secundária se mantém.

```bash
# uni as alterações da branch secundária com a principal ( com fluxo cronológico de commit ), e um novo commit ( de merge ) é criado.
$ git merge <feature-branch>

# rebase unir as branch e mantém o histórico de commits ( a frente do último da main ), não cria commit de mescla.
$ git rebase <feature-branch>
```

### Criando Tags

Tag são marcação ( pontos importantes ) no projeto como um exemplo de release ( 1.0, 1.1 ), e quando o projeto esta no github é possível baixar o código fonte específico de cada tag criada.

```bash
# cria uma tag
$ git tag -a <tag-version> -m "message"

# deleta a tag
$ git tag -d <tag-version>

# lista as tag's
$ git tag

# enviado tag's para o hub remoto
$ git push origin --tags
```

### Removendo branch e tag remotas

A remoção de branch e tag de forma local não atualiza o repositório remoto, para isso utilizamos os comando a seguir para realizar essas remoções.

```bash
# remove a branch remota
$ git push origin :<branch-name>

# remove a tag remota
$ git push origin :<tag-version>
```

## Trabalhando de forma remota ( Utilizando Github )

### Clonando e listando repositório remoto

```bash
# Realizar um clone de um projeto ( repositório) remoto
$ git clone <url-repo>

# Lista os repositórios remoto e sua(s) url(s)
$ git remote -v

# mostra informações do repositório remoto específico de forma detalhada
$ git remote show <remote-name>

```

### Adicionando e removendo referência do repositório remoto

```bash
# adiciona um repositório remoto explicitamente
$ git remote add <shortname> <url>

# remove a referência para o repositório remoto
$ git remove <remote-name>
```

### Puxando e Empurrando atualizações

```bash
# buscar os dados no repo remoto e atualizar automaticamente sua branch local
$ git pull

# baixa os dados para o seu repositório local - ele não é automaticamente mesclado (merge)
$ git fetch

# envia as alterações locais para o remote na branch especificada, seu repositório local precisa estar atualizado com as últimas alterações da branch remota
$ git push <name> <branch>
```

### Github - Contribuição - Open Source

**GitHub** é o maior host para repositórios Git e é o ponto central de colaboração para milhões de desenvolvedores e projetos. Uma grande percentagem de todos os repositórios Git são hospedados no GitHub e muitos projetos de código aberto o usam para hospedagem Git, rastreamento de problemas, revisão de código e outras coisas. Portanto, embora não seja uma parte direta do projeto de código aberto Git, há uma boa chance de que você deseje ou precise interagir com o GitHub em algum ponto ao usar o Git profissionalmente.

### Fork

No GitHub, um “fork” é simplesmente o mesmo projeto no seu namespace, permitindo que você faça alterações publicamente em um projeto como uma forma mais aberta de contribuir.

### Pull Request

É uma forma colaborativa de compartilhar criação ou mudanças de código no repositório, de forma que facilite ser revisado e/ou discutido entre todos os membros do time, é o pedido para que o repositório original, ou uma branch do repositório original, faça a ação de pull (puxar) as atualizações do repositório fork ou de um branch do próprio repositório

Existem vários outros tópicos relacionados ao git e github que são mais avançado e que podem ser encontrado no livro **Git Pro**, para melhor aprendizado é importante sempre revisar os tópicos e experimentar ferramentas que mostram o fluxo do git de forma visual, abaixo deixo o link da documentação e livro Git Pro.

---

- Documentação do Git

- - [Documentação Oficial](https://git-scm.com/doc)

- Livro Pro Git

- - [Book Pro Git](https://git-scm.com/book/pt-br/v2)

- Site que te ajuda a entender forma visual o fluxo do git ( commit, branch... ).
- - [Visualizing Git](https://git-school.github.io/visualizing-git/#free)

- - [Uma Referência Visual do Git](https://marklodato.github.io/visual-git-guide/index-pt.html)
