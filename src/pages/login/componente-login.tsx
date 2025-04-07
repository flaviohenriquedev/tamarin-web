import {FormularioLogin} from "@/pages/login/formulario-login";

export function ComponenteLogin() {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 h-full`}>

            <div className={`flex`}>

            </div>
            <div className={`flex w-full h-full p-10`}>
                <FormularioLogin />
            </div>
        </div>
    )
}