import {TabItem} from "@/componentes/ui/data-display/tab/tab-item";
import {useState} from "react";
import {Tab} from "@/sistema/_root/types/root-types";

type Props = {
    tabs: Tab[]
}

export function TabContainer({tabs}: Props) {

    const [indexTabSelected, setIndexTabSelected] = useState<number>(0)

    function renderTabs() {
        return tabs.map((tab, index) => {
            return (
                <TabItem key={tab.title}
                         title={tab.title}
                         onSelect={() => setIndexTabSelected(index)}
                         selected={index === indexTabSelected}
                >
                    {tab.content}
                </TabItem>
            )
        })
    }

    return (
        <div role="tablist"
             className="tabs tabs-border ">
            {renderTabs()}
        </div>
    )
}