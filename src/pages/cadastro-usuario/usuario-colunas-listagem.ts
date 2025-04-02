import {TipoDadoEnum} from "@/enum/root-enum";
import {Coluna} from "@/type/root/root-types";

export const usuarioConlunasListagem: Coluna[] = [
    {
        descricao: 'Nome',
        field: 'nome',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Email',
        field: 'email',
        tipoDado: TipoDadoEnum.DECIMAL,
    },
    {
        descricao: 'CPF',
        field: 'cpf',
        tipoDado: TipoDadoEnum.STRING,
    },
]