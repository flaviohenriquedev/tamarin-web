import {InfoUsuario} from "@/app/(autenticado)/adm/dev/types";
import {useEffect, useState} from "react";

type Props = {
    usuario?: InfoUsuario
}

export function CardDetalhadoUsuario({usuario}: Props) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        usuario?.nome && setIsOpen(true);
    }, [usuario])

    return (
        <div className={`card-usuario p-4
                            bg-base-300
                            h-screen
                            shadow-sm
                            rounded-sm
                            ${isOpen ? 'w-80 opacity-100' : 'w-0 opacity-0'}
                            transition-all duration-200`}>
            <div className={`flex items-start justify-between`}>
                <figure>
                    <img
                        src={usuario?.urlFoto}
                        alt="Shoes"/>
                </figure>
                <button type={`button`}
                        onClick={() => setIsOpen(false)}
                        className={`rounded-full w-8 h-8 hover:cursor-pointer bg-secondary`}>x
                </button>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {usuario?.nome}
                </h2>
                <p>{usuario?.cargo}</p>
            </div>
        </div>
    )
}