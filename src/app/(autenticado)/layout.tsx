import {ReactNode} from "react";
import {LayoutSistema} from "@/pages/layout-sistema/layout-sistema";

export default function LayoutAdm({children}: {children: ReactNode}) {
    return (
        <LayoutSistema>
            {children}
        </LayoutSistema>
    )
}