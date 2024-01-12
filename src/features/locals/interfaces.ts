export interface UF {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
}

export interface City {
  id: number;
  nome: string;
  microrregiao: {
    id: number;
    nome: string;
    mesorregiao: {
      id: number;
      nome: string;
      UF: {
        id: number;
        nome: string;
        sigla: string;
        regiao: {
          id: number;
          nome: string;
          sigla: string;
        };
      };
    };
  };
}
