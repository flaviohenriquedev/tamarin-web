'use client'

import {InputString} from "@/componentes/data-input/input/input-string";
import {useState} from "react";
import {Autenticacao} from "@/root/entidades/Autenticacao";
import {LabelContainer} from "@/componentes/data-display/label-container/label-container";
import {Button} from "@/componentes/action/button";
import {LineContainer} from "@/componentes/data-display/line-container/line-container";

export function ComponenteLogin() {

    const [autenticacao, setAutenticacao] = useState<Autenticacao>(new Autenticacao());

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 h-full`}>

            <div className={`flex`}>

            </div>

            <div className={`flex w-full h-full p-10`}>
                <form className={`flex w-full h-full flex-col p-4`}>

                    <div>
                        Tela de login
                    </div>

                    <LabelContainer descricao={`Email`}>
                        <InputString
                            entidade={autenticacao}
                            atributo={`email`}
                            type={"email"}/>
                    </LabelContainer>

                    <LabelContainer descricao={`Senha`}>
                        <InputString
                            entidade={autenticacao}
                            atributo={`senha`}
                            type={`password`}/>
                    </LabelContainer>
                    <LineContainer>
                        <Button descricao={`Entrar`}/>
                    </LineContainer>
                </form>
            </div>
        </div>
    )
}