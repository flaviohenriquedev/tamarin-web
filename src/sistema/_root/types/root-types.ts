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
    icon?: ReactNode
    href?: string
    breadcrumbRef: string
    subRoute?: RouteType[]
}

export type Tab = {
    title: string
    content: ReactNode
}

export type BreadcrumbType = {
    title: string;
    icon?: ReactNode
    href?: string
}
