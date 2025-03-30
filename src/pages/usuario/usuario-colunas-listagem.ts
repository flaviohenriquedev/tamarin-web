import {TipoDadoEnum} from "@/enum/root-enum";
import {Coluna} from "@/type/root/root-types";

export const usuarioConlunasListagem: Coluna[] = [
    {
        descricao: 'Nome',
        field: 'nome',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Idade',
        field: 'idade',
        tipoDado: TipoDadoEnum.DECIMAL,
    },
]