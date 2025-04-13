import {IoIosArrowDown} from "react-icons/io";
import {ReactNode, useState} from "react";
import {useRouter} from "next/navigation";
import {SidebarSubitem} from "@/componentes/layout/app/sidebar/sidebar-subitem";
import {AnimatePresence, motion} from 'framer-motion'
import {RouteType} from "@/sistema/_root/types/root-types";

type Props = {
    rota: RouteType,
}

export function SidebarItem({rota}: Props) {

    const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
    const route = useRouter()

    function handleClickItemMenu(title: string, icon?: ReactNode, href?: string) {
        push(href);
    }
    function push(href?: string) {
        if (href) {
            route.push(href)
            return;
        }
    }

    function renderSubMenu(subRotas?: RouteType[]) {
        if (subRotas) {
            return (
                <AnimatePresence initial={false}>
                    {openSubMenu && (
                        <motion.ul
                            initial={{height: 0, opacity: 0}}
                            animate={{height: 'auto', opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={{duration: 0.2}}
                        >
                            {subRotas.map(subRota => {
                                return (
                                    <SidebarSubitem key={subRota.title}
                                                    subRota={subRota}
                                                    handleClick={handleClickItemMenu}>
                                        {renderSubMenu(subRota.subRoute)}
                                    </SidebarSubitem>
                                )
                            })}
                        </motion.ul>
                    )}
                </AnimatePresence>
            )
        }
    }

    return (
        <li key={rota.title} className={`border-b ${openSubMenu ? 'border-primary' : 'border-transparent '} `}>
            <div
                onClick={() => {
                    handleClickItemMenu(rota.title, rota.icon, rota?.href)
                    rota.subRoute && setOpenSubMenu(!openSubMenu)
                }}
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
            {renderSubMenu(rota.subRoute)}
        </li>
    )
}
