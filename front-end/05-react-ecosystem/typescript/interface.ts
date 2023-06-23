// interface descrevem estrutura de objetos.

// Você ter o controle de propriedades para melhor controle como : readonly - somente leitura | ? - usado para propriedade opcional

// extends é usado para extender interface ( herança )

// quando um método é definido como opcional, ele pode ser undefined, nesse caso é necessário checa se ele existe

interface Game {
  id?: string | number;
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilar?: (title: string) => void;
}

const tlou: Game = {
  id: 528,
  title: "The Last Of Us",
  description: "The Best game  in the World",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilar: (title) => {
    console.log(`Similar game to ${title}: Uncharted, A plague Tale, Metro`);
  },
};

if (tlou.getSimilar) tlou.getSimilar(tlou.title);

//estendendo Game a DLC
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: "The Last Of Us - Left Behind",
  description: "You Play Ellie before the original game",
  genre: "Action",
  platform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"],
};

// criação de class baseado em interface - nesse caso a classe precisa implementar o que tiver na interface.
class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
