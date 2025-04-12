'use client'

import {CardDetalhadoUsuario} from "@/app/(autenticado)/adm/dev/card-detalhado-usuario";
import {CardUsuario} from "@/app/(autenticado)/adm/dev/card-usuario";
import {infosUsuario} from "@/app/(autenticado)/adm/dev/data";
import {InfoUsuario} from "@/app/(autenticado)/adm/dev/types";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";


export default function PaginaDev() {

    const [usuario, setUsuario] = useState<InfoUsuario>();

    function renderInfoUsuario() {
        return infosUsuario.map((info, index) => {
            return (
                <CardUsuario infoUsuario={info}
                             key={index}
                             onclick={() => setUsuario(info)}/>
            )
        })
    }

    return (
        <div className={`container-usuario`}>
            <div className={`lista-usuario flex flex-col gap-2 overflow-y-scroll h-screen pb-50`}>
                {renderInfoUsuario()}
            </div>
            <CardDetalhadoUsuario usuario={usuario}/>
        </div>
    )
}