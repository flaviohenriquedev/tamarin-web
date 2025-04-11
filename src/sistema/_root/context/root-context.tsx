'use client'

import { usePathname } from 'next/navigation'
import { createContext, ReactNode, useEffect, useState } from 'react'
import {rotas} from "@/sistema/recursos-humanos/rotas";
import {RouteType} from "@/sistema/_root/types/root-types";

type Props = {
    paginaAberta: RouteType
}

export const RootContext = createContext<Props>({
    paginaAberta: {title: '', icon: <></>}
})

export const RootContextProvider = ({ children }: { children: ReactNode }) => {
    const [paginaAberta, setPaginaAberta] = useState<RouteType>({title: '', icon: <></>})

    const pathname = usePathname()

    useEffect(() => {
        const rotaAtual = rotas.find((rota) => rota.href === pathname)
        if (rotaAtual) {
            setPaginaAberta(rotaAtual)
            return
        }
        setPaginaAberta({title: '', icon: <></>})
    }, [pathname])

    return (
        <RootContext.Provider value={{ paginaAberta }}>
            {children}
        </RootContext.Provider>
    )
}
