import {ReactNode} from "react";

type PropsLayoutSistema = {
    children: ReactNode
}

export function LayoutSistema({children}: PropsLayoutSistema) {
    return (
        <main className={`grid grid-cols-1 grid-rows-2 gap-1`}>

            <header className={`
                fixed
                flex
                items-center
                px-4
                bg-primary
                min-h-16
                min-w-full
            `}>CABEÇALHO
            </header>

            <div className={`grid grid-cols-12 pt-16`}>
                <div className={`hidden md:block md:col-start-1 md:col-end-2`}>
                    Sidebar
                </div>
                <div className={`col-start-3 col-end-13`}>
                    {children}
                </div>
            </div>


        </main>
    )
}