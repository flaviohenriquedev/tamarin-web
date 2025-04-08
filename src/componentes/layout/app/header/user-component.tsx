'use client'

import {IoKeyOutline} from "react-icons/io5";
import {RxExit} from "react-icons/rx";
import React, {useState} from "react";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import {closeModal, openModal} from "@/componentes/data-display/modal/modal-funcoes";
import Profile from "../../../../../public/profile.jpg";
import Image from "next/image";

interface Props {
    nomeUsuario?: string
}

export const UserComponent = ({nomeUsuario}: Props) => {

    const [senhaAtual, setSenhaAtual] = useState<string>('')
    const [novaSenha, setNovaSenha] = useState<string>('')
    const [confirmarNovaSenha, setConfirmarNovaSenha] = useState<string>('')

    const [alterarSenha, setAlterarSenha] = useState<string>()

    const route = useRouter()

    function abrirModalAlterarSenha() {
        openModal('alterar_senha')
        setSenhaAtual('')
        setNovaSenha('')
        setConfirmarNovaSenha('')
    }

    const handleSubmitAlterarSenha = () => {
        // if (!senhaAtual || !novaSenha || !confirmarNovaSenha) {
        //     return;
        // }
        // if (novaSenha !== confirmarNovaSenha) {
        //     toast.error("As novas senhas informadas são diferentes!");
        // } else {
        //     alterarSenhaUsuario(senhaAtual, novaSenha)
        //         .then((response) => {
        //             toast.success(response.data.mensagem);
        //             closeModal(`alterar_senha`)
        //         })
        //         .catch((error) => {
        //             toast.error(error.response.data.mensagem);
        //         });
        // }
        closeModal('alterar_senha')
        console.log('alterar_senha')
    };

    async function logout() {
        await signOut({redirect: false})
        route.replace("/")
    }

    return (
        <>
            <div className="flex items-center relative">

                <div className="dropdown dropdown-end">
                    <div className={`flex gap-2 items-center`}>
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar placeholder online"
                        >
                            <div className={`
                                        bg-neutral-focus
                                        text-neutral-content
                                        rounded-full
                                        w-10
                            `} id="avatar_content">
                                <Image src={Profile} alt="profile_picture" id="avatar_image"/>
                            </div>
                        </label>
                    </div>
                    <div tabIndex={0}
                         className="dropdown-content z-[1] card card-compact w-64 bg-base-100 text-base-content shadow-sm border-2 border-base-200">
                        <div className="card-body">
                            <ul className={`flex flex-col`}
                            >
                                <div className={`flex flex-col`}>
                                    {/*<div*/}
                                    {/*    className={`flex gap-2 items-center p-2 rounded-lg hover:cursor-pointer hover:bg-base-200`}*/}
                                    {/*    onClick={() => openModal('seletor_de_temas')}>*/}
                                    {/*    <div>*/}
                                    {/*        <PiGear/>*/}
                                    {/*    </div>*/}
                                    {/*    <span>Configurações</span>*/}
                                    {/*</div>*/}

                                    {/*<div className="divider text-base-100"></div>*/}
                                    <div onClick={abrirModalAlterarSenha}
                                         className={`flex gap-2 items-center p-2 rounded-lg hover:cursor-pointer hover:bg-base-200`}>
                                        <div>
                                            <IoKeyOutline/>
                                        </div>
                                        <span>Alterar Senha</span>
                                    </div>
                                    <div onClick={logout}
                                         className={`flex gap-2 items-center p-2 rounded-lg hover:cursor-pointer hover:bg-base-200`}>
                                        <div>
                                            <RxExit/>
                                        </div>
                                        <span>Sair</span>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*<Modal idModal={`alterar_senha`}>*/}
            {/*    <LineContent>*/}
            {/*        <LabelContainer descricao={`Senha atual`}>*/}
            {/*            <InputString onChange={(e) => setSenhaAtual(e.target.value)} type={`password`}*/}
            {/*                         entidade={alterarSenha}*/}
            {/*                         value={senhaAtual}*/}
            {/*                         typeof={`password`}*/}
            {/*                         autoComplete={`off`}/>*/}
            {/*        </LabelContainer>*/}
            {/*    </LineContent>*/}
            {/*    <div className="divider text-base-100"></div>*/}
            {/*    <LineContent>*/}
            {/*        <LabelContainer descricao={`Nova senha`}>*/}
            {/*            <InputString onChange={(e) => setNovaSenha(e.target.value)} type={`password`}*/}
            {/*                         value={novaSenha}*/}
            {/*                         typeof={`password`}*/}
            {/*                         autoComplete={`off`}/>*/}
            {/*        </LabelContainer>*/}
            {/*    </LineContent>*/}
            {/*    <LineContent>*/}
            {/*        <LabelContainer descricao={`Confirmar nova senha`}>*/}
            {/*            <InputString onChange={(e) => setConfirmarNovaSenha(e.target.value)} type={`password`}*/}
            {/*                         value={confirmarNovaSenha}*/}
            {/*                         typeof={`password`}*/}
            {/*                         autoComplete={`off`}/>*/}
            {/*        </LabelContainer>*/}
            {/*    </LineContent>*/}

            {/*    <LineContent>*/}
            {/*        <Button identifier={`Alterar`} className={`w-full`} onClick={handleSubmitAlterarSenha}/>*/}
            {/*    </LineContent>*/}
            {/*</Modal>*/}
        </>
    );
};
