import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {BreadcrumbType, RouteType} from "@/sistema/_root/types/root-types";

type Props = {
    routes: RouteType[],
    setRoutes: Dispatch<SetStateAction<RouteType[]>>,
    breadcrumbs: BreadcrumbType[],
    setBreadcrumbs: Dispatch<SetStateAction<BreadcrumbType[]>>
}

export const BreadcrumbContext = createContext<Props>({
    routes: [],
    setRoutes: () => {},
    breadcrumbs: [],
    setBreadcrumbs: () => {}
})

export function BreadcrumbContextProvider({children}: {children: ReactNode}) {

    const [routes, setRoutes] = useState<RouteType[]>([]);
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>([]);

    return (
        <BreadcrumbContext.Provider value={{
            routes,
            setRoutes,
            breadcrumbs,
            setBreadcrumbs
        }}>
            {children}
        </BreadcrumbContext.Provider>
    )
}