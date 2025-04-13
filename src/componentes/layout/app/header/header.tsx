import {UserComponent} from "@/componentes/layout/app/header/user-component";

export function HeaderApp() {
    return (
        <header className={`flex h-full justify-end px-8`}>
            <UserComponent />
        </header>
    )
}