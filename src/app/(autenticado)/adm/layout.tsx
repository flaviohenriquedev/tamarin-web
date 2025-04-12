import {ReactNode} from "react";
import {HeaderApp} from "@/componentes/layout/app/header/header";
import {Sidebar} from "@/componentes/layout/app/sidebar/sidebar";
import {rotasRecursosHumanos} from "@/sistema/recursos-humanos/rotas-recursos-humanos";

export default function LoadingAdmin({children}: { children: ReactNode }) {
    return (
        <div className={`w-full h-full`}>
            <div className={`container-app`}>
               <Sidebar routes={rotasRecursosHumanos}/>
                <div className={`container-pagina`}>
                    <HeaderApp />
                    <main className={`conteudo-pagina p-5 pb-50`}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}