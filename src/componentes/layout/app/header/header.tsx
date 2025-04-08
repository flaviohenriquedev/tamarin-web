import {useContext} from "react";
import {RootContext} from "@/sistema/_root/context/root-context";
import {UserComponent} from "@/componentes/layout/app/header/user-component";

export function HeaderApp() {
    const {paginaAberta} = useContext(RootContext);

    return (
        <header className={`navbar-app px-8 bg-base-200`}>
            <div className={`nome-pagina flex items-center gap-4`}>
                {paginaAberta.icon}
                <label className={'text-lg font-[400]'}>{paginaAberta.title}</label>
            </div>
            <div className={'usuario-componente'}>
                <UserComponent />
            </div>
        </header>
    )
}