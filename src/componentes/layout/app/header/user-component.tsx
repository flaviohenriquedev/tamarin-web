'use client'

import {IoKeyOutline} from "react-icons/io5";
import {RxExit} from "react-icons/rx";
import React, {useState} from "react";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import {closeModal, openModal} from "@/componentes/ui/data-display/modal/modal-funcoes";
import Profile from "../../../../../public/profile.jpg";
import Image from "next/image";

interface Props {
    nomeUsuario?: string
}

export const UserComponent = ({nomeUsuario}: Props) => {

    const route = useRouter()

    function abrirModalAlterarSenha() {
        openModal('alterar_senha')
    }

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
        </>
    );
};
