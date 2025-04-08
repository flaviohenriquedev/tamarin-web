import {EntidadePadrao} from "@/sistema/_root/entidades/EntidadePadrao";

export class Colaborador extends EntidadePadrao {
    nomeCompleto: string;
    cpf: string;
    dataNascimento: Date;
    sexo: string;
    email: string;
    telefone: string;
    endereco: string;
    cargo: string;
    departamento: string;
    dataAdmissao: Date;
    dataDemissao: Date;
    salario: number;
    tipoContrato: string;
    observacoes: string;

    constructor() {
        super();
    }
}
