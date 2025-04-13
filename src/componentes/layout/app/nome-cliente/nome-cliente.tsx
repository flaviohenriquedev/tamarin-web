import {redirect} from "next/navigation";
import {GiMonkey} from "react-icons/gi";

export function NomeCliente() {
    return (
        <div className={`
                        flex
                        h-full
                        text-primary
                        items-center
                        justify-start
                        text-[18pt]
                        gap-1
                        px-6
                        shrink-0`}
             onClick={() => redirect("/adm")}
        >
            <GiMonkey size={35}/>
            <label className="text-primary font-bold">Tamarin</label>
        </div>
    )
}