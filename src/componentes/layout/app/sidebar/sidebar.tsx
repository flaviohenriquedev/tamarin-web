'use client'

import {GiMonkey} from "react-icons/gi";
import {rotas} from "@/sistema/_root/constantes/rotas";
import {IoIosArrowDown} from "react-icons/io";
import {RouteType} from "@/root/type/route-type";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {GoDotFill} from "react-icons/go";
import {SidebarItem} from "@/componentes/layout/app/sidebar/sidebar-item";

export function Sidebar() {

    function renderListaDeRotas() {
        return rotas.map(rota => {
            return (
                <SidebarItem key={rota.title} rota={rota}/>
            )
        })
    }

    return (
        <aside className={`sidebar-app bg-base-200 border-r border-base-300`}>
            <div
                className={`text-primary nome-app flex items-center justify-start border-b border-base-300 gap-2 px-6`}>
                <div>{<GiMonkey size={30}/>}</div>
                <label className={`nome-app-label text-primary`}>Tamarin</label>
            </div>
            <div className={`container-rotas-menu`}>
                <ul className={`grid grid-cols-1 gap-1 lista-rotas-menu mt-4`}>
                    {renderListaDeRotas()}
                </ul>
            </div>
        </aside>
    )
}