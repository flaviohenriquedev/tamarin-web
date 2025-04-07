'use client'

import {ButtonHTMLAttributes} from "react";

type TipoClasseBotao =
    'btn-neutral' |
    'btn-primary' |
    'btn-secondary' |
    'btn-accent' |
    'btn-info' |
    'btn-success' |
    'btn-warning' |
    'btn-error'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    descricao?: string
    tipoClasse?: TipoClasseBotao
}

export function Button({
                           descricao,
                           type,
                           disabled,
                           tipoClasse = 'btn-primary',
                           onClick
                       }: ButtonProps) {

    return (
        <button type={type}
                disabled={disabled}
                className={`
                        btn
                        btn-active
                        ${tipoClasse}
                        btn-sm`}
                onClick={onClick}>
            {descricao}
        </button>
    )
}