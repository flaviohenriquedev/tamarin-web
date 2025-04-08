'use client'

import { usePathname } from 'next/navigation'
import { createContext, ReactNode, useEffect, useState } from 'react'
import {rotas} from "@/sistema/_root/constantes/rotas";
import {RouteType} from "@/root/type/route-type";

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
        }
    }, [pathname])

    return (
        <RootContext.Provider value={{ paginaAberta }}>
            {children}
        </RootContext.Provider>
    )
}
