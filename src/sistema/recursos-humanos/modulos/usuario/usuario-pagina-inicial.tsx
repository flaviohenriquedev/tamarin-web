'use client'

import {TabContainer} from "@/componentes/data-display/tab/tab-container";
import {Tab} from "@/root/type/route-type";
import {UsuarioTabCadastro} from "@/sistema/recursos-humanos/modulos/usuario/usuario-tab-cadastro";

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