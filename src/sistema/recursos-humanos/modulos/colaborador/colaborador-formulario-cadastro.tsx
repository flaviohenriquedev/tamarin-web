import {LabelContainer} from "@/componentes/data-display/label-container/label-container";
import {InputString} from "@/componentes/data-input/input/input-string";
import {LineContent} from "@/componentes/ui/line-content/line-content";
import {Colaborador} from "@/sistema/recursos-humanos/modulos/colaborador/elementos/colaborador";

type Props = {
    colaborador: Colaborador;
}

export function ColaboradorFormularioCadastro({colaborador}: Props) {
    return (
        <>
            <LineContent>
                <LabelContainer descricao={`Nome Usuário`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`Nome Completo`}
                        atributo={`nomeCompleto`}/>
                </LabelContainer>
                <LabelContainer descricao={`CPF`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`CPF`}
                        maxLength={11}
                        atributo={`cpf`}/>
                </LabelContainer>
                <LabelContainer descricao={`Email`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`Email Válido`}
                        atributo={`email`}
                        type={`email`}/>
                </LabelContainer>
            </LineContent>

            <LineContent>
                <LabelContainer descricao={`Data Nascimento`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`Data de Nascimento`}
                        atributo={`dataNascimento`}
                        type={`date`}/>
                </LabelContainer>
                <LabelContainer descricao={`CPF`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`CPF`}
                        maxLength={11}
                        atributo={`cpf`}/>
                </LabelContainer>
                <LabelContainer descricao={`Email`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`Email Válido`}
                        atributo={`email`}
                        type={`email`}/>
                </LabelContainer>
            </LineContent>
        </>
    )
}
