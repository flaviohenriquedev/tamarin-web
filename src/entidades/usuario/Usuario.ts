import {EntidadePadrao} from "@/entidades/root/EntidadePadrao";

export class Usuario extends EntidadePadrao {
    public nome: string;
    public idade: number;

    constructor() {
        super();
    }
}