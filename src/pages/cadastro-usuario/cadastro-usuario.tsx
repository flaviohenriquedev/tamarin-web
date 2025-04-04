'use client'

import {Button} from "@/componentes/action/button";
import {FormEvent, useEffect, useState} from "react";
import {Usuario} from "@/pages/cadastro-usuario/entidade/Usuario";
import {LabelContainer} from "@/componentes/data-display/label-container/label-container";
import {LineContainer} from "@/componentes/data-display/line-container/line-container";
import {InputString} from "@/componentes/data-input/input/input-string";
import {UsuarioService} from "@/pages/cadastro-usuario/usuario-service";
import {Table} from "@/componentes/data-display/table/table";
import {usuarioConlunasListagem} from "@/pages/cadastro-usuario/usuario-colunas-listagem";

const usuarioService = new UsuarioService();

export function CadastroUsuario() {

    const [usuario, setUsuario] = useState<Usuario>(new Usuario());
    const [listaUsuario, setListaUsuario] = useState<Usuario[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        usuarioService.listar().then(result => {
            setListaUsuario(result)
            console.log(result)
        });
    }, [atualizarLista]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        usuarioService.salvar(usuario).then(_ => {
            setUsuario(new Usuario())
            setAtualizarLista(!atualizarLista)
        });
    }

    function handleEditar(entidade: Usuario) {
        setUsuario(entidade);
    }

    function handleDeletar(entidade: Usuario) {
        usuarioService.deletar(entidade).then();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <LineContainer>
                    <LabelContainer descricao={`Nome Usuário`}>
                        <InputString
                            entidade={usuario}
                            atributo={`nome`}/>
                    </LabelContainer>

                    <LabelContainer descricao={`Email`}>
                        <InputString
                            entidade={usuario}
                            atributo={`nome`}
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