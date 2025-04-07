'use client'

import {ReactNode, useContext} from "react";
import {RootContext} from "@/sistema/_root/context/root-context";
import {HeaderApp} from "@/componentes/layout/app/header";
import {Sidebar} from "@/componentes/layout/app/sidebar/sidebar";

export default function LoadingAdmin({children}: { children: ReactNode }) {
    const {paginaAberta} = useContext(RootContext);

    return (
        <div className={`w-full h-full`}>
            <div className={`container-app`}>
               <Sidebar />
                <div className={`container-pagina`}>
                    <HeaderApp nomePagina={paginaAberta}/>

                    <main className={`conteudo-pagina p-5 overflow-y-scroll h-screen pb-50`}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}