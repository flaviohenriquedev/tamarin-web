'use client'

import {GiMonkey} from "react-icons/gi";

import {rotas} from "@/sistema/_root/constantes/rotas";

export function Desenvolvimento() {

    function renderListaDeRotas() {
        return rotas.map(rota => {
            return (
                <li key={rota.descricao} className={`
                            item-rota-menu
                            py-2
                            rounded-lg
                            
                            hover:bg-primary
                            hover:text-primary-content
                            hover:cursor-pointer`}>
                    <div className={`icone-rota-menu flex items-center justify-center`}>
                        {rota.icone}
                    </div>
                    <div className={`descricao-rota-menu`}>
                        {rota.descricao}
                    </div>
                </li>
            )
        })
    }

    return (
        <div className={`w-full h-full`}>
            <div className={`container-app`}>

                <aside className={`sidebar card-app px-2`}>
                    <div
                        className={`text-primary-content nome-app flex items-center justify-start border-b border-b-base-content gap-2 px-6`}>
                        <div>{<GiMonkey size={30}/>}</div>
                        <label className={`nome-app-label text-primary`}>Tamarin</label>
                    </div>
                    <div className={`container-rotas-menu p-2`}>
                        <ul className={`grid grid-cols-1 gap-1 lista-rotas-menu mt-4`}>
                            {renderListaDeRotas()}
                        </ul>
                    </div>
                </aside>
                <div className={`container-pagina overflow-y-scroll`}>
                    <header className={`navbar-app card-app flex items-center justify-start px-5`}>

                    </header>
                    <div className={`breadcrumbs-app px-5`}>
                        <span>{`teste > teste > tested`}</span>
                    </div>
                    <main className={`card-app conteudo-pagina p-5`}>
                        <div className="overflow-y-scroll">

                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}