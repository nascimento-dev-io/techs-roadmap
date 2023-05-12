## Ambiente de desenvolvimento - Linux

**Expo CLI** - Expo é um conjunto de ferramentas desenvolvidas em torno do React Native, indicado para quem esta começando pela configuração mais simplificada, necessário apenas Node para começar.

```bash
# instalando o expo
npm install -g expo-cli
```

Em seguida

```bash
# iniciando um projeto
expo init <project name>

# acesso a pasta criada
cd <project name>

# executando o projeto
npm start
```

#### Executar seu aplicativo React Native

Instale o aplicativo cliente [Expo](https://expo.io/) em seu telefone iOS ou Android e conecte-se à mesma rede sem fio que seu computador. No Android, use o aplicativo Expo para escanear o código QR de seu terminal para abrir seu projeto. No iOS, use o leitor de código QR integrado do aplicativo Câmera

---

**React Native CLI** - É a Interface de linha de comando, para configurar com ele você precisa do Node, React Native CLI, de um JDK e do Android Studio.

Você precisará instalar o Android Studio para configurar as ferramentas necessárias para construir seu aplicativo React Native para Android, mesmo que utilize outro editor.

#### Dependências

- **Nodejs**
- **NPM | Yarn**
- **Java SDK**
- **Android Studio | Dependências**

Para criar e executar nossos projetos React Native, utilizaremos os comandos do react-native-cli via npx.

- Instalação do **cURL**

```bash
sudo apt-get install curl
```

- Instalação do **Nodejs**, pode utilizar o [nvm](https://github.com/nvm-sh/nvm#about) para gerenciar versões do node.

```bash
# Usando Ubuntu
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Usando Debian, como root
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
```

- Instalação do **Yarn**

```bash
sudo npm install --global yarn
```

- Instalando **JDK 11** | (Java Development Kit )

```bash
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-11-jdk
```

#### Configurando variáveis de ambiente

É necessários criar algumas variáveis de ambiente no S.O nesse caso será utilizado o arquivo `~/.zshrc` devido utilizar o Zsh shell, adicione essas seis linhas no arquivo (de preferência no início):

- Anote o caminho da JDK e crie a pasta `~/Android/Sdk` para correta configuração abaixo.

```bash
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Android Studio

- [Download](https://developer.android.com/studio/) do Android Studio.
- Extração da pasta `android-studio` no `~/`.
- Adicione a variável de ambiente.

```bash
# possibilitado o uso do comando studio.sh
 export PATH=$PATH:~/android-studio/bin
```

execute o comando:

```bash
studio.sh
```

Será iniciado o wizard de instalação do android studio, apartir daqui segue a instalação com configuração custom de acordo com caminho do sdk e android/sdk, habilitando também android sdk, android virtual device, android sdk platform...

- Caso equipamento tenha suporte realize a instalação do KVM (Kernel-mode Virtual Machine) que ajuda na peformance do emulador.

```bash
# instalação
sudo apt install qemu-kvm

# add user no kvm group
sudo adduser $USER kvm

# checa se existe o user config.
grep kvm /etc/group
```

## Emulador

Em sistema Win e Linux é possivel utilizar emulador android e executar a aplicação nele, para emular IOS você precisa de um Macbook e/ou utilizar **Expo**.

### ADV Manager

O Android Studio possui o um gerenciador de Emulador, realize a configuração de um aparelho com android Q e com logo da play store para melhor compatibilidade, uma vez configurado aparecera o dissitivo disponivel para utilizar atráves do botão > play verde, ao clicar o emulador é exibido na tela simulando o dispositvo escolhido.

No terminal utiliza o comando

```bash
# mostra a lista de dispositivos android
adb devices

##
List of devices attached
emulator-5554	device

```

## Criando e Executando projeto no emulador

- Criando projeto

```bash
npx react-native init nomedoprojeto

# com typescript
npx react-native init nomedoprojeto --template react-native-template-typescript
```

- Com o emulador aberto, basta abrir dois terminais.
- Um para executar o Metro Bundler.
- Outro para instalar o app.

```bash
# terminal 1
npm start
# Ou yarn start

# terminal 2
npx react-native run-android

# Ou yarn run react-native run-android
# Ou yarn android
```

O app irá executar no emulador selecionado, para realizar o emulador no equipamento fisico é necessario habilitar o modo depuração no Smartphone e realizar mesmo passos anteriores, porém dessa vez com apenas o dispositivo fisico.
