## Buscando e Empurrando dados dos seus Repositórios Remotos

Para obter dados de seus projetos remotos, você pode executar o comando `fetch`:

```bash
$ git fetch <remote-name>
```

O comando vai até aquele projeto remoto e extrai todos os dados daquele projeto que você ainda não tem. Depois que você faz isso, você deve ter como referência todos as ramificações(**branches**) daquele repositório remoto, que você pode mesclar(**merge**) com o atual ou inspecionar a qualquer momento.

Se você clonar um repositório, o comando automaticamente adiciona àquele repositório remoto com o nome **origin**. Então, `git fetch origin` busca qualquer novo trabalho que tenha sido enviado para aquele servidor desde que você o clonou ou fez a última busca(**fetch**).

> É importante notar que o comando `git fetch` só baixa os dados para o seu repositório local - ele não é automaticamente mesclado(**merge**) com nenhum trabalho seu ou modificação que você esteja trabalhando atualmente. Você deve mesclá-los manualmente dentro de seu trabalho quando você estiver pronto.

Se o `branch` atual é configurando para rastrear um `branch` remoto, você pode usar o comando `git pull` para buscar(**fetch**) e então mesclar(**merge**) automaticamente aquele `branch` remoto dentro do seu `branch` atual. Este pode ser um fluxo de trabalho mais fácil e mais confortável para você, e por padrão, o comando `git clone` automaticamente configura a sua `branch main` local para rastrear a `branch main` remota ou qualquer que seja o nome do branch padrão no servidor de onde você o clonou.

Executar `git pull` comumente busca os dados do servidor de onde você originalmente clonou e automaticamente tenta mesclá-lo dentro do código que você está atualmente trabalhando.

```bash
$ git pull origin
```

### push

Quando você tem seu projeto em um ponto que deseja compartilhar, é necessário enviá-lo para o servidor remoto. O comando para isso é simples: `git push [remote-name] [branch-name]`. Se você quiser enviar sua ramificacão (branch) main para o servidor origin (novamente, a clonagem geralmente configura ambos os nomes para você automaticamente), então você pode executar isso para enviar quaisquer commits feitos para o servidor:

```bash
$ git push origin main
```

Este comando funciona apenas se você clonou de um servidor ao qual você tem acesso de escrita (write-access) e se ninguém mais utilizou o comando push nesse meio-tempo. Se você e outra pessoa clonarem o repositório ao mesmo tempo e ela utilizar o comando push e, em seguida, você tentar utilizar, seu envio será rejeitado.

> Primeiro você terá que atualizar localmente, incorporando o trabalho dela ao seu, só assim você poderá utilizar o comando push.
