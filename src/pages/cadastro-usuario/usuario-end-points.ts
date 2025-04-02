import {EndPoint} from "@/type/root/root-types";
import {MetodoHTTP} from "@/enum/root-enum";

const rotas: EndPoint = {
    rotaAlternativa: {
        caminho: '/usuario/:id',
        metodo: MetodoHTTP.POST
    }
}

export const usuarioEndPoints: EndPoint = {
    ...rotas,
    listar: {
        caminho: '/usuario',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: '/usuario',
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: (id: string) => `usuario/${id}`,
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: (id: string) => `usuario/${id}`,
        metodo: MetodoHTTP.DELETE
    }
}