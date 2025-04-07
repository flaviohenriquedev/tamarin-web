import {GoPeople} from "react-icons/go";
import {BsPersonPlus} from "react-icons/bs";
import {RouteType} from "@/root/type/route-type";
import { LuFileSpreadsheet } from "react-icons/lu";

const tamanhoIcone: number = 22
export const rotas: RouteType[] = [
    {
        title: 'Funcionário',
        icon: <BsPersonPlus size={tamanhoIcone}/>,
        subRoute: [
            {
                title: 'Férias'
            },
            {
                title: 'Folha'
            },
            {
                title: 'Ponto'
            },
        ]
    },
    {
        title: 'Usuário',
        icon: <GoPeople size={tamanhoIcone}/>,
        href: "/adm/usuario"
    },
    {
        title: 'Pagamento',
        icon: <LuFileSpreadsheet size={tamanhoIcone}/>,
        href: "/adm/pagamento"
    },
]