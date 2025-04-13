'use client'

import {usePathname} from "next/navigation";
import {formarBreadcrumb} from "@/componentes/ui/data-display/navigation/breadcrumb/ts/formar-breadcrumb.tsx";
import {rotasRecursosHumanos} from "@/sistema/recursos-humanos/rotas-recursos-humanos";
import {icones as icone} from "@/sistema/_root/icones/_index";

export function Breadcrumb() {

    const pathname = usePathname();
    const breadcrumbs = formarBreadcrumb(pathname, rotasRecursosHumanos);

    function renderData() {
        return (
            breadcrumbs && breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.title} className={`flex items-center ${pathname === breadcrumb.href ? 'text-primary' : 'text-base-content/40'}`}>
                    <div className={`flex items-center gap-2 p-2 ${pathname === breadcrumb.href ? 'text-sm' : 'text-xs'}`}>
                        {breadcrumb.icon}
                        {breadcrumb.title}
                    </div>
                    {index+1 < breadcrumbs.length && <span><icone.setaParaDireita/></span>}
                </li>
            ))
        )
    }

    return (
        <div>
            <ul className={`flex`}>
                {renderData()}
            </ul>
        </div>
    )
}