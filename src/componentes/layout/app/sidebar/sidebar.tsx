'use client'

import {SidebarItem} from "@/componentes/layout/app/sidebar/sidebar-item";
import {RouteType} from "@/sistema/_root/types/root-types";
import {useEffect, useState} from "react";
import {InputFilter} from "@/componentes/ui/data-input/input-filter/Input-filter";
import {LineContentFill} from "@/componentes/ui/data-display/line-content/line-content-fill";
import {LineContent} from "@/componentes/ui/data-display/line-content/line-content";

type Props = {
    routes: RouteType[]
}

export function Sidebar({routes}: Props) {

    const [searchMenu, setSearchMenu] = useState("");
    const [filteredData, setFilteredData] = useState<RouteType[]>(routes);

    useEffect(() => {
        const filterMenu = () => {
            const filteredMap: { [key: string]: RouteType } = {};

            if (routes) {
                routes.forEach((d) => {
                    const filteredMenu: RouteType = {...d};
                    if (
                        d.title
                            .toLowerCase()
                            .includes(searchMenu.toLowerCase()) ||
                        (d.subRoute &&
                            d.subRoute.some((sub) =>
                                sub.title
                                    .toLowerCase()
                                    .includes(searchMenu.toLowerCase())
                            ))
                    ) {
                        filteredMap[d.title] = filteredMenu;
                    }

                    if (d.subRoute) {
                        const filteredSubmenu = d.subRoute.filter((sub) =>
                            sub.title
                                .toLowerCase()
                                .includes(searchMenu.toLowerCase())
                        );
                        if (filteredSubmenu.length > 0) {
                            filteredMenu.subRoute = filteredSubmenu;
                            filteredMap[d.title] = filteredMenu;
                        }
                    }
                });
            }

            const filtered: RouteType[] = Object.values(filteredMap);
            setFilteredData(filtered);
        };

        filterMenu();
    }, [routes, searchMenu]);

    function renderListaDeRotas() {
        return (
            <ul className="grid grid-cols-1 gap-1 lista-rotas-menu mt-4">
                {filteredData.map(rota => (
                    <SidebarItem key={rota.title} rota={rota}/>
                ))}
            </ul>
        );
    }

    return (
        <aside className="h-screen flex flex-col">
            <div className={`flex justify-center sidebar-filter-menu py-2 px-4 w-full `}>
                <LineContent>
                    <InputFilter placeholder={`Filtrar Menu`}
                                 onChange={(e) => setSearchMenu(e.target.value)}/>
                </LineContent>
            </div>
            {/* Lista com scroll se passar da tela */}
            <div className={`
                container-rotas-menu
                overflow-y-scroll
                overflow-x-hidden
                flex-1
                pb-50
                h-32
            `}>
                {renderListaDeRotas()}
            </div>
        </aside>
    );
}

