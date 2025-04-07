'use client'

import {FormEvent} from "react";
import {useRouter} from "next/navigation";
import {LabelContainer} from "@/componentes/data-display/label-container/label-container";
import {InputString} from "@/componentes/data-input/input/input-string";
import {LineContainer} from "@/componentes/data-display/line-container/line-container";
import {Button} from "@/componentes/action/button";
import {signIn} from "next-auth/react";
import {toast} from "react-toastify";
import {Autenticacao} from "@/sistema/_root/entidades/Autenticacao";

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
        <form onSubmit={handleSubmit} className={`flex w-full h-full flex-col p-4`}>
            <div>Tela de login</div>

            <LabelContainer descricao={`Email`}>
                <InputString entidade={autenticacao} atributo={`email`} name={`email`} type={"email"}/>
            </LabelContainer>

            <LabelContainer descricao={`Senha`}>
                <InputString entidade={autenticacao} atributo={`senha`} name={`senha`} type={`password`}/>
            </LabelContainer>

            <LineContainer>
                <Button descricao={`Entrar`}/>
            </LineContainer>
        </form>
    );
}
