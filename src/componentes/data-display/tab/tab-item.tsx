import {ReactNode} from "react";

type Props = {
    title: string
    children: ReactNode
    selected?: boolean
    onSelect: () => void;
}

export function TabItem({title, children, selected, onSelect}: Props) {
    return (
        <>
            <input
                type="radio"
                name="my_tabs_3"
                className={`tab ${selected && 'tab-active'}`}
                aria-label={title}
                onClick={onSelect}/>
            <div className="tab-content bg-base-100 border-base-300 p-6">{children}</div>
        </>
    )
}