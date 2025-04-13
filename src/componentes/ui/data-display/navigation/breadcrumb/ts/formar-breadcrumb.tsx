import {RouteType} from "@/sistema/_root/types/root-types";
import { icones as icone } from '@/sistema/_root/icones/_index'

export function formarBreadcrumb(path: string | null, rotas: RouteType[], caminho: RouteType[] = []): RouteType[] | null {
    for (const rota of rotas) {
        const novoCaminho = [...caminho, rota];
        getIcon(rota);
        if (rota.href === path) {
            return novoCaminho;
        }

        if (rota.subRoute) {
            const resultado = formarBreadcrumb(path, rota.subRoute, novoCaminho);
            if (resultado) return resultado;
        }
    }

    return null;
}

function getIcon(rota: RouteType) {

    if (rota.subRoute && !rota.icon) {
        rota.icon = <icone.tresPontos />
    }

    if (!rota.icon) {
        rota.icon = <icone.pasta />
    }
}