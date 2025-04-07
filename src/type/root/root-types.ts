import {MetodoHTTP, TipoDadoEnum} from "@/sistema/_root/enums/root-enum";

export type EndPoint = {
    listar?: DetalheEndPoint;
    salvar?: DetalheEndPoint;
    editar?: DetalheEndPoint;
    excluir?: DetalheEndPoint;
} & {
    [key: string]: DetalheEndPoint;
};

export type DetalheEndPoint = {
    caminho: string;
    metodo: MetodoHTTP;
}

export type Coluna = {
    descricao: string;
    field: string;
    tipoDado: TipoDadoEnum;
}