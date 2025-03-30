import {ReactNode} from "react";

interface Props {
    descricao: string;
    children: ReactNode;
}

export function LabelContainer({descricao, children}: Props) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend m-1">{descricao}</legend>
            {children}
        </fieldset>
    )
}