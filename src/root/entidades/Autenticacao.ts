import {Usuario} from "@/pages/cadastro-usuario/entidade/Usuario";

export class Autenticacao {
    email: string;
    senha: string;
    token: string;
    usuario: Usuario;

    constructor() {
    }
}