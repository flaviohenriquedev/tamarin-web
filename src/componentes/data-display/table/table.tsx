import {Coluna} from "@/type/root/root-types";
import {EntidadePadrao} from "@/entidades/root/EntidadePadrao";
import {Modal} from "@/componentes/data-display/modal/modal";
import {Button} from "@/componentes/action/button";
import {closeModal, openModal} from "@/componentes/data-display/modal/modal-funcoes";
import {useCallback, useState} from "react";

type Props<E extends EntidadePadrao> = {
    lista: E[];
    colunas: Coluna[];
    funcaoEditar?: (entidade: E) => void;
    funcaoDeletar?: (entidade: E) => void;
}

export function Table<E extends EntidadePadrao>({lista, colunas, funcaoEditar, funcaoDeletar}: Props<any>) {
    const [entidadeParaDeletar, setEntidadeParaDeletar] = useState<E | null>(null);

    function renderHead() {
        return colunas ? colunas.map(coluna => {
            return <th key={coluna.descricao}>{coluna.descricao}</th>
        }) : <></>
    }

    const abrirConfirmacaoDeExclusao = useCallback(
        (entidade: E) => {
            setEntidadeParaDeletar(entidade);
            setTimeout(() => openModal("modal_delete"), 0);
        },
        []
    );

    function renderRow() {
        return lista && lista.length > 0 ? lista.map(item => {
            return (
                <tr key={item.id}>
                    {renderRowItem(item)}
                    {funcaoEditar && (
                        <td>
                            <button onClick={() => funcaoEditar(item)}
                                    className={`hover:cursor-pointer`}>Editar
                            </button>
                        </td>
                    )}

                    {funcaoDeletar && (
                        <td>
                            <button onClick={() => abrirConfirmacaoDeExclusao(item)}
                                    className={`hover:cursor-pointer`}>Excluir
                            </button>
                        </td>
                    )}
                </tr>
            )
        }) : <tr>
            <td>Nenhum dado encontrado</td>
        </tr>
    }

    function renderRowItem(row: any) {
        return colunas.map((coluna, index) => {
            return (
                <td key={index}>{row[coluna.field]}</td>
            )
        })
    }

    return (
        <>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    <thead>
                    <tr>
                        {renderHead()}
                    </tr>
                    </thead>
                    <tbody>
                    {renderRow()}
                    </tbody>
                </table>
            </div>

            {entidadeParaDeletar && (
                <Modal idModal="modal_delete">
                    <label>Tem certeza que deseja excluir esse registro?</label>
                    {funcaoDeletar && (
                        <Button descricao="Sim" onClick={() => funcaoDeletar(entidadeParaDeletar)} />
                    )}
                    <Button descricao="Não" tipoClasse="warning" onClick={() => closeModal(`modal_delete`)}/>
                </Modal>
            )}
        </>
    )
}