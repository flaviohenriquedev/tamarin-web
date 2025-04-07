import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/elementos/usuario";

export class Autenticacao {
    email: string;
    senha: string;
    token: string;
    usuario: Usuario;

    constructor() {
    }
}