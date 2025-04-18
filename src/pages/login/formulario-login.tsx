'use client'

import {FormEvent} from "react";
import {useRouter} from "next/navigation";
import {LabelContainer} from "@/componentes/ui/data-display/label-container/label-container";
import {InputString} from "@/componentes/ui/data-input/input/input-string";
import {Button} from "@/componentes/ui/action/button";
import {signIn} from "next-auth/react";
import {toast} from "react-toastify";
import {Autenticacao} from "@/sistema/_root/entidades/Autenticacao";
import {LineContent} from "@/componentes/ui/data-display/line-content/line-content";
import {LineContentFill} from "@/componentes/ui/data-display/line-content/line-content-fill";

export function FormularioLogin() {
    const router = useRouter();
    const autenticacao = new Autenticacao();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const result = await signIn('credentials', {
            email: autenticacao.email,
            senha: autenticacao.senha,
            redirect: false
        })
        if (result?.error) {
            return toast.error('Usuário e/ou Senha incorretos.')
        }
        router.replace("/adm")
    }

    return (
        <form onSubmit={handleSubmit} className={`flex w-full h-full flex-col p-10 rounded-sm`}>
            <span className={`text-[20pt] font-bold`}>Login</span>

            <LabelContainer descricao={`Email`}>
                <InputString entidade={autenticacao} atributo={`email`} name={`email`} type={"email"}/>
            </LabelContainer>

            <LabelContainer descricao={`Senha`}>
                <InputString entidade={autenticacao} atributo={`senha`} name={`senha`} type={`password`}/>
            </LabelContainer>

            <LineContentFill className={`mt-5`}>
                <Button descricao={`Entrar`}/>
            </LineContentFill>
        </form>
    );
}
