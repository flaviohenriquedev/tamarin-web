import {EndPoint} from "@/type/root/root-types";
import {MetodoHTTP} from "@/enum/root-enum";

const rotas: EndPoint = {
    login: {
        caminho: '/auth/login',
        metodo: MetodoHTTP.POST
    }
}

export const authEndpoint: EndPoint = {
    ...rotas
}