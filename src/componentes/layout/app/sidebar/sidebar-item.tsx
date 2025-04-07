import {IoIosArrowDown} from "react-icons/io";
import {RouteType} from "@/root/type/route-type";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {SidebarSubitem} from "@/componentes/layout/app/sidebar/sidebar-subitem";
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    rota: RouteType,
}

export function SidebarItem({rota}: Props) {

    const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
    const route = useRouter()

    function handleClickItemMenu(rota: RouteType) {
        if (rota.href) {
            route.push(rota.href)
            return;
        }
        setOpenSubMenu(!openSubMenu)
    }

    function renderSubMenu(rota: RouteType) {
        if (rota.subRoute) {
            return rota.subRoute.map(subRota => {
                return (
                    <SidebarSubitem key={subRota.title} subRota={subRota} />
                )
            })
        }
    }

    return (
        <li key={rota.title}>
            <div
                onClick={() => handleClickItemMenu(rota)}
                className={`item-rota-menu
                                    py-2
                                    ${openSubMenu && 'bg-primary text-primary-content'}
                                    hover:bg-primary
                                    hover:text-primary-content`}>
                <div className={`icone-rota-menu flex items-center justify-center`}>
                    {rota.icon}
                </div>
                <div className={`
                                        descricao-rota-menu
                                        flex
                                        items-center
                                        justify-start`}>
                    <label>{rota.title}</label>
                </div>
                {rota.subRoute && (
                    <div className={`
                                        flex
                                        items-center
                                        rounded-full
                                        arrow-rota-menu
                                        px-4 
                                        transition-transform
                                        duration-300
                                        ${openSubMenu ? 'rotate-180' : ''}
                                        `}>
                        <IoIosArrowDown/>
                    </div>
                )}
            </div>
            <AnimatePresence initial={false}>
                {openSubMenu && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {renderSubMenu(rota)}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    )
}