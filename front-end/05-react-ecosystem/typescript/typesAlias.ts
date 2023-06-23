// type Alias são definição de tipos personalizados.
type Uid = string | number; // definindo 2 tipos para o uid.

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

console.log(logDetails(100, "PS5"));

// Podemos também definir quais exatamente são as opções aceitas no type alias.
type ConsolePlatform = "PS5" | "Xbox" | "PC";

function renderConsoleType(consolePlatform: ConsolePlatform) {
  console.log(`The Console é ${consolePlatform}`);
}

renderConsoleType("PS5");

// Criando type mais complexos - AccountInfo
type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 254,
  name: "Nascimento",
  email: "nascimento.dev.io@gmail.com",
};

// CharInfo

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "Nscmnt",
  level: 125,
};

// Criando um type com a intersecção dos tipos anteriores.
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 254,
  name: "Loki",
  nickname: "lksCat",
  level: 124,
};
