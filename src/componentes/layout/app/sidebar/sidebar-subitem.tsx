import {GoDotFill} from "react-icons/go";
import {ReactNode, useState} from "react";
import {IoIosArrowDown} from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion";
import {RouteType} from "@/sistema/_root/types/root-types";
import { MdLastPage } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";

type Props = {
    children: ReactNode;
    subRota: RouteType;
    className?: string;
    handleClick: (title: string,
                   icon?: ReactNode,
                   href?: string) => void;
}

export function SidebarSubitem({children, className, subRota, handleClick}: Props) {
    const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

    function handleClickItemMenu(rota: RouteType) {
        handleClick(rota.title, rota.icon, rota.href)
        setOpenSubMenu(!openSubMenu)
    }

    return (
        <li key={subRota.title} className={className}>
            <div className={`item-rota-menu py-2 hover:bg-base-300`}
                 onClick={() => handleClickItemMenu(subRota)}>
                <div className={`icone-rota-menu flex items-center justify-center`}>
                    {subRota.subRoute ? <RxDropdownMenu /> : <MdLastPage />}
                </div>
                <div className={`
                                        descricao-rota-menu
                                        flex
                                        items-center
                                        justify-start
                                        text-[10pt]`}>
                    <label>{subRota.title}</label>
                </div>
                {children && (
                    <div className={`
                                        flex
                                        items-center
                                        rounded-full
                                        arrow-rota-menu
                                        px-4 
                                        transition-transform
                                        duration-300
                                        `}>
                        <IoIosArrowDown/>
                    </div>
                )}
            </div>
            <AnimatePresence initial={false}>
                {openSubMenu && (
                    <motion.div
                        className={`ml-10`}
                        initial={{height: 0, opacity: 0}}
                        animate={{height: 'auto', opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.2}}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    )
}