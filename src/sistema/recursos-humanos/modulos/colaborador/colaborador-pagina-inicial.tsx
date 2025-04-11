'use client'

import {useCallback, useEffect, useState} from "react";
import {PageContainer} from "@/componentes/layout/app/page-container/page-container";
import {Table} from "@/componentes/ui/data-display/table/table";
import {ColaboradorService} from "@/sistema/recursos-humanos/modulos/colaborador/elementos/colaborador-service";
import {Colaborador} from "@/sistema/recursos-humanos/modulos/colaborador/elementos/colaborador";
import {
    ColaboradorFormularioCadastro
} from "@/sistema/recursos-humanos/modulos/colaborador/colaborador-formulario-cadastro";
import {
    colaboradorConlunasListagem
} from "@/sistema/recursos-humanos/modulos/colaborador/elementos/colaborador-colunas-listagem";

const colaboradorService = new ColaboradorService();

export function ColaboradorPaginaInicial() {
    const [colaborador, setColaborador] = useState<Colaborador>(new Colaborador());
    const [listaColaboradores, setListaColaboradores] = useState<Colaborador[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        colaboradorService.listar().then(result => {
            setListaColaboradores(result)
        });
    }, [atualizarLista]);

    // function handleEditar(entidade: Colaborador) {
    //     setUsuario(entidade);
    // }

    function handleDeletar(entidade: Colaborador) {
        colaboradorService.deletar(entidade.id).then();
    }

    const funcaoSalvar = useCallback(() => colaboradorService.salvar(colaborador), [colaborador])
    const callBack = useCallback(() => setAtualizarLista(prev => !prev), [])

    const onSave = {funcaoSalvar, callBack}
    return (
        <PageContainer
            onSave={onSave}
            onModalOpen={() => setColaborador(new Colaborador())}
            formularioCadastro={<ColaboradorFormularioCadastro colaborador={colaborador}/>}>
            <Table colunas={colaboradorConlunasListagem}
                   lista={listaColaboradores}
                   funcaoDeletar={handleDeletar}/>
        </PageContainer>
    )
}
