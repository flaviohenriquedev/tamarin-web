import {EntidadePadrao} from "@/sistema/_root/entidades/EntidadePadrao";

export class Usuario extends EntidadePadrao {
    nome: string;
    email: string;
    cpf: string;
    senha: string;
    token: string;

    constructor() {
        super();
    }
}