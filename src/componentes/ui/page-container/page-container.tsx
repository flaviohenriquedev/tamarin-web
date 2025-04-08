import {FormEvent, ReactNode, useEffect, useState} from "react";
import {LineContent} from "@/componentes/ui/line-content/line-content";
import {Button} from "@/componentes/action/button";
import {HiOutlinePlus} from "react-icons/hi2";
import {Modal} from "@/componentes/data-display/modal/modal";
import {closeModal, openModal} from "@/componentes/data-display/modal/modal-funcoes";

type Props = {
    children: ReactNode,
    tituloPersonalizadoBotaoNovoCadastro?: string,
    formularioCadastro?: ReactNode,
    onSave: {funcaoSalvar: () => Promise<void>, callBack: () => void},
    onModalOpen?: () => void
}

export function PageContainer({
                                  children,
                                  tituloPersonalizadoBotaoNovoCadastro,
                                  formularioCadastro,
                                  onSave,
                                  onModalOpen
                              }: Props) {

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
            <LineContent justifyContent='end'>
                <Button type={'button'}
                        onClick={() => {
                            openModal(idModal);
                            onModalOpen?.(); // dispara o reset se existir
                        }}
                        descricao={
                            tituloPersonalizadoBotaoNovoCadastro
                                ? tituloPersonalizadoBotaoNovoCadastro
                                : 'Novo Cadastro'
                        } icone={<HiOutlinePlus size={20}/>}/>
            </LineContent>

            {children}

            <Modal idModal={`${idModal}`}>
                <form onSubmit={onSubmit}>
                    {formularioCadastro}

                    <LineContent>
                        <Button
                            type={'submit'}
                            descricao={'Salvar'}/>
                    </LineContent>
                </form>
            </Modal>
        </>
    )

}