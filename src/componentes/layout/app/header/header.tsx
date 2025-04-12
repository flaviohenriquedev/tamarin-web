import {UserComponent} from "@/componentes/layout/app/header/user-component";

export function HeaderApp() {
    return (
        <header className={`navbar-app px-8 bg-base-200`}>
            <div className={'usuario-componente'}>
                <UserComponent />
            </div>
        </header>
    )
}