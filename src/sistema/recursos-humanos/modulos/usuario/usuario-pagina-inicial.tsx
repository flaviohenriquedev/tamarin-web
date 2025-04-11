'use client'

import {TabContainer} from "@/componentes/ui/data-display/tab/tab-container";
import {UsuarioTabCadastro} from "@/sistema/recursos-humanos/modulos/usuario/usuario-tab-cadastro";
import {Tab} from "@/sistema/_root/types/root-types";

const usuarioTabs: Tab[] = [
    {
        title: 'Cadastro',
        content: <UsuarioTabCadastro />
    },
    {
        title: 'Permissões',
        content: <div>Permissões</div>
    }
]

export function UsuarioPaginaInicial() {
    return (
        <TabContainer tabs={usuarioTabs} />
    )
}