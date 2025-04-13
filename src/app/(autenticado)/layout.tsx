'use client'

import {ReactNode, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Sidebar} from "@/componentes/layout/app/sidebar/sidebar";
import {rotasRecursosHumanos} from "@/sistema/recursos-humanos/rotas-recursos-humanos";
import {HeaderApp} from "@/componentes/layout/app/header/header";
import {NomeCliente} from "@/componentes/layout/app/nome-cliente/nome-cliente";

export default function LayoutAutenticacao({ children }: { children: ReactNode }) {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.replace("/login");
        }
    }, [status, router]);

    if (status === "loading" || status === 'unauthenticated') return null;
    return (
        <div className={`container-aplicacao`}>
            <div className={`area-nome-cliente border border-base-200/70`}>
                <NomeCliente />
            </div>

            <div className={`area-header-aplicacao border border-base-200/70`}>
                <HeaderApp />
            </div>

            <div className={`area-menu-lateral border border-base-200/70`}>
                <Sidebar routes={rotasRecursosHumanos}/>
            </div>

            <div className={`area-conteudo border border-base-200/70`}>
                {children}
            </div>
        </div>
    );
}
