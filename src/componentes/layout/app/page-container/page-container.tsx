import {FormEvent, ReactNode, useEffect, useState} from "react";
import {LineContent} from "@/componentes/ui/data-display/line-content/line-content";
import {Button} from "@/componentes/ui/action/button";
import {HiOutlinePlus} from "react-icons/hi2";
import {Modal} from "@/componentes/ui/data-display/modal/modal";
import {closeModal, openModal} from "@/componentes/ui/data-display/modal/modal-funcoes";
import {EntidadePadrao} from "@/sistema/_root/entidades/EntidadePadrao";
import {Breadcrumb} from "@/componentes/ui/data-display/navigation/breadcrumb/breadcrumb";

type Props<T extends EntidadePadrao> = {
    children: ReactNode,
    tituloPersonalizadoBotaoNovoCadastro?: string,
    formularioCadastro?: ReactNode,
    onSave: {
        funcaoSalvar: () => Promise<T | null>;
        callBack: () => void;
    },
    onModalOpen?: () => void
}

export function PageContainer<T extends EntidadePadrao>({
                                                            children,
                                                            tituloPersonalizadoBotaoNovoCadastro,
                                                            formularioCadastro,
                                                            onSave,
                                                            onModalOpen
                                                        }: Props<T>) {

    const [idModal, setIdModal] = useState<string>('')

    const generateIdModal = () => {
        setIdModal(Math.random().toString(36))
    }

    useEffect(() => {
        generateIdModal()
    }, [])

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        onSave.funcaoSalvar().then(() => {
            onSave.callBack();
            closeModal(idModal);
        })
    }

    return (
        <>
            <div className={`conteudo-pagina-cabecalho`}>
                <div className={`conteudo-pagina-cabecalho-pagina-aberta`}>
                    <Breadcrumb />
                </div>
                <div className={`conteudo-pagina-cabecalho-acoes`}>
                    <Button type={'button'}
                            onClick={() => {
                                openModal(idModal);
                                onModalOpen?.();
                            }}
                            descricao={
                                tituloPersonalizadoBotaoNovoCadastro
                                    ? tituloPersonalizadoBotaoNovoCadastro
                                    : 'Novo Cadastro'
                            } icone={<HiOutlinePlus size={20}/>}/>
                </div>
            </div>

            <div className={`conteudo-pagina-children`}>{children}</div>

            <Modal idModal={`${idModal}`}>
                <form onSubmit={onSubmit}>
                    {formularioCadastro}

                    <LineContent justifyContent={`end`}>
                        <Button
                            type={'submit'}
                            descricao={'Salvar'}/>
                    </LineContent>
                </form>
            </Modal>
        </>
    )

}