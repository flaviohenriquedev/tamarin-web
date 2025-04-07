'use client'

import { usePathname } from 'next/navigation'
import { createContext, ReactNode, useEffect, useState } from 'react'
import {rotas} from "@/sistema/_root/constantes/rotas";

type Props = {
    paginaAberta: string
}

export const RootContext = createContext<Props>({
    paginaAberta: ''
})

export const RootContextProvider = ({ children }: { children: ReactNode }) => {
    const [paginaAberta, setPaginaAberta] = useState<string>('')

    const pathname = usePathname()

    useEffect(() => {
        const rotaAtual = rotas.find((rota) => rota.href === pathname)
        if (rotaAtual) {
            setPaginaAberta(rotaAtual.title)
        } else {
            setPaginaAberta('Página')
        }
    }, [pathname])

    return (
        <RootContext.Provider value={{ paginaAberta }}>
            {children}
        </RootContext.Provider>
    )
}
