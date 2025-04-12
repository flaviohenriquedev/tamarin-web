import {EntidadePadrao} from "@/sistema/_root/entidades/EntidadePadrao";
import {Cliente} from "@/sistema/recursos-humanos/modulos/cliente/ts/cliente";

export class EntidadeCliente extends EntidadePadrao {
    cliente: Cliente;

    constructor() {
        super();
    }
}