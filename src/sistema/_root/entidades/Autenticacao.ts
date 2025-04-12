import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/ts/usuario";

export class Autenticacao {
    email: string;
    senha: string;
    token: string;
    usuario: Usuario;

    constructor() {
    }
}