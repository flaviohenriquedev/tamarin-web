import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export function LineContainer({ children }: Props) {
    return (
        <div className={`flex w-fit flex-wrap gap-2`}>
            {children}
        </div>
    )
}