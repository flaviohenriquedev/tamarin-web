import {LabelContainer} from "@/componentes/data-display/label-container/label-container";
import {InputString} from "@/componentes/data-input/input/input-string";
import {LineContent} from "@/componentes/ui/line-content/line-content";
import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/elementos/usuario";
import {Util} from "@/util/util";

type Props = {
    usuario: Usuario;
}

export function UsuarioFormularioCadastro({usuario}: Props) {
    return (
        <LineContent>
            <LabelContainer descricao={`Nome Usuário`}>
                <InputString
                    entidade={usuario}
                    placeholder={`Nome Completo`}
                    atributo={`nome`}/>
            </LabelContainer>

            <LabelContainer descricao={`Email`}>
                <InputString
                    entidade={usuario}
                    placeholder={`Email Válido`}
                    atributo={`email`}
                    type={`email`}/>
            </LabelContainer>

            <LabelContainer descricao={`CPF`}>
                <InputString
                    entidade={usuario}
                    placeholder={`CPF`}
                    maxLength={11}
                    atributo={`cpf`}/>
            </LabelContainer>
        </LineContent>
    )
}