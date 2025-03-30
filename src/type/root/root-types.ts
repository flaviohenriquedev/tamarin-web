import {MetodoHTTP, TipoDadoEnum} from "@/enum/root-enum";

export type EndPoint = {
    listar?: DetalheEndPoint;
    salvar?: DetalheEndPoint;
    editar?: DetalheEndPoint;
    excluir?: DetalheEndPoint;
} & {
    [key: string]: DetalheEndPoint;
};

export type DetalheEndPoint = {
    caminho: string | ((value: any) => string);
    metodo: MetodoHTTP;
}

export type Coluna = {
    descricao: string;
    field: string;
    tipoDado: TipoDadoEnum;
}