export interface Response {
    content: Array<Content>;
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    first: boolean;
    numberOfElements: number;
    sort: Sort;
    number: number;
    size: number;
    empty: boolean;
  }

  export interface Pageable {
    sort: Sort;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  }

  export interface Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  }

  export interface Content {
    id: number;
    nome: string;
    idade: number;
    sexo: string;
    vivo: boolean;
    urlFoto?: string;
    ultimaOcorrencia: UltimaOcorrencia;
  }

  export interface UltimaOcorrencia {
    dtDesaparecimento: string;
    dataLocalizacao?: any;
    encontradoVivo: boolean;
    localDesaparecimentoConcat: string;
    ocorrenciaEntrevDesapDTO?: OcorrenciaEntrevDesapDTO;
    listaCartaz?: any;
    ocoId: number;
  }

  export interface OcorrenciaEntrevDesapDTO {
    informacao: string;
    vestimentasDesaparecido: string;
  }