import {MetodoHTTP, TipoDadoEnum} from "@/sistema/_root/enums/root-enum";
import {ReactNode} from "react";

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
    urlFotoPerfil?: string;
    tipoDado: TipoDadoEnum;
}

export type RouteType = {
    title: string
    icon: ReactNode
    href?: string
    subRoute?: SubRoute[]
}

export type SubRoute = {
    title: string,
    href?: string,
    subRoute?: SubRoute[]
}

export type Tab = {
    title: string
    content: ReactNode
}
