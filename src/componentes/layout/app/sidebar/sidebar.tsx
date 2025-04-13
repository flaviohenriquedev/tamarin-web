'use client'

import {GiMonkey} from "react-icons/gi";
import {redirect} from "next/navigation";
import {SidebarItem} from "@/componentes/layout/app/sidebar/sidebar-item";
import {RouteType} from "@/sistema/_root/types/root-types";
import {useEffect, useState} from "react";
import {InputString} from "@/componentes/ui/data-input/input/input-string";
import {InputFilter} from "@/componentes/ui/data-input/input-filter/Input-filter";
import {LineContentFill} from "@/componentes/ui/data-display/line-content/line-content-fill";

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
        <aside className="sidebar-app bg-base-200 border-r border-base-300 h-screen flex flex-col">
            {/* Cabeçalho fixo */}
            <div
                className="text-primary nome-app flex items-center justify-start border-b border-base-300 gap-2 px-6 shrink-0"
                onClick={() => redirect("/adm")}
            >
                <GiMonkey size={30}/>
                <label className="nome-app-label text-primary">Tamarin</label>
            </div>
            <div className={`sidebar-filter-menu p-2`}>
                <LineContentFill>
                    <InputFilter placeholder={`Buscar Menu`}
                                 onChange={(e) => setSearchMenu(e.target.value)}/>
                </LineContentFill>
            </div>
            {/* Lista com scroll se passar da tela */}
            <div className="container-rotas-menu overflow-y-scroll overflow-x-hidden flex-1 pb-50">
                {renderListaDeRotas()}
            </div>
        </aside>
    );
}

