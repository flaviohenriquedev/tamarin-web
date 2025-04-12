'use client'

import {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import {BreadcrumbContextProvider} from "@/sistema/_root/context/breadcrumb-context";

export function Providers({children}: { children: ReactNode }) {
    return (
        <SessionProvider>
            <BreadcrumbContextProvider>
                {children}
            </BreadcrumbContextProvider>
        </SessionProvider>
    )
}