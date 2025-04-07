import {GoDotFill} from "react-icons/go";
import {SubRoute} from "@/root/type/route-type";

export function SidebarSubitem({subRota}: {subRota: SubRoute}) {
    return (
        <li key={subRota.title}>
            <div className={`item-rota-menu py-2`}>
                <div className={`icone-rota-menu flex items-center justify-center`}>
                    {<GoDotFill size={8}/>}
                </div>
                <div className={`
                                        descricao-rota-menu
                                        flex
                                        items-center
                                        justify-start
                                        text-[10pt]`}>
                    <label>{subRota.title}</label>
                </div>
            </div>
        </li>
    )
}