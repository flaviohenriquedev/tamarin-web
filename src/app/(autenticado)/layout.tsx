'use client'

import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {Sidebar} from "@/componentes/layout/app/sidebar/sidebar";
import {rotasRecursosHumanos} from "@/sistema/recursos-humanos/rotas-recursos-humanos";
import {HeaderApp} from "@/componentes/layout/app/header/header";

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
        <div className={`container-app`}>
            <Sidebar routes={rotasRecursosHumanos}/>
            <div className={`container-pagina`}>
                <HeaderApp />
                <main className={`conteudo-pagina p-5 pb-50`}>
                    {children}
                </main>
            </div>
        </div>
    );
}
