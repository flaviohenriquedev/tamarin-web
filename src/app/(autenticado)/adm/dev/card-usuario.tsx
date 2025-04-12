import {InfoUsuario} from "@/app/(autenticado)/adm/dev/types";

type Props = {
    infoUsuario: InfoUsuario
    onclick?: () => void
}

export function CardUsuario({infoUsuario, onclick}: Props) {
    return (
        <div className={`
                        flex
                        gap-2
                        items-center
                        p-4
                        bg-base-300
                        rounded-sm
                        
                        active:scale-95
                        transition-transform duration-200
                        hover:bg-primary
                        hover:text-primary-content`}
             onClick={onclick}>
            <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                    <img
                        src={infoUsuario.urlFoto}
                        alt="Avatar Tailwind CSS Component"/>
                </div>
            </div>
            <div className={`flex flex-col`}>
                <div className={`text-lg font-bold`}>
                    {infoUsuario.nome}
                </div>
                <div className={`text-xs`}>
                    {infoUsuario.cargo}
                </div>
            </div>
        </div>
    )
}