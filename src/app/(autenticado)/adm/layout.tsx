'use client'

import {ReactNode} from "react";
import {HeaderApp} from "@/componentes/layout/app/header/header";
import {Sidebar} from "@/componentes/layout/app/sidebar/sidebar";

export default function LoadingAdmin({children}: { children: ReactNode }) {

    return (
        <div className={`w-full h-full`}>
            <div className={`container-app`}>
               <Sidebar />
                <div className={`container-pagina`}>
                    <HeaderApp />

                    <main className={`conteudo-pagina p-5 overflow-y-scroll h-screen pb-50`}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}