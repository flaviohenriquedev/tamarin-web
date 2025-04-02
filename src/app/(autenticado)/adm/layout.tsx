import {ReactNode} from "react";

export default function AdmLayout(
    {children}: { children: ReactNode }
) {
    return (
        <div>
            {children}
        </div>
    )
}