'use client'

import {FormEvent, useEffect, useState} from "react";
import {LineContainer} from "@/componentes/data-display/line-container/line-container";
import {LabelContainer} from "@/componentes/data-display/label-container/label-container";
import {InputString} from "@/componentes/data-input/input/input-string";
import {Button} from "@/componentes/action/button";
import {Table} from "@/componentes/data-display/table/table";
import {UsuarioService} from "@/sistema/recursos-humanos/modulos/usuario/elementos/usuario-service";
import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/elementos/usuario";
import {usuarioConlunasListagem} from "@/sistema/recursos-humanos/modulos/usuario/elementos/usuario-colunas-listagem";

const usuarioService = new UsuarioService();

export function UsuarioPaginaInicial() {

    const [usuario, setUsuario] = useState<Usuario>(new Usuario());
    const [listaUsuario, setListaUsuario] = useState<Usuario[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        usuarioService.listar().then(result => {
            setListaUsuario(result)
        });
    }, [atualizarLista]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        usuarioService.salvar(usuario).then(() => {
            setUsuario(new Usuario())
            setAtualizarLista(!atualizarLista)
        });
    }

    function handleEditar(entidade: Usuario) {
        setUsuario(entidade);
    }

    function handleDeletar(entidade: Usuario) {
        usuarioService.deletar(entidade.id).then();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <LineContainer>
                    <LabelContainer descricao={`Nome Usuário`}>
                        <InputString
                            entidade={usuario}
                            placeholder={`Nome Completo`}
                            atributo={`nome`}/>
                    </LabelContainer>

                    <LabelContainer descricao={`Email`}>
                        <InputString
                            entidade={usuario}
                            atributo={`email`}
                            type={`email`}/>
                    </LabelContainer>

                    <LabelContainer descricao={`CPF`}>
                        <InputString
                            entidade={usuario}
                            atributo={`cpf`}/>
                    </LabelContainer>
                </LineContainer>
                <LineContainer>
                    <Button descricao={`Salvar`}/>
                    <Button descricao={`Novo Cadastro`}
                            tipoClasse={`btn-warning`}
                            type={`button`}
                            onClick={() => setUsuario(new Usuario())}/>
                </LineContainer>
            </form>

            <Table colunas={usuarioConlunasListagem}
                   lista={listaUsuario}
                   funcaoEditar={handleEditar}
                   funcaoDeletar={handleDeletar}/>
        </div>
    )
}