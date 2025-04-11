'use client'

import {ButtonHTMLAttributes, ReactNode} from "react";

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
    icone?: ReactNode;
    tipoClasse?: TipoClasseBotao
}

export function Button({
                           descricao,
                           icone,
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
            <div className={'flex items-center justify-between gap-x-2'}>
                {descricao}
                {icone}
            </div>
        </button>
    )
}